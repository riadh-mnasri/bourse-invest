/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Shared chrome for an article page: breadcrumb, locale-switched MDX body,
 * and previous/next navigation within the module.
 */
"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLocale } from "@/lib/i18n";
import type { ArticleMeta, LocalizedText } from "@/lib/content/types";

interface ArticleNavLink {
  href: string;
  title: LocalizedText;
}

export function ArticleShell({
  meta,
  moduleLabel,
  moduleHref,
  fr,
  en,
  prev,
  next,
}: {
  meta: ArticleMeta;
  moduleLabel: LocalizedText;
  moduleHref: string;
  fr: ReactNode;
  en: ReactNode;
  prev?: ArticleNavLink;
  next?: ArticleNavLink;
}) {
  const { t, locale } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm text-muted-foreground">
        <Link href={moduleHref} className="hover:text-primary">
          {t("article.module")}: {moduleLabel[locale]}
        </Link>
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {meta.title[locale]}
      </h1>
      <p className="mt-3 text-muted-foreground">{meta.summary[locale]}</p>

      <article className="prose prose-neutral prose-lg mt-10 max-w-none">
        {locale === "fr" ? fr : en}
      </article>

      <nav className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={prev.href} className="text-sm text-foreground/80 hover:text-primary">
            ← {t("article.prev")}: {prev.title[locale]}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="text-sm text-foreground/80 hover:text-primary sm:text-right">
            {t("article.next")}: {next.title[locale]} →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
