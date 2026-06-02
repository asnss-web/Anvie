"use client";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/context";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav__logo">
        <span className="nav__mark">Anvi<em>é</em></span>
        <span className="nav__tag">{t.nav.tag}</span>
      </a>
      <div className="nav__links">
        <a href="#concept">{t.nav.concept}</a>
        <a href="#method">{t.nav.method}</a>
        <a href="#founder">{t.nav.founder}</a>
        <a href="#tariffs">{t.nav.formats}</a>
        <a href="#reviews">{t.nav.voices}</a>
      </div>
      <div className="nav__actions">
        <LangSwitcher />
        <button className="nav__cta" onClick={() => scrollTo("apply")}>{t.nav.apply}</button>
      </div>
      <button className="nav__burger" aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
