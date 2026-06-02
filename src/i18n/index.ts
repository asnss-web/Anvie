import ruMessages from "../../messages/ru.json";
import enMessages from "../../messages/en.json";

export type Locale = "ru" | "en";
export type Messages = typeof ruMessages;

const messages: Record<Locale, Messages> = {
  ru: ruMessages,
  en: enMessages as Messages,
};

export const locales: Locale[] = ["ru", "en"];
export const defaultLocale: Locale = "ru";

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
