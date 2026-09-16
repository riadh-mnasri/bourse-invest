/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ModuleIndex } from "@/components/content/ModuleIndex";
import { meta as allocation } from "@/content/routine-d-investisseur/allocation-core-satellite/meta";
import { meta as dca } from "@/content/routine-d-investisseur/dca-et-versements-programmes/meta";
import { meta as biais } from "@/content/routine-d-investisseur/biais-comportementaux/meta";

export default function Page() {
  return (
    <ModuleIndex
      titleKey="module.routine.title"
      introKey="module.routine.intro"
      articles={[
        { href: "/routine-d-investisseur/allocation-core-satellite", meta: allocation },
        { href: "/routine-d-investisseur/dca-et-versements-programmes", meta: dca },
        { href: "/routine-d-investisseur/biais-comportementaux", meta: biais },
      ]}
    />
  );
}
