/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/les-bases/qu-est-ce-qu-un-marche-financier/meta";
import { meta as nextMeta } from "@/content/les-bases/actions-obligations-etf/meta";
import En from "@/content/les-bases/qu-est-ce-qu-un-marche-financier/article.en.mdx";
import Fr from "@/content/les-bases/qu-est-ce-qu-un-marche-financier/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Les bases", en: "The basics" }}
      moduleHref="/les-bases"
      en={<En />}
      fr={<Fr />}
      next={{ href: "/les-bases/actions-obligations-etf", title: nextMeta.title }}
    />
  );
}
