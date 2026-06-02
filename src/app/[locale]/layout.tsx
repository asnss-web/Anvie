import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/i18n/context";
import { getMessages, locales, type Locale } from "@/i18n";
import LangAttribute from "@/components/LangAttribute";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = getMessages(locale as Locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const t = getMessages(locale as Locale);

  return (
    <I18nProvider value={{ t, locale: locale as Locale }}>
      <LangAttribute locale={locale} />
      {children}
    </I18nProvider>
  );
}
