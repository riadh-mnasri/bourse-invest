/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Homepage: hero and the four-module path.
 */
"use client";

import Link from "next/link";
import { BookOpen, Compass, LineChart, Wallet, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import type { DictionaryKey } from "@/lib/i18n/dictionaries";

const MODULES: {
  href: string;
  titleKey: DictionaryKey;
  introKey: DictionaryKey;
  icon: LucideIcon;
}[] = [
  {
    href: "/les-bases",
    titleKey: "module.marches.title",
    introKey: "module.marches.intro",
    icon: LineChart,
  },
  {
    href: "/enveloppes-fiscales",
    titleKey: "module.enveloppes.title",
    introKey: "module.enveloppes.intro",
    icon: Wallet,
  },
  {
    href: "/routine-d-investisseur",
    titleKey: "module.routine.title",
    introKey: "module.routine.intro",
    icon: Compass,
  },
  {
    href: "/conseils",
    titleKey: "module.conseils.title",
    introKey: "module.conseils.intro",
    icon: BookOpen,
  },
];

export default function Home() {
  const { t } = useLocale();

  return (
    <div>
      <section className="bg-grove border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:text-left">
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:mx-0">
            {t("home.hero.subtitle")}
          </p>
          <Link
            href="/les-bases"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            {t("home.hero.cta")} →
          </Link>
          <p className="mt-6 text-xs text-muted-foreground">{t("home.disclaimer")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="font-serif text-xl font-semibold tracking-tight">{t("home.modules.title")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.href}
                href={module.href}
                className="group rounded-lg border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-serif text-lg font-medium group-hover:text-primary">
                  {t(module.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(module.introKey)}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
