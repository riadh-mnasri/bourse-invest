/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Locale context: client-side FR/EN toggle persisted in localStorage.
 * Backed by useSyncExternalStore so the persisted value is read safely
 * without a setState-in-effect hydration workaround.
 */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createExternalStore } from "@/lib/create-external-store";
import { type DictionaryKey, type Locale, translate } from "./dictionaries";

const STORAGE_KEY = "bourse-invest.locale";
const DEFAULT_LOCALE: Locale = "fr";

const localeStore = createExternalStore<Locale>(
  () => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "fr" || stored === "en" ? stored : DEFAULT_LOCALE;
  },
  () => DEFAULT_LOCALE
);

function persistLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  localeStore.notify();
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: DictionaryKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot
  );

  const setLocale = useCallback((next: Locale) => persistLocale(next), []);
  const toggleLocale = useCallback(() => {
    persistLocale(locale === "fr" ? "en" : "fr");
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key: DictionaryKey) => translate(locale, key),
    }),
    [locale, setLocale, toggleLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
