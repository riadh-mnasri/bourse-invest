/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
"use client";

import { useLocale } from "@/lib/i18n";
import { glossaryTerms } from "@/content/glossaire/terms";

export function GlossaryList() {
  const { t, locale } = useLocale();
  const sorted = [...glossaryTerms].sort((a, b) => a.term[locale].localeCompare(b.term[locale]));

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {t("nav.glossaire")}
      </h1>
      <dl className="mt-10 flex flex-col divide-y divide-border">
        {sorted.map((entry) => (
          <div key={entry.term.fr} className="py-4">
            <dt className="font-serif text-lg font-medium">{entry.term[locale]}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{entry.definition[locale]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
