"use client";
import Link from "next/link";
import { useT } from "@/i18n/context";

export default function LangSwitcher() {
  const { locale } = useT();
  return (
    <div className="lang-switcher">
      <Link href="/ru" className={`lang-switcher__btn${locale === "ru" ? " lang-switcher__btn--active" : ""}`}>
        RU
      </Link>
      <span className="lang-switcher__sep">·</span>
      <Link href="/en" className={`lang-switcher__btn${locale === "en" ? " lang-switcher__btn--active" : ""}`}>
        EN
      </Link>
    </div>
  );
}
