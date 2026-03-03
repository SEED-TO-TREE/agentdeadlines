import { loadEvents, sortEvents } from "@/lib/parseEvents";
import EventList from "@/components/EventList";
import Footer from "@/components/Footer";

// Revalidate every hour so server-rendered data stays fresh
export const revalidate = 3600;

export default function Home() {
  const events = sortEvents(loadEvents());

  return (
    <>
      <EventList events={JSON.parse(JSON.stringify(events))} />
      <Footer />
    </>
  );
}
