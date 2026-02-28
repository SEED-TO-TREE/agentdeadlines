"use client";

import { useState, useMemo } from "react";
import { ParsedEvent, Category, Format, Status } from "@/lib/types";
import FilterBar from "./FilterBar";
import EventCard from "./EventCard";

interface EventListProps {
  events: ParsedEvent[];
}

export default function EventList({ events }: EventListProps) {
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [formatFilter, setFormatFilter] = useState<Format | "all">("all");
  const [statusFilter, setStatusFilter] = useState<Status>("upcoming");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (statusFilter === "upcoming" && e.status !== "upcoming") return false;
      if (statusFilter === "past" && e.status !== "past") return false;
      if (categoryFilter !== "all" && !e.categories.includes(categoryFilter))
        return false;
      if (formatFilter !== "all" && e.format !== formatFilter) return false;
      return true;
    });
  }, [events, categoryFilter, formatFilter, statusFilter]);

  return (
    <>
      <FilterBar
        categoryFilter={categoryFilter}
        formatFilter={formatFilter}
        statusFilter={statusFilter}
        onCategoryChange={setCategoryFilter}
        onFormatChange={setFormatFilter}
        onStatusChange={setStatusFilter}
      />
      <div className="mt-6 flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-white/30 text-sm">
            No events found for the selected filters.
          </div>
        ) : (
          filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </div>
    </>
  );
}
