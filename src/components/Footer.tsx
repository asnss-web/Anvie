"use client";
import { useT } from "@/i18n/context";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__mark">Anvi<em>é</em></div>
            <div className="footer__tag">{t.footer.tag}</div>
          </div>
          <div className="footer__col">
            <h4>{t.footer.spaceH}</h4>
            <a href="#concept">{t.footer.spaceConcept}</a>
            <a href="#method">{t.footer.spaceMethod}</a>
            <a href="#founder">{t.footer.spaceFounder}</a>
            <a href="#tariffs">{t.footer.spaceFormats}</a>
          </div>
          <div className="footer__col">
            <h4>{t.footer.joinH}</h4>
            <a href="#apply">{t.footer.joinApply}</a>
            <a href="#reviews">{t.footer.joinVoices}</a>
            <a href="#tariffs">{t.footer.joinFormats}</a>
            <a href="#apply">{t.footer.joinBook}</a>
          </div>
          <div className="footer__col">
            <h4>{t.footer.reachH}</h4>
            <a href="#">{t.footer.reachIG}</a>
            <a href="#">{t.footer.reachTG}</a>
            <a href="#">{t.footer.reachTT}</a>
            <a href="#">{t.footer.reachEmail}</a>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© {year} {t.footer.copy}</div>
          <div>{t.footer.made}</div>
        </div>
      </div>
    </footer>
  );
}
