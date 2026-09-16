/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/conseils/actifs-vs-passifs/meta";
import { meta as nextMeta } from "@/content/conseils/le-bon-sens-de-l-indiciel/meta";
import En from "@/content/conseils/actifs-vs-passifs/article.en.mdx";
import Fr from "@/content/conseils/actifs-vs-passifs/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Conseils", en: "Lessons" }}
      moduleHref="/conseils"
      en={<En />}
      fr={<Fr />}
      next={{ href: "/conseils/le-bon-sens-de-l-indiciel", title: nextMeta.title }}
    />
  );
}
