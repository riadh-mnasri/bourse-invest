/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/routine-d-investisseur/biais-comportementaux/meta";
import { meta as prevMeta } from "@/content/routine-d-investisseur/dca-et-versements-programmes/meta";
import En from "@/content/routine-d-investisseur/biais-comportementaux/article.en.mdx";
import Fr from "@/content/routine-d-investisseur/biais-comportementaux/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Routine d'investisseur", en: "Investor routine" }}
      moduleHref="/routine-d-investisseur"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/routine-d-investisseur/dca-et-versements-programmes", title: prevMeta.title }}
    />
  );
}
