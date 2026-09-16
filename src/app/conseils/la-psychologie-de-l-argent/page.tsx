/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/conseils/la-psychologie-de-l-argent/meta";
import { meta as prevMeta } from "@/content/conseils/le-bon-sens-de-l-indiciel/meta";
import En from "@/content/conseils/la-psychologie-de-l-argent/article.en.mdx";
import Fr from "@/content/conseils/la-psychologie-de-l-argent/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Conseils", en: "Lessons" }}
      moduleHref="/conseils"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/conseils/le-bon-sens-de-l-indiciel", title: prevMeta.title }}
    />
  );
}
