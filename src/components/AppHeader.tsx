/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Sticky site header: brand, module navigation, locale and theme toggles.
 */
"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const NAV_ITEMS = [
  { href: "/les-bases", key: "nav.marches" as const },
  { href: "/enveloppes-fiscales", key: "nav.enveloppes" as const },
  { href: "/routine-d-investisseur", key: "nav.routine" as const },
  { href: "/conseils", key: "nav.conseils" as const },
  { href: "/glossaire", key: "nav.glossaire" as const },
];

export function AppHeader() {
  const { t, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-lg font-semibold tracking-tight">{t("site.title")}</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">{t("site.tagline")}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-primary">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("theme.toggle")}
            className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent"
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t("locale.toggle")}
            className="rounded-md border border-border px-2 py-1 text-xs font-medium hover:bg-accent"
          >
            {t("locale.toggle")}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            className="rounded-md border border-border px-2 py-1 text-xs hover:bg-accent md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 text-sm md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2 text-foreground/80 hover:bg-accent hover:text-primary"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
