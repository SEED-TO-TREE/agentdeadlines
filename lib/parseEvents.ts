import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { AgentEvent, ParsedEvent } from "./types";

export function loadEvents(): ParsedEvent[] {
  const filePath = path.join(process.cwd(), "data", "events.yaml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const raw = yaml.load(fileContents) as AgentEvent[];

  const now = new Date();

  return raw.map((event) => {
    const deadlineDate = parseDeadline(event.deadline, event.timezone);
    const diffMs = deadlineDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return {
      ...event,
      deadlineDate,
      daysLeft,
      status: daysLeft >= 0 ? "upcoming" : "past",
    };
  });
}

function parseDeadline(deadline: string, _timezone: string): Date {
  // Parse "2026-04-15 23:59" format as UTC
  const [datePart, timePart] = deadline.split(" ");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
}

export function sortEvents(events: ParsedEvent[]): ParsedEvent[] {
  const upcoming = events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => a.daysLeft - b.daysLeft);

  const past = events
    .filter((e) => e.status === "past")
    .sort((a, b) => b.daysLeft - a.daysLeft);

  return [...upcoming, ...past];
}
