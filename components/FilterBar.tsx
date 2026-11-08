"use client";

import { Category, CategoryOption, Format, Status } from "@/lib/types";

interface FilterBarProps {
  categories: CategoryOption[];
  categoryFilter: Category | "all";
  formatFilter: Format | "all";
  statusFilter: Status;
  onCategoryChange: (value: Category | "all") => void;
  onFormatChange: (value: Format | "all") => void;
  onStatusChange: (value: Status) => void;
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
        active
          ? "bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30"
          : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
      }`}
    >
      {children}
    </button>
  );
}

export default function FilterBar({
  categories,
  categoryFilter,
  formatFilter,
  statusFilter,
  onCategoryChange,
  onFormatChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 pb-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] uppercase tracking-wider text-white/30 mr-1">Category</span>
        <Pill active={categoryFilter === "all"} onClick={() => onCategoryChange("all")}>All</Pill>
        {categories.map((c) => (
          <Pill key={c.value} active={categoryFilter === c.value} onClick={() => onCategoryChange(c.value)}>
            {c.label}
          </Pill>
        ))}
      </div>

      <div className="sm:border-l sm:border-white/10 sm:pl-3 flex flex-wrap items-center gap-2">
        <span className="text-[10px] uppercase tracking-wider text-white/30 mr-1">Format</span>
        <Pill active={formatFilter === "all"} onClick={() => onFormatChange("all")}>All</Pill>
        <Pill active={formatFilter === "online"} onClick={() => onFormatChange("online")}>Online</Pill>
        <Pill active={formatFilter === "in-person"} onClick={() => onFormatChange("in-person")}>In-person</Pill>
        <Pill active={formatFilter === "hybrid"} onClick={() => onFormatChange("hybrid")}>Hybrid</Pill>
      </div>

      <div className="sm:border-l sm:border-white/10 sm:pl-3 flex flex-wrap items-center gap-2">
        <span className="text-[10px] uppercase tracking-wider text-white/30 mr-1">Status</span>
        <Pill active={statusFilter === "upcoming"} onClick={() => onStatusChange("upcoming")}>Upcoming</Pill>
        <Pill active={statusFilter === "past"} onClick={() => onStatusChange("past")}>Past</Pill>
      </div>
    </div>
  );
}
