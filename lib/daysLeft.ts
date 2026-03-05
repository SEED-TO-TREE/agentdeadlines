/**
 * Calculate D-day as calendar date difference.
 * Uses the user's local date for "today" and the deadline's UTC date.
 * e.g. Mar 7 deadline, user's local date Mar 6 → D-1
 */
export function calcDaysLeft(deadlineDate: Date | string): number {
  const now = new Date();
  const deadline = new Date(deadlineDate);
  const todayLocal = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const deadlineDay = Date.UTC(
    deadline.getUTCFullYear(),
    deadline.getUTCMonth(),
    deadline.getUTCDate()
  );
  return Math.round((deadlineDay - todayLocal) / (1000 * 60 * 60 * 24));
}
