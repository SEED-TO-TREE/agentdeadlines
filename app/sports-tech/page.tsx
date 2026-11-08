import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Sports Tech Deadlines — Competitions, Accelerators & Paper Deadlines",
  description:
    "Deadlines for sports tech and wearable builders: startup competitions, accelerators, sports-science conferences, workshops and journals.",
  alternates: { canonical: "/sports-tech" },
};

export default function SportsTech() {
  return (
    <SectionPage
      section="sports"
      heading="Sports Tech Deadlines"
      intro="{count} upcoming deadlines for sports tech and wearable builders: startup competitions, accelerators, and paper deadlines at sports-science, biomechanics and ubiquitous-computing venues."
      showEstimatedHint
    />
  );
}
