import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentDeadlines — AI Agent Hackathon & Competition Deadline Tracker",
  description:
    "Never miss an AI Agent hackathon or competition deadline. Track upcoming AI agent competitions, hackathons, and benchmark challenges in one place.",
  openGraph: {
    title: "AgentDeadlines",
    description:
      "Never miss an AI Agent hackathon or competition deadline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
