/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/routine-d-investisseur/dca-et-versements-programmes/meta";
import { meta as prevMeta } from "@/content/routine-d-investisseur/allocation-core-satellite/meta";
import { meta as nextMeta } from "@/content/routine-d-investisseur/biais-comportementaux/meta";
import En from "@/content/routine-d-investisseur/dca-et-versements-programmes/article.en.mdx";
import Fr from "@/content/routine-d-investisseur/dca-et-versements-programmes/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Routine d'investisseur", en: "Investor routine" }}
      moduleHref="/routine-d-investisseur"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/routine-d-investisseur/allocation-core-satellite", title: prevMeta.title }}
      next={{ href: "/routine-d-investisseur/biais-comportementaux", title: nextMeta.title }}
    />
  );
}
