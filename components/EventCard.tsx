import { ParsedEvent } from "@/lib/types";
import CountdownBadge from "./CountdownBadge";

interface EventCardProps {
  event: ParsedEvent;
}

const categoryColors: Record<string, string> = {
  hackathon: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  competition: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  benchmark: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const formatLabels: Record<string, string> = {
  online: "Online",
  "in-person": "In-person",
  hybrid: "Hybrid",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function EventCard({ event }: EventCardProps) {
  const isPast = event.status === "past";

  return (
    <div
      className={`group relative rounded-xl border bg-white/[0.02] p-5 transition-all hover:bg-white/[0.05] ${
        isPast
          ? "border-white/5 opacity-50"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="shrink-0">
          <CountdownBadge
            daysLeft={event.daysLeft}
            deadlineDate={event.deadlineDate}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white leading-snug">
            {event.title}
          </h3>
          <p className="text-sm text-white/40 mt-0.5">{event.organizer}</p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3 text-xs text-white/50">
            <span>{formatDate(event.deadline.split(" ")[0])}</span>
            <span className="text-white/20">·</span>
            <span>{formatLabels[event.format]}</span>
            {event.prize && (
              <>
                <span className="text-white/20">·</span>
                <span className="text-[#00ff88]/80 font-medium">{event.prize}</span>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {event.categories.map((cat) => (
              <span
                key={cat}
                className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide border ${
                  categoryColors[cat] || "bg-white/5 text-white/40 border-white/10"
                }`}
              >
                {cat}
              </span>
            ))}
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] text-white/30 bg-white/5 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {event.note && (
            <p className="text-xs text-white/30 mt-2 leading-relaxed">
              {event.note}
            </p>
          )}
        </div>

        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 self-start sm:self-center px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            isPast
              ? "bg-white/5 text-white/30 border border-white/10"
              : "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 hover:bg-[#00ff88]/20"
          }`}
        >
          Apply →
        </a>
      </div>
    </div>
  );
}
