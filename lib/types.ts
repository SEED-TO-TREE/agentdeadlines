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

/** Allowed values depend on the section; see lib/sections.ts. */
export type Category = string;

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
