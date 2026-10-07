import type { ReactNode } from "react";

export default function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "accent" }) {
  const styles =
    tone === "accent"
      ? "border-accent/25 bg-accent-soft text-accent"
      : "border-line bg-surface text-muted";
  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.72rem] font-medium ${styles}`}>
      {children}
    </span>
  );
}
