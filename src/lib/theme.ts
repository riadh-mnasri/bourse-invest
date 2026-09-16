/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Light/dark theme toggle backed by a data-theme attribute on <html>, set
 * synchronously by a blocking script in the root layout to avoid a flash of
 * the wrong theme. Read via useSyncExternalStore, no next-themes dependency.
 */
"use client";

import { useCallback, useSyncExternalStore } from "react";
import { createExternalStore } from "@/lib/create-external-store";

export type Theme = "light" | "dark";

const STORAGE_KEY = "bourse-invest.theme";

const themeStore = createExternalStore<Theme>(
  () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
  () => "light"
);

function persistTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  themeStore.notify();
}

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const toggleTheme = useCallback(() => {
    persistTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, toggleTheme };
}

export const THEME_BOOTSTRAP_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem("${STORAGE_KEY}");
    var theme = stored === "dark" || stored === "light"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;
