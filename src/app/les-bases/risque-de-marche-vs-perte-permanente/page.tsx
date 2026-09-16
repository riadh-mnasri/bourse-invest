/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/les-bases/risque-de-marche-vs-perte-permanente/meta";
import { meta as prevMeta } from "@/content/les-bases/actions-obligations-etf/meta";
import En from "@/content/les-bases/risque-de-marche-vs-perte-permanente/article.en.mdx";
import Fr from "@/content/les-bases/risque-de-marche-vs-perte-permanente/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Les bases", en: "The basics" }}
      moduleHref="/les-bases"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/les-bases/actions-obligations-etf", title: prevMeta.title }}
    />
  );
}
