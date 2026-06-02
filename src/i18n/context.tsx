"use client";
import { createContext, useContext, type ReactNode } from "react";
import type { Locale, Messages } from "./index";

interface I18nContextType {
  t: Messages;
  locale: Locale;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  value,
  children,
}: {
  value: I18nContextType;
  children: ReactNode;
}) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside I18nProvider");
  return ctx;
}
