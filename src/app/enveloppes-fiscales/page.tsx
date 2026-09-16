/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ModuleIndex } from "@/components/content/ModuleIndex";
import { meta as vueDEnsemble } from "@/content/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie/meta";
import { meta as peaEnDetail } from "@/content/enveloppes-fiscales/le-pea-en-detail/meta";
import { meta as ctoEnComplement } from "@/content/enveloppes-fiscales/le-cto-en-complement/meta";

export default function Page() {
  return (
    <ModuleIndex
      titleKey="module.enveloppes.title"
      introKey="module.enveloppes.intro"
      articles={[
        {
          href: "/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie",
          meta: vueDEnsemble,
        },
        { href: "/enveloppes-fiscales/le-pea-en-detail", meta: peaEnDetail },
        { href: "/enveloppes-fiscales/le-cto-en-complement", meta: ctoEnComplement },
      ]}
    />
  );
}
