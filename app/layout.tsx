import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://agentdeadlines.com";

export const metadata: Metadata = {
  title: "AgentDeadlines — AI Agent Hackathon & Competition Deadline Tracker",
  description:
    "Never miss an AI Agent hackathon or competition deadline. Track upcoming AI agent competitions, hackathons, and benchmark challenges in one place.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "AgentDeadlines",
    description:
      "Never miss an AI Agent hackathon or competition deadline.",
    type: "website",
    url: siteUrl,
    siteName: "AgentDeadlines",
    images: [
      {
        url: "/og-image.png",
        width: 1194,
        height: 920,
        alt: "AgentDeadlines — AI Agent Hackathon & Competition Deadline Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentDeadlines",
    description: "Never miss an AI Agent hackathon or competition deadline.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
