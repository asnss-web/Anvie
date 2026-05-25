"use client";
import { useEffect, useState } from "react";

export default function Nav() {
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
        <span className="nav__tag">English space</span>
      </a>
      <div className="nav__links">
        <a href="#concept">Concept</a>
        <a href="#method">Method</a>
        <a href="#founder">Founder</a>
        <a href="#tariffs">Formats</a>
        <a href="#reviews">Voices</a>
      </div>
      <button className="nav__cta" onClick={() => scrollTo("apply")}>Apply to join</button>
      <button className="nav__burger" aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
