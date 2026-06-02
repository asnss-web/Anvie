"use client";
import { useRef } from "react";
import { useT } from "@/i18n/context";

export default function Reviews() {
  const { t } = useT();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });

  return (
    <section className="section dark" id="reviews">
      <div className="container">
        <div className="reviews__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>{t.reviews.eyebrow}</span>
            <h2 className="reviews__title display" style={{ marginTop: 20 }}>
              {t.reviews.titleLine1} <em>{t.reviews.titleEm}</em>
            </h2>
          </div>
          <div className="reviews__nav">
            <button onClick={() => scroll(-1)} aria-label="prev">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M9 2 4 7l5 5" />
              </svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="next">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="reviews__track" ref={trackRef}>
          {t.reviews.list.map((r, i) => (
            <div className="review" key={i}>
              <div className="review__mark">&ldquo;</div>
              <div className="review__text">{r.text}</div>
              <div className="review__by">
                <div className="review__ava">{r.mark[0]}</div>
                <div>
                  <div className="review__name">{r.mark}</div>
                  <div className="review__role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
