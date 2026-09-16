/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ArticleShell } from "@/components/content/ArticleShell";
import { meta } from "@/content/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie/meta";
import { meta as nextMeta } from "@/content/enveloppes-fiscales/le-pea-en-detail/meta";
import En from "@/content/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie/article.en.mdx";
import Fr from "@/content/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie/article.fr.mdx";

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      moduleLabel={{ fr: "Enveloppes fiscales", en: "Tax wrappers" }}
      moduleHref="/enveloppes-fiscales"
      en={<En />}
      fr={<Fr />}
      next={{ href: "/enveloppes-fiscales/le-pea-en-detail", title: nextMeta.title }}
    />
  );
}
