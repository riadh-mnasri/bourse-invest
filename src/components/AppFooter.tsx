/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Site footer: regulatory disclaimer and copyright.
 */
"use client";

import { useLocale } from "@/lib/i18n";
import { AUTHOR_NAME, AUTHOR_URL, LINKEDIN_URL } from "@/lib/seo";

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
          © {year} {AUTHOR_NAME}. {t("footer.rights")}
        </p>
        <p className="mt-1">
          {t("footer.by")}{" "}
          <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {AUTHOR_NAME}
          </a>
          {" · "}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {t("footer.linkedin")}
          </a>
        </p>
      </div>
    </footer>
  );
}
