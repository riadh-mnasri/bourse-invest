/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Shared types for the bilingual article content model.
 */
import type { Locale } from "@/lib/i18n/dictionaries";

export type LocalizedText = Record<Locale, string>;

export interface ArticleMeta {
  title: LocalizedText;
  summary: LocalizedText;
  source?: LocalizedText;
}
