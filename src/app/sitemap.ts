/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  "/",
  "/glossaire",
  "/les-bases",
  "/les-bases/qu-est-ce-qu-un-marche-financier",
  "/les-bases/actions-obligations-etf",
  "/les-bases/risque-de-marche-vs-perte-permanente",
  "/enveloppes-fiscales",
  "/enveloppes-fiscales/vue-d-ensemble-pea-cto-assurance-vie",
  "/enveloppes-fiscales/le-pea-en-detail",
  "/enveloppes-fiscales/le-cto-en-complement",
  "/routine-d-investisseur",
  "/routine-d-investisseur/allocation-core-satellite",
  "/routine-d-investisseur/dca-et-versements-programmes",
  "/routine-d-investisseur/biais-comportementaux",
  "/conseils",
  "/conseils/actifs-vs-passifs",
  "/conseils/le-bon-sens-de-l-indiciel",
  "/conseils/la-psychologie-de-l-argent",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
