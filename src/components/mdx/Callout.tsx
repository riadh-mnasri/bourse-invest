/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Pedagogical callout box for warnings and important nuances inside articles.
 */
import type { ReactNode } from "react";

type CalloutTone = "info" | "warning";

export function Callout({ tone = "info", children }: { tone?: CalloutTone; children: ReactNode }) {
  return (
    <div
      className={
        tone === "warning"
          ? "not-prose my-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-foreground"
          : "not-prose my-6 rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 text-sm text-foreground"
      }
    >
      {children}
    </div>
  );
}
