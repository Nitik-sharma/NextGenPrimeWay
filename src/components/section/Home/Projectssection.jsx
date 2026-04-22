import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Users,
  BarChart3,
  Clock,
  ShieldCheck,
} from "lucide-react";

const approaches = [
  {
    id: "01",
    icon: <ClipboardList size={30} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Comprehensive Planning & Design Evaluation",
    description:
      "We begin with in-depth analysis and strategic planning, ensuring every detail is aligned with project goals and client expectations.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
  {
    id: "02",
    icon: <Users size={30} strokeWidth={1.6} color="#22a05b" />,
    title: "Strategic Resource Allocation",
    description:
      "Our team carefully deploys the right talent, technology, and tools to optimize productivity and ensure seamless execution.",
    accent: "#22a05b",
    iconBg: "#e8f5ee",
  },
  {
    id: "03",
    icon: <BarChart3 size={30} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Continuous Monitoring & Performance Insights",
    description:
      "We maintain real-time tracking and provide regular performance reports, keeping you informed at every stage of the project.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
  {
    id: "04",
    icon: <Clock size={30} strokeWidth={1.6} color="#22a05b" />,
    title: "On-Time Delivery with Cost Optimization",
    description:
      "We are committed to delivering projects within deadlines while maintaining cost efficiency without compromising quality.",
    accent: "#22a05b",
    iconBg: "#e8f5ee",
  },
  {
    id: "05",
    icon: <ShieldCheck size={30} strokeWidth={1.6} color="#1a6fc4" />,
    title: "Commitment to Safety & Sustainability",
    description:
      "We integrate safety standards and sustainable practices into every phase, ensuring long-term value and responsible execution.",
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
  },
];

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
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[72px] px-8 bg-gradient-to-br from-[#0a2a4a] to-[#0d3a28] font-['Inter']"
    >
      {/* ── BACKGROUND GLOW ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-[#22a05b]/10 rounded-full blur-3xl top-[80%] left-[20%]" />
        <div className="absolute w-[400px] h-[400px] bg-[#1a6fc4]/10 rounded-full blur-3xl top-[20%] left-[80%]" />
      </div>

      {/* ── HEADER ── */}
      <div
        className={`text-center mb-12 relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
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

      {/* ── CARDS GRID ── */}
      <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 relative z-10">
        {approaches.map((item, index) => {
          const isGreen = item.accent === "#22a05b";

          return (
            <div
              key={item.id}
              className={`group relative flex flex-col bg-white rounded-2xl px-7 py-8 border-t-[4px]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)]
                ${index === 4 ? "lg:col-start-2" : ""}
                animate-[fadeUp_0.5s_ease_forwards] opacity-0`}
              style={{
                borderTopColor: item.accent,
                animationDelay: `${0.1 + index * 0.12}s`,
              }}
            >
              {/* Step number — ghost watermark */}
              <span
                className="absolute top-4 right-5 text-[42px] font-black leading-none select-none font-['Poppins']"
                style={{ color: "#f0f4f8" }}
              >
                {item.id}
              </span>

              {/* Icon */}
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-200"
                style={{ background: item.iconBg }}
              >
                {item.icon}
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                  style={{ background: "#22a05b" }}
                />
                <span
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "#22a05b" }}
                >
                  Verified Process
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[16px] font-bold mb-3 leading-snug font-['Poppins']"
                style={{ color: isGreen ? item.accent : "#0d3a6e" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#4a5568] leading-[1.7]">
                {item.description}
              </p>

              {/* Bottom accent line — expands on hover */}
              <div
                className="mt-6 h-[3px] rounded-full w-10 transition-all duration-500 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div
        className={`mt-14 flex justify-center relative z-10 transition-all duration-700 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0d3a6e] to-[#1a6fc4] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_24px_rgba(26,111,196,0.3)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,111,196,0.4)] font-['Poppins']"
        >
          Start Your Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* ── KEYFRAME ANIMATION (matches ServicesSection) ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
