import { useEffect, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

// ── Replace with your actual image imports ────────────────────
import AboutImage1 from "../../../assets/Images/Tolls/17.jpeg";
import AboutImage2 from "../../../assets/Images/Roads/19.jpg";
import AboutImage3 from "../../../assets/Images/work/3.jpg";
import AboutImage4 from "../../../assets/Images/Planning/9.jpeg";
import AboutImage5 from "../../../assets/Images/Planning/4.jpeg"
import AboutImage6 from "../../../assets/Images/Roads/30.jpg"
import AboutImage7 from "../../../assets/Images/work/4.jpg"
import AboutImage8 from "../../../assets/Images/Tolls/5.jpeg"
// ─────────────────────────────────────────────────────────────

const IMAGES = [
  { src: AboutImage1, alt: "NextGen PrimeWay highway infrastructure project" },
  { src: AboutImage2, alt: "Road construction by NextGen PrimeWay" },
  { src: AboutImage3, alt: "Smart toll systems by NextGen PrimeWay" },
  { src: AboutImage4, alt: "Bridge and highway development" },
  { src: AboutImage5, alt: "NextGen PrimeWay highway infrastructure project" },
  { src: AboutImage6, alt: "Road construction by NextGen PrimeWay" },
  { src: AboutImage7, alt: "Smart toll systems by NextGen PrimeWay" },
  { src: AboutImage8, alt: "Bridge and highway development" },
];

const INTERVAL_MS = 3500;

const features = [
  "Toll Management",
  "Road & Highway Projects",
  "Smart Infrastructure",
  "Bridge Construction",
  "Traffic Systems",
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [fading, setFading] = useState(false);

  /* ── Scroll-in observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Slide transition ── */
  const goTo = useCallback(
    (nextIdx) => {
      if (nextIdx === current || fading) return;
      setPrevIdx(current);
      setFading(true);
      setCurrent(nextIdx);
      setTimeout(() => {
        setPrevIdx(null);
        setFading(false);
      }, 800);
    },
    [current, fading],
  );

  /* ── Auto-advance ── */
  useEffect(() => {
    const id = setInterval(
      () => goTo((current + 1) % IMAGES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[88px] px-8 font-['Inter'] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-[72px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* ── LEFT — image slideshow ── */}
        <div
          className={`relative transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {/* green accent bar */}
          <div className="absolute left-[-16px] top-5 bottom-5 w-[5px] bg-gradient-to-b from-[#22a05b] to-[#1a6fc4] rounded z-[1]" />

          {/* image container */}
          <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(13,58,110,0.18)]">
            {/* outgoing image */}
            {prevIdx !== null && (
              <img
                key={`prev-${prevIdx}`}
                src={IMAGES[prevIdx].src}
                alt={IMAGES[prevIdx].alt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.8s ease",
                  zIndex: 1,
                }}
              />
            )}

            {/* current image */}
            <img
              key={`curr-${current}`}
              src={IMAGES[current].src}
              alt={IMAGES[current].alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                animation: "imgFadeIn 0.8s ease forwards",
                zIndex: 2,
              }}
            />
          </div>

          {/* dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: i === current ? "22px" : "7px",
                  height: "7px",
                  background:
                    i === current ? "#22a05b" : "rgba(255,255,255,0.6)",
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* years badge */}
          <div className="absolute bottom-[-20px] right-[-20px] bg-[#0d3a6e] text-white rounded-[16px] px-6 py-4 text-center shadow-[0_12px_32px_rgba(13,58,110,0.28)] z-[5]">
            <span className="block text-[28px] font-extrabold text-[#22a05b] leading-none font-['Poppins']">
              5+
            </span>
            <span className="block text-[11px] text-[#a0b8d0] mt-1 whitespace-nowrap">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* ── RIGHT — static content ── */}
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* eyebrow */}
          <p className="flex items-center gap-2 text-2xl font-semibold tracking-[2.5px] uppercase text-[#22a05b] mb-4 font-['Poppins']">
            <span className="w-7 h-[2px] bg-[#22a05b] rounded" />
            About Us
          </p>

          {/* heading */}
          <h2 className="text-[36px] font-extrabold text-[#0d3a6e] leading-tight mb-2 font-['Poppins'] max-[900px]:text-[28px]">
            NextGen <span className="text-[#22a05b]">PrimeWay</span>
            <br />
            Solutions LLP
          </h2>

          {/* subheading */}
          <p className="text-[16px] font-semibold text-[#1a6fc4] italic mb-5 font-['Poppins']">
            Pioneers in Infrastructure Development
          </p>

          {/* description */}
          <p className="text-[15px] text-[#4a5568] leading-[1.8] mb-8">
            Welcome to NextGen PrimeWay Solutions LLP, where innovation meets
            excellence in infrastructure development. We specialize in toll
            management, road & highway projects, and smart infrastructure
            solutions, delivering projects that drive growth & connectivity
            across the nation.
          </p>

          {/* features */}
          <div className="flex flex-wrap gap-2 mb-9">
            {features.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 bg-[#f0f7ff] border border-[#b5d4f4] text-[#0d3a6e] text-[13px] font-medium px-3.5 py-1.5 rounded-full transition hover:bg-[#e1f5ea] hover:border-[#22a05b] hover:text-[#0d5c32]"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-[#22a05b]" />
                {f}
              </span>
            ))}
          </div>

          {/* button */}
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0d3a6e] to-[#1a6fc4] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_24px_rgba(26,111,196,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,111,196,0.4)] font-['Poppins']"
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </div>
      </div>

      <style>{`
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
