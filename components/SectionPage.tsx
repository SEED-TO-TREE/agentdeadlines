import { loadEvents, sortEvents } from "@/lib/parseEvents";
import { getSection, SectionId } from "@/lib/sections";
import EventList from "./EventList";
import Footer from "./Footer";

interface SectionPageProps {
  section: SectionId;
  heading: string;
  /** Intro text; `{count}` is replaced with the number of upcoming deadlines. */
  intro: string;
  showEstimatedHint?: boolean;
}

/** Server-rendered page for one data section (YAML file + filters). */
export default function SectionPage({ section, heading, intro, showEstimatedHint }: SectionPageProps) {
  const config = getSection(section);
  const events = sortEvents(loadEvents(config.file));
  const upcoming = events.filter((e) => e.status === "upcoming");

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{heading}</h1>
        <p className="text-white/50 text-sm mt-2 max-w-2xl leading-relaxed">
          {intro.replace("{count}", String(upcoming.length))}
          {showEstimatedHint && (
            <>
              {" "}Dates marked <span className="text-yellow-400/80">Est.</span> are projected
              from previous years.
            </>
          )}
        </p>
      </section>

      <EventList
        events={JSON.parse(JSON.stringify(events))}
        categories={config.categories}
        section={section}
      />
      <Footer />
    </>
  );
}
