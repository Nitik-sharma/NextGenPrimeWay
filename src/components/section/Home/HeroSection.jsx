import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import bg1 from "../../../assets/Images/Tolls/6.jpeg"
import bg2 from "../../../assets/Images/Roads/1.jpg"
import bg3 from "../../../assets/Images/work/1.jpg"
import bg4 from "../../../assets/Images/Planning/2.jpeg"
import bg5 from "../../../assets/Images/Tolls/2.jpeg"
import bg6 from "../../../assets/Images/work/2.jpg"
import bg7 from "../../../assets/Images/Roads/2.jpg"
import bg8 from "../../../assets/Images/Planning/2.jpeg"
// ─── Only images rotate — text stays fixed ───────────────────
const SLIDES = [
  {
    image: bg1,
    alt: "Aerial view of a modern highway through green mountains",
  },
  { image: bg2, alt: "Wide expressway at sunset with golden light" },
  { image: bg3, alt: "Modern toll plaza with electronic lanes" },
  { image: bg4, alt: "Aerial view of a complex highway interchange" },
  {
    image: bg5,
    alt: "Aerial view of a modern highway through green mountains",
  },
  { image: bg6, alt: "Wide expressway at sunset with golden light" },
  { image: bg7, alt: "Modern toll plaza with electronic lanes" },
  { image: bg8, alt: "Aerial view of a complex highway interchange" },
];

const INTERVAL_MS = 3000;

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback(
    (nextIdx) => {
      if (nextIdx === current || fading) return;
      setPrevIdx(current);
      setFading(true);
      setCurrent(nextIdx);
      setTimeout(() => {
        setPrevIdx(null);
        setFading(false);
      }, 900);
    },
    [current, fading],
  );

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [current, goTo]);

  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => goTo((current + 1) % SLIDES.length);

  const slide = SLIDES[current];
  const prevSlide = prevIdx !== null ? SLIDES[prevIdx] : null;

  return (
    <section
      id="hero"
      aria-label="Hero — Building the Future of Infrastructure"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "110px" }}
    >
      {/* ── OUTGOING SLIDE (fades out) ── */}
      {prevSlide && (
        <div
          key={`prev-${prevIdx}`}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${prevSlide.image})`,
            opacity: fading ? 0 : 1,
            transition: "opacity 0.9s ease",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}

      {/* ── INCOMING / CURRENT SLIDE (fades in) ── */}
      <div
        key={`curr-${current}`}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${slide.image})`,
          animation: "slideIn 0.9s ease forwards",
          zIndex: 1,
        }}
        role="img"
        aria-label={slide.alt}
      />

      {/* ── DARK GRADIENT OVERLAY ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* ── CONTENT — static, never re-renders ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <span
              className="w-8 h-[2px] rounded-full"
              style={{ background: "#6BAF45" }}
              aria-hidden="true"
            />
            <span
              className="text-xl font-semibold tracking-widest uppercase text-white/80"
              style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
            >
              NextGen PrimeWay Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-white leading-[1.12] font-extrabold"
            style={{
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              textShadow: "0 2px 16px rgba(0,0,0,0.35)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Building the Future
            <br />
            of Infrastructure
          </h1>

          {/* Subtitle */}
          <p
            className="mt-5 text-white/85 font-medium"
            style={{
              fontFamily: "'Inter', Arial, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            }}
          >
            Welcome to NextGen PrimeWay Solutions LLP, where innovation meets
            excellence in infrastructure development. We specialize in toll
            management, road &amp; highway projects, and smart infrastructure
            solutions delivering systems that drive efficiency, connectivity,
            and sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                         text-white font-semibold text-[15px]
                         transition-all duration-300 ease-in-out
                         hover:gap-3 hover:shadow-[0_6px_24px_rgba(107,175,69,0.45)]
                         focus:outline-none focus:ring-2 focus:ring-[#6BAF45] focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: "#6BAF45",
                fontFamily: "'Poppins', Arial, sans-serif",
              }}
              aria-label="Explore our services"
            >
              Our Services
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                         text-white font-semibold text-[15px] border-2 border-white/70
                         hover:bg-white hover:text-[#1F5A7A] hover:border-white
                         transition-all duration-300 ease-in-out
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
              aria-label="Contact us"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-14 flex flex-wrap items-center gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
            }}
          >
            {[
              { value: "20+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "12+", label: "States Covered" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-[1.9rem] font-extrabold leading-none"
                  style={{
                    fontFamily: "'Poppins', Arial, sans-serif",
                    color: "#6BAF45",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[12px] font-medium text-white/70 mt-1 tracking-wide"
                  style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PREV / NEXT ARROWS ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center
                   w-10 h-10 rounded-full border border-white/30 bg-black/25
                   text-white/70 hover:bg-black/50 hover:text-white
                   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        style={{ zIndex: 4 }}
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center
                   w-10 h-10 rounded-full border border-white/30 bg-black/25
                   text-white/70 hover:bg-black/50 hover:text-white
                   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        style={{ zIndex: 4 }}
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── DOT INDICATORS ── */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ zIndex: 4 }}
        aria-label="Slide indicators"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full focus:outline-none"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "#6BAF45" : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>

      {/* ── PROGRESS BAR — key forces restart on each slide ── */}
      <div
        key={`progress-${current}`}
        className="absolute bottom-0 left-0 h-[3px]"
        style={{
          zIndex: 4,
          background: "#6BAF45",
          width: "100%",
          transformOrigin: "left",
          animation: `progress ${INTERVAL_MS}ms linear forwards`,
        }}
        aria-hidden="true"
      />

      {/* ── SCROLL DOWN INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 1.1s",
          zIndex: 4,
        }}
        aria-hidden="true"
      >
        <span
          className="text-[11px] tracking-widest uppercase text-white/50"
          style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
        >
          Scroll
        </span>
        <div className="flex flex-col items-center gap-[3px] animate-bounce">
          <span className="w-[1.5px] h-4 rounded-full bg-white/40" />
          <svg
            className="w-4 h-4 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* ── BOTTOM WAVE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path
            d="M0 64 L0 32 Q360 0 720 28 Q1080 56 1440 20 L1440 64 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
