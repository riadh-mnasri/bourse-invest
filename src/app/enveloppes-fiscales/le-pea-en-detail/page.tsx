/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/enveloppes-fiscales/le-pea-en-detail/meta";
import { meta as prevMeta } from "@/content/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie/meta";
import { meta as nextMeta } from "@/content/enveloppes-fiscales/le-cto-en-complement/meta";
import En from "@/content/enveloppes-fiscales/le-pea-en-detail/article.en.mdx";
import Fr from "@/content/enveloppes-fiscales/le-pea-en-detail/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Enveloppes fiscales", en: "Tax wrappers" }}
      moduleHref="/enveloppes-fiscales"
      en={<En />}
      fr={<Fr />}
      prev={{ href: "/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie", title: prevMeta.title }}
      next={{ href: "/enveloppes-fiscales/le-cto-en-complement", title: nextMeta.title }}
    />
  );
}
