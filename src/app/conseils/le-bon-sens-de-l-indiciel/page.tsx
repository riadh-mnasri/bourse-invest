/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/conseils/le-bon-sens-de-l-indiciel/meta";
import { meta as prevMeta } from "@/content/conseils/actifs-vs-passifs/meta";
import { meta as nextMeta } from "@/content/conseils/la-psychologie-de-l-argent/meta";
import En from "@/content/conseils/le-bon-sens-de-l-indiciel/article.en.mdx";
import Fr from "@/content/conseils/le-bon-sens-de-l-indiciel/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Conseils", en: "Lessons" }}
      moduleHref="/conseils"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/conseils/actifs-vs-passifs", title: prevMeta.title }}
      next={{ href: "/conseils/la-psychologie-de-l-argent", title: nextMeta.title }}
    />
  );
}
