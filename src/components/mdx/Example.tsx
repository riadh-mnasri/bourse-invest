/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Worked example box, used for concrete numbers (fees, allocations, drawdowns).
 */
import type { ReactNode } from "react";

export function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-border bg-card px-4 py-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <div className="text-sm text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0">{children}</div>
    </div>
  );
}
