/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { meta } from "@/content/routine-d-investisseur/allocation-core-satellite/meta";
import { meta as nextMeta } from "@/content/routine-d-investisseur/dca-et-versements-programmes/meta";
import { buildArticleMetadata } from "@/lib/seo";
import En from "@/content/routine-d-investisseur/allocation-core-satellite/article.en.mdx";
import Fr from "@/content/routine-d-investisseur/allocation-core-satellite/article.fr.mdx";

const PATH = "/routine-d-investisseur/allocation-core-satellite";
export const metadata = buildArticleMetadata(meta, PATH);

export default function Page() {
  return (
    <>
      <ArticleJsonLd meta={meta} path={PATH} />
      <ArticleShell
        meta={meta}
        moduleLabel={{ fr: "Routine d'investisseur", en: "Investor routine" }}
        moduleHref="/routine-d-investisseur"
        en={<En />}
        fr={<Fr />}
        next={{ href: "/routine-d-investisseur/dca-et-versements-programmes", title: nextMeta.title }}
      />
    </>
  );
}
