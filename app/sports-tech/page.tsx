import type { Metadata } from "next";
import { loadEvents, sortEvents } from "@/lib/parseEvents";
import EventList from "@/components/EventList";
import Footer from "@/components/Footer";
import { CategoryOption } from "@/lib/types";

export const metadata: Metadata = {
  title: "Sports Tech Deadlines — Competitions, Accelerators & Paper Deadlines",
  description:
    "Deadlines for sports tech and wearable builders: startup competitions, accelerators, sports-science conferences, workshops and journals.",
  alternates: { canonical: "/sports-tech" },
};

const categories: CategoryOption[] = [
  { value: "competition", label: "Competition" },
  { value: "accelerator", label: "Accelerator" },
  { value: "conference", label: "Conference" },
  { value: "workshop", label: "Workshop" },
  { value: "journal", label: "Journal" },
];

export default function SportsTech() {
  const events = sortEvents(loadEvents("sports.yaml"));
  const upcoming = events.filter((e) => e.status === "upcoming");

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Sports Tech Deadlines
        </h1>
        <p className="text-white/50 text-sm mt-2 max-w-2xl leading-relaxed">
          {upcoming.length} upcoming deadlines for sports tech and wearable
          builders: startup competitions, accelerators, and paper deadlines at
          sports-science, biomechanics and ubiquitous-computing venues. Dates
          marked <span className="text-yellow-400/80">Est.</span> are projected
          from previous years.
        </p>
      </section>

      <EventList
        events={JSON.parse(JSON.stringify(events))}
        categories={categories}
        section="sports"
      />
      <Footer />
    </>
  );
}
