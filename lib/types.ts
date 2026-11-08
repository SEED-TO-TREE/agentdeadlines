export interface AgentEvent {
  id: string;
  title: string;
  full_name: string;
  organizer: string;
  url: string;
  deadline: string;
  timezone: string;
  start_date?: string;
  end_date?: string;
  prize?: string;
  categories: Category[];
  format: Format;
  platform: string;
  tags: string[];
  note: string;
  /** Deadline projected from previous years; confirm once the official call is out. */
  estimated?: boolean;
}

export type Category =
  | "hackathon"
  | "competition"
  | "benchmark"
  | "accelerator"
  | "conference"
  | "workshop"
  | "journal";

export interface CategoryOption {
  value: Category;
  label: string;
}
export type Format = "online" | "in-person" | "hybrid";
export type Status = "upcoming" | "past";

export interface ParsedEvent extends AgentEvent {
  deadlineDate: Date;
  daysLeft: number;
  status: Status;
}
