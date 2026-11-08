import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "AI Competition & Hackathon Deadlines — Kaggle, Devpost and more",
  description:
    "Upcoming AI and machine learning hackathons, Kaggle competitions and data challenges, beyond agent-specific events.",
  alternates: { canonical: "/ai-competitions" },
};

export default function AICompetitions() {
  return (
    <SectionPage
      section="ai"
      heading="AI Competition & Hackathon Deadlines"
      intro="{count} upcoming AI and ML hackathons, Kaggle competitions and data challenges. Agent-specific events live on the AI Agents tab."
    />
  );
}
