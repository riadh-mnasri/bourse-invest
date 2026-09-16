/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Site-wide structured data: WebSite + author Person, linking back to the
 * author's portfolio and LinkedIn for entity resolution by search engines
 * and LLMs.
 */
import { AUTHOR_NAME, AUTHOR_URL, LINKEDIN_URL, SITE_URL } from "@/lib/seo";

export function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "BourseInvest",
        url: SITE_URL,
        description:
          "Guide pedagogique bilingue sur les bases de la bourse, la fiscalite de l'investissement en France et la construction d'une routine d'investisseur saine.",
        inLanguage: ["fr", "en"],
        author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
      },
      {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
        sameAs: [LINKEDIN_URL],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
