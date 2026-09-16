/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import { GlossaryList } from "@/components/content/GlossaryList";
import { buildModuleMetadata } from "@/lib/seo";

export const metadata = buildModuleMetadata(
  "Glossaire",
  "Definitions des termes cles de la bourse et de l'investissement : PEA, ETF, replication synthetique, risque de contrepartie, DCA, et plus.",
  "/glossaire"
);

export default function Page() {
  return <GlossaryList />;
}
