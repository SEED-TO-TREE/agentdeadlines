import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "AI Conference Deadlines — CVPR, ICML, ACL, NeurIPS and more",
  description:
    "Paper submission deadlines for AI, ML, computer vision, NLP, robotics and data-mining conferences.",
  alternates: { canonical: "/conferences" },
};

export default function Conferences() {
  return (
    <SectionPage
      section="conferences"
      heading="AI Conference Deadlines"
      intro="{count} upcoming paper deadlines at AI, ML, vision, NLP, robotics and data-mining conferences. The countdown is to the full-paper deadline; abstract deadlines are in each note."
      showEstimatedHint
    />
  );
}
