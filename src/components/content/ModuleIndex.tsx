/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Landing page for a module: intro + ordered list of its articles.
 */
"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import type { DictionaryKey } from "@/lib/i18n/dictionaries";
import type { ArticleMeta } from "@/lib/content/types";

interface ModuleArticle {
  href: string;
  meta: ArticleMeta;
}

export function ModuleIndex({
  titleKey,
  introKey,
  articles,
}: {
  titleKey: DictionaryKey;
  introKey: DictionaryKey;
  articles: ModuleArticle[];
}) {
  const { t, locale } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{t(titleKey)}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{t(introKey)}</p>

      <ol className="mt-10 flex flex-col gap-4">
        {articles.map((article, index) => (
          <li key={article.href}>
            <Link
              href={article.href}
              className="group flex gap-4 rounded-lg border border-border bg-card px-5 py-4 shadow-soft transition hover:border-primary"
            >
              <span className="font-serif text-lg text-primary">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-medium text-foreground group-hover:text-primary">
                  {article.meta.title[locale]}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {article.meta.summary[locale]}
                </span>
                {article.meta.source ? (
                  <span className="mt-2 block text-xs italic text-primary">
                    {article.meta.source[locale]}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
