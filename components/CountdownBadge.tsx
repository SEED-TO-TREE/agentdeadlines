"use client";

import { useEffect, useState } from "react";

interface CountdownBadgeProps {
  daysLeft: number;
  deadlineDate: Date;
}

export default function CountdownBadge({
  daysLeft: initialDays,
  deadlineDate,
}: CountdownBadgeProps) {
  const [daysLeft, setDaysLeft] = useState(initialDays);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diffMs = new Date(deadlineDate).getTime() - now.getTime();
      setDaysLeft(Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    }, 60000);
    return () => clearInterval(timer);
  }, [deadlineDate]);

  if (daysLeft < 0) {
    const daysAgo = Math.abs(daysLeft);
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-bold bg-white/5 text-white/40 border border-white/10">
        Ended {daysAgo}d ago
      </span>
    );
  }

  if (daysLeft === 0) {
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
        D-Day
      </span>
    );
  }

  if (daysLeft <= 7) {
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
        D-{daysLeft}
      </span>
    );
  }

  if (daysLeft <= 30) {
    return (
      <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
        D-{daysLeft}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
      D-{daysLeft}
    </span>
  );
}
