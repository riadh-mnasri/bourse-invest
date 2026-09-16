/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Site footer: regulatory disclaimer and copyright.
 */
"use client";

import { useLocale } from "@/lib/i18n";

export function AppFooter() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border py-8 text-sm text-muted-foreground"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-3 max-w-2xl">{t("footer.disclaimer")}</p>
        <p>
          © {year} Riadh MNASRI. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
