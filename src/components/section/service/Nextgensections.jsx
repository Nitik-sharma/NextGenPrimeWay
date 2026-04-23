// NextGenSections.jsx
// Three sections: OurApproach + WhyChooseUs + IndustriesWeServe + CTA
// Stack: React + Tailwind CSS + Lucide React + React Router DOM

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Map,
  Zap,
  BarChart2,
  Headphones,
  ShieldCheck,
  Cpu,
  Users,
  Clock,
  Award,
  Truck,
  Building2,
  Layers,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
} from "lucide-react";

import img1 from "../../../assets/Images/pic1.jpeg"
import img2 from "../../../assets/Images/pic10.jpeg"
import img3 from "../../../assets/Images/pic11.jpeg"
import img4 from "../../../assets/Images/pic12.jpeg";
import img5 from "../../../assets/Images/pic13.jpeg";
import img6 from "../../../assets/Images/pic14.jpeg";
import img7 from "../../../assets/Images/pic15.jpeg";
import img8 from "../../../assets/Images/pic16.jpeg";
import img9 from "../../../assets/Images/pic17.jpeg";
import img10 from "../../../assets/Images/pic18.jpeg";
import img11 from "../../../assets/Images/pic19.jpeg";
import img12 from "../../../assets/Images/pic20.jpeg";


/* ─────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────── */
function useReveal() {
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
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    icon: Search,
    title: "Requirement Analysis",
    desc: "Deep-dive site assessments, traffic studies, and feasibility evaluations to understand every project dimension.",
    color: "from-[#1E5A7A] to-[#2F7FA3]",
    light: "bg-[#EAF2F8]",
    text: "text-[#1E5A7A]",
    img: img1,
  },
  {
    num: "02",
    icon: Map,
    title: "Strategic Planning",
    desc: "Detailed project blueprints, resource mapping, and budget planning aligned with client timelines and standards.",
    color: "from-[#2F7FA3] to-[#3A9BB8]",
    light: "bg-[#E8F4F8]",
    text: "text-[#2F7FA3]",
    img:img2,
  },
  {
    num: "03",
    icon: Zap,
    title: "Execution & Implementation",
    desc: "Precision deployment with expert on-site supervision, quality control, and safety-first construction practices.",
    color: "from-[#3A9BB8] to-[#5FA046]",
    light: "bg-[#E8F5EE]",
    text: "text-[#3A9BB8]",
    img:img3,
  },
  {
    num: "04",
    icon: BarChart2,
    title: "Monitoring & Optimization",
    desc: "Real-time performance dashboards, KPI tracking, and data-driven refinements to maximize operational efficiency.",
    color: "from-[#5FA046] to-[#4A8A38]",
    light: "bg-[#EDF6E5]",
    text: "text-[#5FA046]",
    img: img4,
  },
  {
    num: "05",
    icon: Headphones,
    title: "Continuous Support",
    desc: "24/7 O&M support, scheduled maintenance, compliance reporting, and long-term partnership beyond project completion.",
    color: "from-[#4A8A38] to-[#3F6F35]",
    light: "bg-[#EAF3E5]",
    text: "text-[#3F6F35]",
    img: img5,
  },
];

const whyPoints = [
  {
    icon: Award,
    title: "Proven Domain Expertise",
    desc: "15+ years delivering toll and infrastructure projects across India with measurable outcomes.",
    color: "from-[#1E5A7A] to-[#2F7FA3]",
    bg: "bg-[#EAF2F8]",
    tc: "text-[#1E5A7A]",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Solutions",
    desc: "FASTag, IoT, ATMS and real-time analytics embedded into every solution we deliver.",
    color: "from-[#2F7FA3] to-[#5FA046]",
    bg: "bg-[#E8F4F0]",
    tc: "text-[#2F7FA3]",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance First",
    desc: "Aligned with NHAI, MoRTH and state authority safety frameworks on every engagement.",
    color: "from-[#5FA046] to-[#3F6F35]",
    bg: "bg-[#EDF6E5]",
    tc: "text-[#5FA046]",
  },
  {
    icon: Users,
    title: "Experienced Project Teams",
    desc: "10,000+ trained and certified personnel ready for rapid deployment at any scale.",
    color: "from-[#3F6F35] to-[#1E5A7A]",
    bg: "bg-[#EAF3EC]",
    tc: "text-[#3F6F35]",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Rigorous project management methodologies that ensure delivery within schedule and budget.",
    color: "from-[#1E5A7A] to-[#3A9BB8]",
    bg: "bg-[#EAF2F8]",
    tc: "text-[#1E5A7A]",
  },
  {
    icon: Layers,
    title: "Scalable & Future-Ready",
    desc: "Modular architectures designed to scale alongside India's expanding infrastructure network.",
    color: "from-[#2F7FA3] to-[#3F6F35]",
    bg: "bg-[#E8F5EE]",
    tc: "text-[#2F7FA3]",
  },
];

const industries = [
  {
    icon: Truck,
    title: "Transportation & Highways",
    desc: "National and state highway toll operations, traffic management, and corridor development.",
    img: img6,
    color: "from-[#1E5A7A] to-[#2F7FA3]",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    desc: "NHAI, MoRTH, and state PWD engagements with full regulatory and compliance alignment.",
    img:img7,
    color: "from-[#2F7FA3] to-[#5FA046]",
  },
  {
    icon: Layers,
    title: "Infrastructure Development",
    desc: "Private concessionaires, EPC contractors, and BOT operators across India.",
    img: img8,
    color: "from-[#5FA046] to-[#3F6F35]",
  },
  {
    icon: Lightbulb,
    title: "Smart City Projects",
    desc: "Integrated traffic systems, ATMS, and digital infrastructure for emerging smart cities.",
    img: img9,
    color: "from-[#3F6F35] to-[#1E5A7A]",
  },
];

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D1E4EE] text-[11px] font-bold tracking-[1.2px] uppercase text-[#1E5A7A]">
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046]" />
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   1. OUR APPROACH
───────────────────────────────────────────── */
function OurApproach() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <section className="py-20 px-6 bg-[#F9FAFB]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            How{" "}
            <span className="bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] bg-clip-text text-transparent">
              We Work
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] mb-3" />
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
            Our approach is built on a foundation of planning, precision, and
            performance — delivering tailored solutions with efficiency and full
            transparency.
          </p>
        </div>

        {/* Main Content: Step List + Active Detail */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: step buttons */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <button
                  key={step.num}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl border-[1.5px] transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "bg-white border-[#1E5A7A] shadow-lg shadow-[#1E5A7A]/10"
                        : "bg-white border-gray-200 hover:border-[#2F7FA3] hover:shadow-md"
                    }`}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${step.color} shadow-md`
                          : `${step.light}`
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-white" : step.text
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase transition-colors duration-300 ${
                          isActive ? "text-[#1E5A7A]" : "text-gray-400"
                        }`}
                      >
                        Step {step.num}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5FA046] animate-pulse" />
                      )}
                    </div>
                    <p
                      className={`font-poppins font-bold text-[14px] leading-snug mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[#1E5A7A] translate-x-0 opacity-100"
                        : "text-gray-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: active step detail card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/60 overflow-hidden h-full">
              {/* Image */}
              <div className="relative h-52 md:h-64 overflow-hidden">
                <img
                  key={s.img}
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-60`}
                />
                {/* Step badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5">
                  <span className="text-white text-xs font-bold tracking-wider">
                    STEP {s.num}
                  </span>
                </div>
                {/* Big number */}
                <div className="absolute bottom-3 right-5 text-white/10 font-poppins font-black text-8xl leading-none select-none pointer-events-none">
                  {s.num}
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-poppins font-bold text-xl text-white leading-tight drop-shadow">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                  {s.desc}
                </p>
                {/* Progress dots */}
                <div className="flex items-center gap-2 mb-5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-6 h-2 bg-gradient-to-r from-[#1E5A7A] to-[#5FA046]"
                          : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
                    disabled={active === 0}
                    className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-500 hover:border-[#1E5A7A] hover:text-[#1E5A7A] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() =>
                      setActive((prev) => Math.min(prev + 1, steps.length - 1))
                    }
                    disabled={active === steps.length - 1}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#1E5A7A] to-[#2F7FA3] text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. WHY CHOOSE US
───────────────────────────────────────────── */
function WhyChooseUs() {
  const [ref, visible] = useReveal();

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#0D2535 0%,#1E5A7A 45%,#1a4020 100%)",
      }}
      ref={ref}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,#fff 40px,#fff 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,#fff 40px,#fff 41px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[1.2px] uppercase text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DD856]" />
            Why Partner With Us
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3 leading-tight">
            The{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#7DD856,#A8E87E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NextGen PrimeWay
            </span>{" "}
            Advantage
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#5FA046] to-[#2F7FA3] mx-auto mb-3" />
          <p className="text-white/60 text-[15px] max-w-lg mx-auto leading-relaxed">
            Built on expertise, powered by technology, and driven by an
            unwavering commitment to quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-6
                  hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300 hover:-translate-y-1
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  transition-all duration-700`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${p.color}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className="font-poppins font-bold text-[15px] text-white mb-2 leading-snug">
                  {p.title}
                </h4>
                <p className="text-white/55 text-[13.5px] leading-relaxed">
                  {p.desc}
                </p>

                {/* Bottom check */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DD856]" />
                  <span className="text-[12px] text-white/50 font-medium">
                    Industry Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { num: "500+", label: "Toll Plazas Managed" },
            { num: "15,000 km", label: "Highway Coverage" },
            { num: "10,000+", label: "Trained Personnel" },
            { num: "98%", label: "Client Retention Rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/[0.06] border border-white/10 rounded-2xl py-5 px-4"
            >
              <div className="font-poppins font-black text-2xl text-white mb-1">
                {s.num}
              </div>
              <div className="text-white/50 text-[12px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. INDUSTRIES WE SERVE
───────────────────────────────────────────── */
function IndustriesWeServe() {
  const [ref, visible] = useReveal();

  return (
    <section className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionLabel>Sectors We Power</SectionLabel>
          <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            Industries{" "}
            <span className="bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] mb-3" />
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
            From national highways to smart city projects — we serve the
            stakeholders who shape India's infrastructure future.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-default
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  transition-all duration-700`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${ind.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                  />
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-5">
                  <h4 className="font-poppins font-bold text-[14.5px] text-gray-900 mb-1.5 leading-snug">
                    {ind.title}
                  </h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {ind.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[12.5px] font-bold text-[#1E5A7A] opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <NavLink
                      to="/services"
                      className="flex items-center gap-1.5"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  const [ref, visible] = useReveal();

  return (
    <section className="py-20 px-6 bg-[#F0F4F8]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background:
              "linear-gradient(135deg,#0D2535 0%,#1E5A7A 40%,#1d4a17 80%,#0f2d0c 100%)",
          }}
        >
          {/* BG image overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={img12}
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle,#fff 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold tracking-[1.2px] uppercase text-[#7DD856] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DD856] animate-pulse" />
                Start Your Project
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                Let's Build{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7DD856,#A8E87E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Efficient Infrastructure
                </span>{" "}
                Together
              </h2>
              <p className="text-white/65 text-[15px] leading-relaxed max-w-lg">
                Partner with us to transform your infrastructure and toll
                operations with reliable, scalable, and future-ready solutions.
              </p>

              {/* Feature pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "FASTag Enabled",
                  "NHAI Compliant",
                  "24/7 Support",
                  "Pan-India Coverage",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[12px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 flex flex-col gap-4 min-w-[260px]">
                <p className="font-poppins font-bold text-white text-[15px] text-center">
                  Ready to get started?
                </p>

                <NavLink
                  to="/contact"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl
                    bg-gradient-to-r from-[#5FA046] to-[#3F6F35]
                    text-white font-poppins font-bold text-[14px]
                    shadow-lg shadow-[#5FA046]/30
                    hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#5FA046]/40
                    transition-all duration-200 group"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>

                <NavLink
                  to="/proposal"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl
                    bg-white/10 border border-white/25
                    text-white font-poppins font-bold text-[14px]
                    hover:bg-white/20 hover:border-white/40
                    transition-all duration-200 group"
                >
                  <FileText className="w-4 h-4" />
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>

                <p className="text-white/35 text-[11.5px] text-center mt-1">
                  Typically respond within 24 business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPORT: all sections composed
───────────────────────────────────────────── */
export default function NextGenSections() {
  return (
    <>
      <OurApproach />
      <WhyChooseUs />
      <IndustriesWeServe />
      <CTASection />
    </>
  );
}
