/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { meta } from "@/content/enveloppes-fiscales/le-cto-en-complement/meta";
import { meta as prevMeta } from "@/content/enveloppes-fiscales/le-pea-en-detail/meta";
import { buildArticleMetadata } from "@/lib/seo";
import En from "@/content/enveloppes-fiscales/le-cto-en-complement/article.en.mdx";
import Fr from "@/content/enveloppes-fiscales/le-cto-en-complement/article.fr.mdx";

const PATH = "/enveloppes-fiscales/le-cto-en-complement";
export const metadata = buildArticleMetadata(meta, PATH);

export default function Page() {
  return (
    <>
      <ArticleJsonLd meta={meta} path={PATH} />
      <ArticleShell
        meta={meta}
        moduleLabel={{ fr: "Enveloppes fiscales", en: "Tax wrappers" }}
        moduleHref="/enveloppes-fiscales"
        en={<En />}
        fr={<Fr />}
        prev={{ href: "/enveloppes-fiscales/le-pea-en-detail", title: prevMeta.title }}
      />
    </>
  );
}
