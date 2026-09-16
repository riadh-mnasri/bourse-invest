/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { ModuleIndex } from "@/components/content/ModuleIndex";
import { meta as actifsVsPassifs } from "@/content/conseils/actifs-vs-passifs/meta";
import { meta as bonSensIndiciel } from "@/content/conseils/le-bon-sens-de-l-indiciel/meta";
import { meta as psychologieArgent } from "@/content/conseils/la-psychologie-de-l-argent/meta";
import { translate } from "@/lib/i18n/dictionaries";
import { buildModuleMetadata } from "@/lib/seo";

export const metadata = buildModuleMetadata(
  translate("fr", "module.conseils.title"),
  translate("fr", "module.conseils.intro"),
  "/conseils"
);

export default function Page() {
  return (
    <ModuleIndex
      titleKey="module.conseils.title"
      introKey="module.conseils.intro"
      articles={[
        { href: "/conseils/actifs-vs-passifs", meta: actifsVsPassifs },
        { href: "/conseils/le-bon-sens-de-l-indiciel", meta: bonSensIndiciel },
        { href: "/conseils/la-psychologie-de-l-argent", meta: psychologieArgent },
      ]}
    />
  );
}
