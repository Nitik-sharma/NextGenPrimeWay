import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from '../../../assets/Images/HeroBackGround.avif'


export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  /* Trigger animation after mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero — Building the Future of Infrastructure"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "110px" /* offset fixed navbar height */ }}
    >
      {/* ── BACKGROUND IMAGE ── */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
        role="img"
        aria-label="Aerial view of a modern highway through green mountains"
      />

      {/* ── DARK GRADIENT OVERLAY ── */}
      {/* Left-heavy dark → transparent right — matches client screenshot */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

          {/* ── MAIN HEADING ── */}
          {/* Exact text from client image */}
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

          {/* ── SUBTITLE ── */}
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
            Expert Solutions for Tolls, Roads &amp; Beyond
          </p>

          {/* ── CTA BUTTONS ── */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            {/* Primary — Green filled */}
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

            {/* Secondary — White outline */}
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

          {/* ── STATS ROW ── */}
          <div
            className="mt-14 flex flex-wrap items-center gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
            }}
          >
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "32+", label: "States Covered" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-[1.9rem] font-extrabold text-white leading-none"
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

      {/* ── SCROLL DOWN INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 1.1s",
        }}
        aria-hidden="true"
      >
        <span
          className="text-[11px] tracking-widest uppercase text-white/50"
          style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
        >
          Scroll
        </span>
        {/* Animated bounce arrow */}
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

      {/* ── BOTTOM WAVE / SHAPE DIVIDER ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
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
    </section>
  );
}
