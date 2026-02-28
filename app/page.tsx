import { loadEvents, sortEvents } from "@/lib/parseEvents";
import EventList from "@/components/EventList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const events = sortEvents(loadEvents());
  const activeEvents = events.filter((e) => e.status === "upcoming").length;

  return (
    <>
      <Header totalEvents={events.length} activeEvents={activeEvents} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <EventList
          events={JSON.parse(JSON.stringify(events))}
        />
      </main>
      <Footer />
    </>
  );
}
