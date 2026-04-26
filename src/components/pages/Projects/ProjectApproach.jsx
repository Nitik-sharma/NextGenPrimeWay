import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// ── WORKFLOW DIAGRAM ──────────────────────────────────────────
import workflowDiagram from "../../../assets/Images/Planning/1.jpeg";

// ── ROADS — hero, delivery phase, road quote divider ──────────
import roadImg1 from "../../../assets/Images/Roads/32.jpg"; // hero bg
import roadImg2 from "../../../assets/Images/Roads/30.jpg"; // closing quote bg
import roadImg3 from "../../../assets/Images/Roads/12.jpg"; // phase 04 image
import roadImg4 from "../../../assets/Images/Roads/13.jpg"; // phase 05 image
import roadImg5 from "../../../assets/Images/Roads/22.jpg"; // image grid
import roadImg6 from "../../../assets/Images/Roads/24.jpg"; // image grid wide

// ── TOLLS — monitoring, compliance, operational phases ────────
import tollImg1 from "../../../assets/Images/Tolls/5.jpeg"; // phase 03 image (monitoring)
import tollImg2 from "../../../assets/Images/Tolls/9.jpeg"; // image grid
import tollImg3 from "../../../assets/Images/Tolls/16.jpeg"; // toll strip
import tollImg4 from "../../../assets/Images/Tolls/17.jpeg"; // toll strip
import tollImg5 from "../../../assets/Images/Tolls/14.jpeg"; // toll strip
import tollImg6 from "../../../assets/Images/Tolls/15.jpeg"; // toll gallery

// ── WORK — resource allocation, on-ground teams ───────────────
import workImg1 from "../../../assets/Images/work/2.jpg"; // phase 02 image (resource)
import workImg2 from "../../../assets/Images/work/3.jpg"; // image grid
import workImg3 from "../../../assets/Images/work/4.jpg"; // image grid
import workImg4 from "../../../assets/Images/work/8.jpg"; // teams section
import workImg5 from "../../../assets/Images/work/12.jpg"; // teams section
import workImg6 from "../../../assets/Images/work/11.jpg"; // teams section

// ── PLANNING — planning phase, intro, design eval ─────────────
import planImg1 from "../../../assets/Images/Planning/10.jpeg"; // phase 01 image
import planImg2 from "../../../assets/Images/Planning/11.jpeg"; // planning mosaic
import planImg3 from "../../../assets/Images/Planning/9.jpeg"; // planning mosaic
import planImg4 from "../../../assets/Images/Planning/8.jpeg"; // planning strip
import planImg5 from "../../../assets/Images/Planning/7.jpeg"; // planning strip

/* ── useReveal ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({
  children,
  className = "",
  style = {},
  delay = 0,
  direction = "up",
}) {
  const [ref, visible] = useReveal();
  const transforms = {
    up: "translateY(36px)",
    left: "translateX(-48px)",
    right: "translateX(48px)",
    scale: "scale(0.94)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Steps — each image chosen for its purpose ── */
const steps = [
  {
    number: "01",
    icon: "📋",
    accent: "#1a6fc4",
    bg: "#e8f1fb",
    title: "Comprehensive Planning & Design Evaluation",
    desc: "We begin with detailed analysis and strategic planning to ensure alignment with project goals, feasibility, and long-term sustainability.",
    image: planImg1, // ← Planning folder: design & feasibility study
    tags: ["Feasibility Study", "Design Review", "Goal Alignment"],
  },
  {
    number: "02",
    icon: "⚙️",
    accent: "#22a05b",
    bg: "#e8f5ee",
    title: "Strategic Resource Allocation",
    desc: "We optimize the deployment of manpower, technology, and resources to ensure efficient execution and maximum productivity.",
    image: workImg1, // ← Work folder: team resource deployment
    tags: ["Manpower Planning", "Tech Deployment", "Resource Optimization"],
  },
  {
    number: "03",
    icon: "📡",
    accent: "#1a6fc4",
    bg: "#e8f1fb",
    title: "Continuous Monitoring & Performance Insights",
    desc: "We implement real-time tracking and analytics-driven reporting systems to ensure visibility, performance optimization, and informed decision-making.",
    image: tollImg1, // ← Tolls folder: monitoring at toll plazas
    tags: ["Real-Time Tracking", "Analytics Reports", "KPI Dashboards"],
  },
  {
    number: "04",
    icon: "⏱️",
    accent: "#22a05b",
    bg: "#e8f5ee",
    title: "On-Time Delivery with Cost Optimization",
    desc: "We ensure timely project completion while maintaining cost efficiency through disciplined execution and resource optimization.",
    image: roadImg3, // ← Roads folder: completed road delivery
    tags: ["Timeline Control", "Budget Management", "Milestone Tracking"],
  },
  {
    number: "05",
    icon: "🛡️",
    accent: "#1a6fc4",
    bg: "#e8f1fb",
    title: "Commitment to Safety & Sustainability",
    desc: "We integrate safety protocols and sustainable practices across all project phases, ensuring responsible execution and long-term value.",
    image: roadImg4, // ← Roads folder: safe highway infrastructure
    tags: ["Safety Protocols", "Sustainability", "Compliance"],
  },
];

export default function ProjectApproachPage() {
  const [heroRef, heroV] = useReveal(0.05);

  return (
    <main className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ════════════════════════════
          HERO — Roads/32.jpg (wide highway aerial)
      ════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "72vh", paddingTop: "80px" }}
      >
        <img
          src={roadImg1}
          alt="highway project approach"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 1.6s ease forwards" }}
        />
        <div className="absolute inset-0 bg-[#050f1a]/68" />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />

        <div
          ref={heroRef}
          className="relative z-10 px-8 max-w-6xl mx-auto"
          style={{ paddingTop: "12vh", paddingBottom: "110px" }}
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-white bg-[#22a05b] px-4 py-1.5 rounded-full w-fit mb-6"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            How We Work
          </span>
          <h1
            className="text-white font-black leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Our Project Approach
            <br />
            <span style={{ color: "#6BAF45" }}>Built for Results</span>
          </h1>
          <p
            className="text-white font-medium text-[16px] max-w-xl leading-[1.85]"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s",
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            Structured, transparent, and performance-driven — from initial
            planning to final delivery.
          </p>
        </div>
      </section>

      {/* ════════════════════════════
          INTRO — text + workflow diagram
          Planning/1.jpeg = workflow diagram
      ════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <p className="flex items-center gap-2 text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-4">
              <span className="w-6 h-[2px] bg-[#22a05b]" /> Our Methodology
            </p>
            <h2
              className="text-[#0d3a6e] font-black leading-tight mb-6"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              A Proven Framework
              <br />
              <span style={{ color: "#22a05b" }}>Across Every Phase</span>
            </h2>
            <p className="text-[#475569] text-[14px] leading-[1.95] mb-5">
              We follow a structured, transparent, and performance-driven
              approach for every project we undertake. From initial planning to
              final delivery, each phase is meticulously managed to ensure
              precision, accountability, and long-term value.
            </p>
            <p className="text-[#475569] text-[14px] leading-[1.95] mb-8">
              Our methodology combines intelligent planning, expert execution,
              and continuous performance monitoring — enabling us to deliver
              projects that meet the highest standards of quality, safety,
              compliance, and sustainability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "100+", label: "Projects Delivered", color: "#1a6fc4" },
                { val: "5", label: "Core Process Phases", color: "#22a05b" },
                { val: "98%", label: "On-Time Delivery", color: "#1a6fc4" },
                { val: "32+", label: "States Covered", color: "#22a05b" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#f8fafc] rounded-2xl p-4 border border-[#e8f0fb]"
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </div>
                  <div className="text-[11px] text-[#64748b] uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Workflow diagram — Planning/1.jpeg */}
          <Reveal direction="right">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden bg-white"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}
              >
                <img
                  src={workflowDiagram}
                  alt="Project Management Workflow — Initiate, Plan, Execute, Monitor, Close"
                  className="w-full h-auto object-contain p-4"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 bg-[#0d3a6e] text-white rounded-2xl px-5 py-3 text-center"
                style={{ boxShadow: "0 12px 32px rgba(13,58,110,0.25)" }}
              >
                <div className="text-2xl font-black text-[#6BAF45]">5</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider">
                  Core Phases
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════
          PLANNING PHOTO STRIP
          Planning/7-11.jpeg = site planning, surveys, design docs
      ════════════════════════════ */}
      <section className="bg-[#f8fafc] py-14 px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up" className="text-center mb-10">
            <p className="text-[#1a6fc4] text-[11px] font-bold uppercase tracking-[3px] mb-2">
              Phase Zero
            </p>
            <h3 className="text-[#0d3a6e] font-black text-2xl">
              Planning & Design in Action
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[planImg2, planImg3, planImg4, planImg5].map((src, i) => (
              <Reveal
                key={i}
                direction="scale"
                delay={i * 0.09}
                className="rounded-2xl overflow-hidden group"
                style={{
                  height: "190px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.09)",
                }}
              >
                <img
                  src={src}
                  alt="planning phase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          5 STEPS — alternating layout
          Images matched to each phase purpose
      ════════════════════════════ */}
      <section className="bg-white py-6 px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up" className="text-center mb-16 pt-16">
            <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
              Step by Step
            </p>
            <h2 className="text-[#0d3a6e] font-black text-4xl mb-4">
              Our Core Approach
            </h2>
            <p className="text-[#64748b] text-[14px] max-w-2xl mx-auto leading-[1.8]">
              Five carefully defined phases — each designed to maximise
              efficiency, transparency, and quality across every project we
              deliver.
            </p>
          </Reveal>

          <div className="space-y-6 pb-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal
                  key={step.number}
                  direction="up"
                  delay={0.05}
                  className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white border border-[#e8f0fb]"
                  style={{
                    boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
                    minHeight: "320px",
                  }}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}
                    style={{ minHeight: "280px" }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                    />
                    <div
                      className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-[15px]"
                      style={{
                        background: step.accent,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center p-10 ${isEven ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: step.bg }}
                      >
                        {step.icon}
                      </div>
                      <p
                        className="text-[11px] font-bold uppercase tracking-[3px]"
                        style={{ color: step.accent }}
                      >
                        Phase {step.number}
                      </p>
                    </div>
                    <h3 className="text-[#0d3a6e] font-black text-[18px] leading-snug mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] text-[13px] leading-[1.9] mb-5">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold px-3 py-1.5 rounded-full border"
                          style={{
                            color: step.accent,
                            background: step.bg,
                            borderColor:
                              step.accent === "#22a05b" ? "#b6e4ca" : "#b5d4f4",
                          }}
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-6 h-[3px] w-10 rounded-full group-hover:w-24 transition-all duration-500"
                      style={{ background: step.accent }}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          TOLL OPERATIONS STRIP
          Tolls/14-17 = toll plaza operations, compliance monitoring
      ════════════════════════════ */}
      <section className="bg-[#f8fafc] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up" className="text-center mb-10">
            <p className="text-[#1a6fc4] text-[11px] font-bold uppercase tracking-[3px] mb-2">
              Toll Operations
            </p>
            <h3 className="text-[#0d3a6e] font-black text-2xl">
              Monitoring & Compliance at Every Plaza
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[tollImg3, tollImg4, tollImg5, tollImg6].map((src, i) => (
              <Reveal
                key={i}
                direction="scale"
                delay={i * 0.09}
                className="rounded-2xl overflow-hidden group"
                style={{
                  height: "190px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.09)",
                }}
              >
                <img
                  src={src}
                  alt="toll operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          ON-GROUND TEAMS
          Work/2-12.jpg = field teams, on-site execution
      ════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <Reveal direction="up" className="text-center mb-12">
          <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
            On the Ground
          </p>
          <h2 className="text-[#0d3a6e] font-black text-3xl">
            Our Teams Delivering Results
          </h2>
        </Reveal>

        {/* top — 3 work team images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[workImg3, workImg4, workImg5].map((src, i) => (
            <Reveal
              key={i}
              direction="scale"
              delay={i * 0.1}
              className="rounded-2xl overflow-hidden group"
              style={{
                height: "220px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={src}
                alt="work team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>

        {/* bottom — wide road + toll image */}
        <div className="grid grid-cols-12 gap-4">
          <Reveal
            direction="left"
            className="col-span-7 rounded-2xl overflow-hidden group"
            style={{ height: "240px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
          >
            <img
              src={roadImg6}
              alt="road project delivery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
          <Reveal
            direction="right"
            className="col-span-5 rounded-2xl overflow-hidden group"
            style={{ height: "240px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
          >
            <img
              src={tollImg2}
              alt="toll monitoring team"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Reveal>
        </div>

        {/* work + road strip */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[workImg6, workImg2, roadImg5].map((src, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 0.08}
              className="rounded-2xl overflow-hidden group"
              style={{
                height: "180px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={src}
                alt="on-ground execution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          CLOSING QUOTE — Roads/30.jpg (open highway)
      ════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "340px" }}
      >
        <img
          src={roadImg2}
          alt="highway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3a6e]/70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-20">
          <Reveal direction="up">
            <p className="text-[#6BAF45] text-[11px] font-bold uppercase tracking-[3px] mb-4">
              Our Commitment
            </p>
            <h2
              className="text-white font-black leading-[1.3] mb-6"
              style={{
                fontSize: "clamp(1.3rem, 3.2vw, 2.4rem)",
                textShadow: "0 2px 16px rgba(0,0,0,0.3)",
              }}
            >
              "At NextGen PrimeWay Solutions LLP, we are committed to building
              <br />
              infrastructure that is efficient, compliant, and future-ready —
              <br />
              <span style={{ color: "#6BAF45" }}>
                contributing to the nation's growth with reliability and
                excellence."
              </span>
            </h2>
            <div className="w-16 h-[3px] bg-[#6BAF45] mx-auto rounded-full" />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════
          CTA
      ════════════════════════════ */}
      

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to   { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
