/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { meta } from "@/content/conseils/actifs-vs-passifs/meta";
import { meta as nextMeta } from "@/content/conseils/le-bon-sens-de-l-indiciel/meta";
import { buildArticleMetadata } from "@/lib/seo";
import En from "@/content/conseils/actifs-vs-passifs/article.en.mdx";
import Fr from "@/content/conseils/actifs-vs-passifs/article.fr.mdx";

const PATH = "/conseils/actifs-vs-passifs";
export const metadata = buildArticleMetadata(meta, PATH);

export default function Page() {
  return (
    <>
      <ArticleJsonLd meta={meta} path={PATH} />
      <ArticleShell
        meta={meta}
        moduleLabel={{ fr: "Conseils", en: "Lessons" }}
        moduleHref="/conseils"
        en={<En />}
        fr={<Fr />}
        next={{ href: "/conseils/le-bon-sens-de-l-indiciel", title: nextMeta.title }}
      />
    </>
  );
}
