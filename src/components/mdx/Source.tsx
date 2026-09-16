/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Book citation box for the "Conseils" module: names the reference book an
 * idea is distilled from, so the reader can go read the original.
 */
export function Source({ book, author }: { book: string; author: string }) {
  return (
    <p className="not-prose mt-8 border-t border-border pt-3 text-xs text-muted-foreground italic">
      {book} - {author}
    </p>
  );
}
