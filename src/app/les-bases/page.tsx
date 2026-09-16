/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ModuleIndex } from "@/components/content/ModuleIndex";
import { meta as quEstCeQuUnMarche } from "@/content/les-bases/qu-est-ce-qu-un-marche-financier/meta";
import { meta as actionsObligationsEtf } from "@/content/les-bases/actions-obligations-etf/meta";
import { meta as risqueDeMarche } from "@/content/les-bases/risque-de-marche-vs-perte-permanente/meta";

export default function Page() {
  return (
    <ModuleIndex
      titleKey="module.marches.title"
      introKey="module.marches.intro"
      articles={[
        { href: "/les-bases/qu-est-ce-qu-un-marche-financier", meta: quEstCeQuUnMarche },
        { href: "/les-bases/actions-obligations-etf", meta: actionsObligationsEtf },
        {
          href: "/les-bases/risque-de-marche-vs-perte-permanente",
          meta: risqueDeMarche,
        },
      ]}
    />
  );
}
