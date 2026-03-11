import { loadEvents, sortEvents } from "@/lib/parseEvents";
import EventList from "@/components/EventList";
import Footer from "@/components/Footer";
import { ParsedEvent } from "@/lib/types";

function buildJsonLd(events: ParsedEvent[]) {
  const upcoming = events.filter((e) => e.status === "upcoming");

  const items = upcoming.map((e, i) => ({
    "@type": "Event",
    position: i + 1,
    name: e.full_name,
    description: e.note,
    startDate: e.start_date,
    endDate: e.end_date,
    url: e.url,
    eventAttendanceMode:
      e.format === "online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : e.format === "in-person"
          ? "https://schema.org/OfflineEventAttendanceMode"
          : "https://schema.org/MixedEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: e.organizer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Agent Hackathons & Competitions 2025–2026",
    description:
      "Curated list of AI agent hackathons, competitions, and benchmark challenges with deadlines.",
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export default function Home() {
  const events = sortEvents(loadEvents());
  const upcoming = events.filter((e) => e.status === "upcoming");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(events)) }}
      />

      {/* Server-rendered SEO content — visible to crawlers, visually integrated */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          AI Agent Hackathon &amp; Competition Deadlines
        </h1>
        <p className="text-white/50 text-sm mt-2 max-w-2xl leading-relaxed">
          Track {upcoming.length}+ upcoming AI agent hackathons, competitions,
          and benchmark challenges in one place. Never miss a deadline for
          building autonomous AI agents — from multi-agent systems to embodied
          AI robotics.
        </p>
      </section>

      <EventList events={JSON.parse(JSON.stringify(events))} />
      <Footer />
    </>
  );
}
