/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Article structured data (schema.org), rendered server-side so search
 * engines and LLM crawlers get it without executing client JS.
 */
import type { ArticleMeta } from "@/lib/content/types";
import { AUTHOR_NAME, AUTHOR_URL, SITE_URL } from "@/lib/seo";

export function ArticleJsonLd({ meta, path }: { meta: ArticleMeta; path: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title.fr,
    description: meta.summary.fr,
    url: `${SITE_URL}${path}`,
    inLanguage: "fr",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
    },
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
