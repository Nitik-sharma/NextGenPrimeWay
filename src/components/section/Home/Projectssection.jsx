import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  Users,
  BarChart3,
  Clock,
  ShieldCheck,
} from "lucide-react";

import ProjectsBg from "../../../assets/Images/HeroBackGround.avif";

const approaches = [
  {
    id: "01",
    icon: <ClipboardList size={28} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Comprehensive Planning & Design Evaluation",
    description:
      "We begin with in-depth analysis and strategic planning, ensuring every detail is aligned with project goals and client expectations.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
  {
    id: "02",
    icon: <Users size={28} strokeWidth={1.6} color="#22a05b" />,
    title: "Strategic Resource Allocation",
    description:
      "Our team carefully deploys the right talent, technology, and tools to optimize productivity and ensure seamless execution.",
    accent: "#22a05b",
    iconBg: "#e8f5ee",
  },
  {
    id: "03",
    icon: <BarChart3 size={28} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Continuous Monitoring & Performance Insights",
    description:
      "We maintain real-time tracking and provide regular performance reports, keeping you informed at every stage of the project.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
  {
    id: "04",
    icon: <Clock size={28} strokeWidth={1.6} color="#22a05b" />,
    title: "On-Time Delivery with Cost Optimization",
    description:
      "We are committed to delivering projects within deadlines while maintaining cost efficiency without compromising quality.",
    accent: "#22a05b",
    iconBg: "#e8f5ee",
  },
  {
    id: "05",
    icon: <ShieldCheck size={28} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Commitment to Safety & Sustainability",
    description:
      "We integrate safety standards and sustainable practices into every phase, ensuring long-term value and responsible execution.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
];

// Duplicate cards so the loop is seamless
const CARDS = [...approaches, ...approaches];

function Card({ item }) {
  const isGreen = item.accent === "#22a05b";
  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl px-6 py-8 border-t-[4px] flex-shrink-0
                 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
      style={{
        width: "260px",
        borderTopColor: item.accent,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Step watermark */}
      <span
        className="absolute top-4 right-4 text-[38px] font-black leading-none select-none font-['Poppins']"
        style={{ color: "#f0f4f8" }}
      >
        {item.id}
      </span>

      {/* Icon */}
      <div
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: item.iconBg }}
      >
        {item.icon}
      </div>

      {/* Verified badge */}
      <div className="flex items-center gap-1.5 mb-3">
        <span
          className="w-[6px] h-[6px] rounded-full flex-shrink-0"
          style={{ background: "#22a05b" }}
        />
        <span
          className="text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "#22a05b" }}
        >
          Verified Process
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-[14px] font-bold mb-3 leading-snug font-['Poppins']"
        style={{ color: isGreen ? item.accent : "#0d3a6e" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-[#4a5568] leading-[1.7]">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-6 h-[3px] rounded-full w-8 transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Card width + gap = 260 + 20 = 280px per card
  // Total width of one set = 5 * 280 = 1400px
  const CARD_W = 280; // card width (260) + gap (20)
  const SET_W = approaches.length * CARD_W; // 1400px — distance to shift before reset

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[72px] font-['Inter']"
    >
      {/* ── BACKGROUND IMAGE ── */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${ProjectsBg})` }}
        aria-hidden="true"
      />

      {/* ── DARK OVERLAY ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,42,74,0.88) 0%, rgba(13,58,40,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── GLOW ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-[#22a05b]/10 rounded-full blur-3xl top-[80%] left-[20%]" />
        <div className="absolute w-[400px] h-[400px] bg-[#1a6fc4]/10 rounded-full blur-3xl top-[20%] left-[80%]" />
      </div>

      {/* ── HEADER ── */}
      <div
        className="text-center mb-12 relative z-10 px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-2xl font-semibold tracking-[2.5px] uppercase text-[#22a05b] mb-3 font-['Poppins']">
          Our Project Approach
        </p>
        <h2 className="text-[32px] font-bold text-white leading-tight font-['Poppins'] max-md:text-[24px]">
          Structured for Precision &amp; Excellence
        </h2>
        <p className="mt-4 text-[15px] text-white/60 max-w-2xl mx-auto leading-[1.8]">
          We adopt a{" "}
          <span className="text-white/90 font-medium">
            structured, transparent, and results-driven
          </span>{" "}
          methodology to ensure every project is executed with precision and
          excellence — from initial planning to final delivery.
        </p>
      </div>

      {/* ── MARQUEE TRACK ── */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          /* Fade edges left & right */
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 w-max"
          style={{
            animation: `marquee 18s linear infinite`,
            paddingLeft: "20px",
          }}
        >
          {CARDS.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        className="mt-14 flex justify-center relative z-10 px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s",
        }}
      >
        <NavLink
          to="/contact"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0d3a6e] to-[#1a6fc4] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_24px_rgba(26,111,196,0.3)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,111,196,0.4)] font-['Poppins']"
        >
          Start Your Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${SET_W}px); }
        }
        /* Pause on hover */
        .overflow-hidden:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
