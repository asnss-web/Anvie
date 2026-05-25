"use client";
import { useRef } from "react";

const reviews = [
  { mark: "Lena", role: "Berlin · Designer", text: "I'd done courses for years. After three weeks at Anvié I was speaking — not perfectly, but actually speaking, in real conversations. The buddy system changed everything." },
  { mark: "Maya", role: "Lisbon · IT",       text: "It feels like a small club. The chat runs in English from morning to night and somehow that makes the language not scary anymore." },
  { mark: "Sasha", role: "Toronto · Marketing", text: "I expected lessons. I got an environment. After two months I caught myself thinking in English on the metro and laughing about it." },
  { mark: "Karina", role: "Dubai · Founder", text: "The Elite format is wildly worth it. Daily voice feedback rewires how you actually sound — not how you look on paper." },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });

  return (
    <section className="section dark" id="reviews">
      <div className="container">
        <div className="reviews__head">
          <div>
            <span className="eyebrow" style={{ color: "var(--champagne)" }}>08 — The Voices</span>
            <h2 className="reviews__title display" style={{ marginTop: 20 }}>
              Early stories from <em>the space.</em>
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
          {reviews.map((r, i) => (
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
