"use client";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/context";
import LangSwitcher from "./LangSwitcher";

export default function Nav() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="nav__logo" onClick={() => setMenuOpen(false)}>
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
        <button
          className={`nav__burger ${menuOpen ? "open" : ""}`}
          aria-label="menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
        <div className="nav__mobile-links" onClick={e => e.stopPropagation()}>
          <a onClick={() => scrollTo("concept")}>{t.nav.concept}</a>
          <a onClick={() => scrollTo("method")}>{t.nav.method}</a>
          <a onClick={() => scrollTo("founder")}>{t.nav.founder}</a>
          <a onClick={() => scrollTo("tariffs")}>{t.nav.formats}</a>
          <a onClick={() => scrollTo("reviews")}>{t.nav.voices}</a>
          <button className="nav__mobile-cta" onClick={() => scrollTo("apply")}>{t.nav.apply}</button>
          <div className="nav__mobile-lang"><LangSwitcher /></div>
        </div>
      </div>
    </>
  );
}
