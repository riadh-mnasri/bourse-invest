/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { meta } from "@/content/les-bases/actions-obligations-etf/meta";
import { meta as prevMeta } from "@/content/les-bases/qu-est-ce-qu-un-marche-financier/meta";
import { meta as nextMeta } from "@/content/les-bases/risque-de-marche-vs-perte-permanente/meta";
import { buildArticleMetadata } from "@/lib/seo";
import En from "@/content/les-bases/actions-obligations-etf/article.en.mdx";
import Fr from "@/content/les-bases/actions-obligations-etf/article.fr.mdx";

const PATH = "/les-bases/actions-obligations-etf";
export const metadata = buildArticleMetadata(meta, PATH);

export default function Page() {
  return (
    <>
      <ArticleJsonLd meta={meta} path={PATH} />
      <ArticleShell
        meta={meta}
        moduleLabel={{ fr: "Les bases", en: "The basics" }}
        moduleHref="/les-bases"
        en={<En />}
        fr={<Fr />}
        prev={{ href: "/les-bases/qu-est-ce-qu-un-marche-financier", title: prevMeta.title }}
        next={{ href: "/les-bases/risque-de-marche-vs-perte-permanente", title: nextMeta.title }}
      />
    </>
  );
}
