import { CategoryOption } from "./types";

export type SectionId = "agents" | "ai" | "conferences" | "sports";

export interface SectionConfig {
  id: SectionId;
  /** Tab label in the header */
  label: string;
  href: string;
  /** YAML file under data/ */
  file: string;
  categories: CategoryOption[];
}

export const SECTIONS: SectionConfig[] = [
  {
    id: "agents",
    label: "AI Agents",
    href: "/",
    file: "events.yaml",
    categories: [
      { value: "hackathon", label: "Hackathon" },
      { value: "competition", label: "Competition" },
      { value: "benchmark", label: "Benchmark" },
    ],
  },
  {
    id: "ai",
    label: "AI Competitions",
    href: "/ai-competitions",
    file: "ai.yaml",
    categories: [
      { value: "hackathon", label: "Hackathon" },
      { value: "competition", label: "Competition" },
      { value: "benchmark", label: "Benchmark" },
    ],
  },
  {
    id: "conferences",
    label: "AI Conferences",
    href: "/conferences",
    file: "conferences.yaml",
    categories: [
      { value: "ml", label: "ML" },
      { value: "cv", label: "CV" },
      { value: "nlp", label: "NLP" },
      { value: "robotics", label: "Robotics" },
      { value: "ai", label: "AI" },
      { value: "data-mining", label: "Data Mining" },
      { value: "ir", label: "IR" },
      { value: "speech", label: "Speech" },
    ],
  },
  {
    id: "sports",
    label: "Sports Tech",
    href: "/sports-tech",
    file: "sports.yaml",
    categories: [
      { value: "competition", label: "Competition" },
      { value: "accelerator", label: "Accelerator" },
      { value: "conference", label: "Conference" },
      { value: "workshop", label: "Workshop" },
      { value: "journal", label: "Journal" },
    ],
  },
];

export function getSection(id: SectionId): SectionConfig {
  const section = SECTIONS.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown section: ${id}`);
  return section;
}
