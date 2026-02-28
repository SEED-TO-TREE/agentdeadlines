"use client";

import { useState, useMemo } from "react";
import { ParsedEvent, Category, Format, Status } from "@/lib/types";
import Header from "./Header";
import FilterBar from "./FilterBar";
import EventCard from "./EventCard";

interface EventListProps {
  events: ParsedEvent[];
}

interface GroupProps {
  title: string;
  color: string;
  dotColor: string;
  events: ParsedEvent[];
}

function EventGroup({ title, color, dotColor, events }: GroupProps) {
  if (events.length === 0) return null;
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <h2 className={`text-xs font-bold uppercase tracking-wider ${color}`}>{title}</h2>
        <span className="text-[10px] text-white/20">{events.length}</span>
      </div>
      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default function EventList({ events }: EventListProps) {
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [formatFilter, setFormatFilter] = useState<Format | "all">("all");
  const [statusFilter, setStatusFilter] = useState<Status>("upcoming");
  const [search, setSearch] = useState("");

  const totalEvents = events.length;
  const activeEvents = events.filter((e) => e.status === "upcoming").length;

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (statusFilter === "upcoming" && e.status !== "upcoming") return false;
      if (statusFilter === "past" && e.status !== "past") return false;
      if (categoryFilter !== "all" && !e.categories.includes(categoryFilter))
        return false;
      if (formatFilter !== "all" && e.format !== formatFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const matches =
          e.title.toLowerCase().includes(q) ||
          e.organizer.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [events, categoryFilter, formatFilter, statusFilter, search]);

  const thisWeek = filtered.filter((e) => e.status === "upcoming" && e.daysLeft <= 7);
  const thisMonth = filtered.filter((e) => e.status === "upcoming" && e.daysLeft > 7 && e.daysLeft <= 30);
  const comingUp = filtered.filter((e) => e.status === "upcoming" && e.daysLeft > 30 && e.daysLeft <= 90);
  const later = filtered.filter((e) => e.status === "upcoming" && e.daysLeft > 90);
  const past = filtered.filter((e) => e.status === "past");

  const isUpcoming = statusFilter === "upcoming";

  return (
    <>
      <Header
        totalEvents={totalEvents}
        activeEvents={activeEvents}
        search={search}
        onSearchChange={setSearch}
      />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <FilterBar
          categoryFilter={categoryFilter}
          formatFilter={formatFilter}
          statusFilter={statusFilter}
          onCategoryChange={setCategoryFilter}
          onFormatChange={setFormatFilter}
          onStatusChange={setStatusFilter}
        />
        <div className="mt-6">
          {isUpcoming ? (
            <>
              <EventGroup title="This Week" color="text-red-400" dotColor="bg-red-400 animate-pulse" events={thisWeek} />
              <EventGroup title="This Month" color="text-orange-400" dotColor="bg-orange-400" events={thisMonth} />
              <EventGroup title="Coming Up" color="text-emerald-400" dotColor="bg-emerald-400" events={comingUp} />
              <EventGroup title="Later" color="text-white/40" dotColor="bg-white/30" events={later} />
              {filtered.length === 0 && (
                <div className="text-center py-16 text-white/30 text-sm">
                  No upcoming events found.
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-3">
              {past.length === 0 ? (
                <div className="text-center py-16 text-white/30 text-sm">
                  No past events found.
                </div>
              ) : (
                past.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
