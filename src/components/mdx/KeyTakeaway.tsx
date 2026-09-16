/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * End-of-article summary box: the one or two things worth remembering.
 */
import type { ReactNode } from "react";

export function KeyTakeaway({
  children,
  label = "À retenir",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="not-prose my-8 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
      <div className="text-sm text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0">{children}</div>
    </div>
  );
}
