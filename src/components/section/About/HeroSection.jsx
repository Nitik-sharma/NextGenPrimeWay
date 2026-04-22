import React from "react";
import { Link } from "react-router-dom";
import BackgroundHero from "../../../assets/Images/pic1.jpeg";

const TRUST_BADGES = [
  { label: "Legally Registered LLP" },
  { label: "Compliance Focused" },
  { label: "Industry Driven Approach" },
];

const STATS = [
  { num: "100+", label: "Projects Supported" },
  { num: "5+", label: "Years of Experience" },
  { num: "10+", label: "Locations Served" },
  { num: "Skilled", label: "Expert Workforce" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundHero})`,
          backgroundPosition: "right center",
        }}
      />

      {/* Directional Overlay (LEFT DARK → RIGHT LIGHT) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 max-w-2xl lg:max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs uppercase tracking-widest text-green-300 font-semibold">
                About NextGen PrimeWay Solutions LLP
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold text-white leading-[1.1] mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_5px_25px_rgba(0,0,0,0.8)]">
              Driven by Integrity,{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Built for Infrastructure Excellence
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 leading-relaxed mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
              We are a legally compliant and professionally managed organization
              delivering advanced toll management and road & highway
              infrastructure solutions with precision, reliability, and
              accountability.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12">
              <Link
                to="/services"
                className="px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm md:text-base"
                style={{
                  background: "#6BAF45",
                }}
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm md:text-base border"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Contact Our Team
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="px-3 py-1.5 rounded-full text-xs text-white/80 border"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  {b.label}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 pt-6 border-t border-white/20">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-white text-xl md:text-2xl font-bold">
                    {s.num}
                  </div>
                  <div className="text-white/60 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
