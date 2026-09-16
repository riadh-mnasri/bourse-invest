/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Tiny external store factory for useSyncExternalStore, used to read
 * client-only persisted preferences (locale, theme) without the
 * setState-in-effect hydration pattern.
 */

export function createExternalStore<T>(getSnapshot: () => T, getServerSnapshot: () => T) {
  const listeners = new Set<() => void>();

  return {
    getSnapshot,
    getServerSnapshot,
    subscribe(callback: () => void) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
    notify() {
      for (const listener of listeners) listener();
    },
  };
}
