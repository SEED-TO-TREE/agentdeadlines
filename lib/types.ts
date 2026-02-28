export interface AgentEvent {
  id: string;
  title: string;
  full_name: string;
  organizer: string;
  url: string;
  deadline: string;
  timezone: string;
  start_date: string;
  end_date: string;
  prize: string;
  categories: Category[];
  format: Format;
  platform: string;
  tags: string[];
  note: string;
}

export type Category = "hackathon" | "competition" | "benchmark";
export type Format = "online" | "in-person" | "hybrid";
export type Status = "upcoming" | "past";

export interface ParsedEvent extends AgentEvent {
  deadlineDate: Date;
  daysLeft: number;
  status: Status;
}
