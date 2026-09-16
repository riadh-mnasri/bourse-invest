/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Metadata helpers shared by module and article pages, so each route gets a
 * distinct title/description/canonical instead of falling back to the
 * root layout's generic metadata.
 */
import type { Metadata } from "next";
import type { ArticleMeta } from "@/lib/content/types";

export const SITE_URL = "https://bourse-invest.vercel.app";
export const AUTHOR_NAME = "Riadh MNASRI";
export const AUTHOR_URL = "https://riadhmnasri.fr";
export const LINKEDIN_URL = "https://www.linkedin.com/in/riadhmnasri";

export function buildArticleMetadata(meta: ArticleMeta, path: string): Metadata {
  const title = meta.title.fr;
  const description = meta.summary.fr;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "fr_FR",
      alternateLocale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildModuleMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "fr_FR",
      alternateLocale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
