import { useState, useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// ── PLANNING ──────────────────────────────────────────────────
import planImg1 from "../../../assets/Images/Planning/5.jpeg";

// ── ROADS ─────────────────────────────────────────────────────
import roadImg1 from "../../../assets/Images/Roads/2.jpg";
import roadImg2 from "../../../assets/Images/Roads/3.jpg";
import roadImg3 from "../../../assets/Images/Roads/4.jpg";
import roadImg4 from "../../../assets/Images/Roads/5.jpg";
import roadImg5 from "../../../assets/Images/Roads/7.jpg";
import roadImg6 from "../../../assets/Images/Roads/8.jpg";

// ── TOLLS ─────────────────────────────────────────────────────
import tollImg1 from "../../../assets/Images/Tolls/2.jpeg";
import tollImg2 from "../../../assets/Images/Tolls/3.jpg";
import tollImg3 from "../../../assets/Images/Tolls/4.JPG";
import tollImg4 from "../../../assets/Images/Tolls/6.jpeg";
import tollImg5 from "../../../assets/Images/Tolls/8.jpeg";
import tollImg6 from "../../../assets/Images/Tolls/12.webp";

// ── WORK ──────────────────────────────────────────────────────
import workImg1 from "../../../assets/Images/work/5.jpg";
import workImg2 from "../../../assets/Images/work/6.jpg";
import workImg3 from "../../../assets/Images/work/7.jpg";
import workImg4 from "../../../assets/Images/work/12.jpg";
// ─────────────────────────────────────────────────────────────

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

/* ── Reveal wrapper ── */
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
    scale: "scale(0.93)",
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

/* ── Generic image slider ── */
function ImageSlider({ images, height = "100%" }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (i) => {
      if (i === active || fading) return;
      setPrev(active);
      setFading(true);
      setActive(i);
      setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 750);
    },
    [active, fading],
  );

  useEffect(() => {
    const id = setInterval(() => goTo((active + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [active, goTo, images.length]);

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden"
      style={{ height, boxShadow: "0 24px 64px rgba(0,0,0,0.16)" }}
    >
      {prev !== null && (
        <img
          key={`p${prev}`}
          src={images[prev]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 0.75s ease",
            zIndex: 1,
          }}
        />
      )}
      <img
        key={`a${active}`}
        src={images[active]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: "sliderIn 0.75s ease forwards", zIndex: 2 }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: i === active ? "22px" : "7px",
              height: "7px",
              background: i === active ? "#22a05b" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Section header ── */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal direction="up" className="text-center mb-14">
      <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
        {eyebrow}
      </p>
      <h2 className="text-[#0d3a6e] font-black text-4xl mb-3">{title}</h2>
      {subtitle && (
        <p className="text-[#64748b] text-[14px] max-w-2xl mx-auto leading-[1.8]">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

const stats = [
  { value: "20+", label: "Projects Delivered", green: true },
  { value: "100%", label: "Client Satisfaction", green: false },
  { value: "12+", label: "States Covered", green: true },
  { value: "5+", label: "Years of Excellence", green: false },
];

const tollOffers = [
  {
    title: "ETC Integration",
    desc: "Seamless Electronic Toll Collection systems integrated with national FASTag infrastructure.",
  },
  {
    title: "Revenue Reconciliation",
    desc: "Automated daily reconciliation reports ensuring full financial transparency and audit-readiness.",
  },
  {
    title: "Compliance Reporting",
    desc: "MCA, GST, and NHAI regulatory compliance managed end-to-end across all toll operations.",
  },
];

const roadOffers = [
  {
    title: "Highway Construction",
    desc: "End-to-end project support for national and state highway development aligned with NHAI standards.",
  },
  {
    title: "Bridge & Overpass Works",
    desc: "Structural support services for bridge design, construction, and long-term maintenance.",
  },
  {
    title: "Traffic Management",
    desc: "IoT-enabled traffic monitoring, ANPR cameras, and real-time incident management systems.",
  },
];



export default function AboutPage() {
  const [heroRef, heroV] = useReveal(0.05);

  return (
    <main className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ════════════════════════════
          HERO — Planning image
      ════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ height: "100vh", paddingTop: "80px" }}
      >
        <img
          src={planImg1}
          alt="infrastructure planning"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 1.6s ease forwards" }}
        />
        <div className="absolute inset-0 bg-[#0a1e2e]/55" />
        <div
          className="absolute bottom-0 left-0 right-0 h-28 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />

        <div
          ref={heroRef}
          className="relative z-10 h-full flex flex-col justify-center px-8 max-w-6xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-white bg-[#22a05b] px-4 py-1.5 rounded-full w-fit mb-6"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(24px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            About Us
          </span>
          <h1
            className="text-white font-black leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.25)",
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
            }}
          >
            NextGen PrimeWay
            <br />
            <span style={{ color: "#6BAF45" }}>Solutions LLP</span>
          </h1>
          <p
            className="text-white/70 text-[16px] max-w-xl leading-[1.8] mb-8"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.36s, transform 0.7s ease 0.36s",
            }}
          >
            Legally registered under the Ministry of Corporate Affairs —
            building India's infrastructure with precision, compliance, and
            purpose.
          </p>
          <div
            className="flex items-center gap-3"
            style={{
              opacity: heroV ? 1 : 0,
              transition: "opacity 0.7s ease 0.5s",
            }}
          >
            <div className="w-12 h-[2px] bg-[#6BAF45]" />
            <span className="text-white/50 text-[12px] uppercase tracking-[3px]">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          WHO WE ARE — Planning slider
      ════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <p className="flex items-center gap-2 text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-3">
              <span className="w-6 h-[2px] bg-[#22a05b]" /> Who We Are
            </p>
            <h2
              className="text-[#0d3a6e] font-black leading-tight mb-5"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}
            >
              A Legally Registered
              <br />
              Infrastructure Partner
            </h2>
            <div className="flex items-center gap-3 border border-[#dce8f5] rounded-2xl px-4 py-3 mb-6 w-fit">
              <span className="text-2xl">🏛️</span>
              <div>
                <p className="text-[#0d3a6e] text-[12px] font-bold">
                  Ministry of Corporate Affairs
                </p>
                <p className="text-[#64748b] text-[11px]">
                  Government of India — Duly Registered LLP
                </p>
              </div>
            </div>
            <p className="text-[#475569] text-[14px] leading-[1.95] mb-4">
              NextGen PrimeWay Solutions LLP is built on a strong legal and
              governance framework, ensuring structured processes,
              accountability, and professional execution across all operations.
            </p>
            <p className="text-[#475569] text-[14px] leading-[1.95] mb-8">
              We specialize in toll management systems and infrastructure
              support services — integrating advanced technology with skilled
              manpower for efficient, compliant, and scalable delivery.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Compliance",
                "Transparency",
                "Precision",
                "Innovation",
                "Scalability",
              ].map((v) => (
                <span
                  key={v}
                  className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full hover:scale-105 transition-transform cursor-default"
                  style={{
                    color: "#0d3a6e",
                    background: "#f0f6ff",
                    border: "1px solid #c7ddf7",
                  }}
                >
                  ✓ {v}
                </span>
              ))}
            </div>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 text-white text-[14px] font-semibold px-7 py-3.5 rounded-full bg-[#0d3a6e]
                         hover:bg-[#1a6fc4] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(13,58,110,0.3)]
                         transition-all duration-300"
            >
              Work With Us →
            </NavLink>
          </Reveal>

          {/* Planning slider — single planning image looped with road images */}
          <Reveal direction="right" style={{ height: "480px" }}>
            <ImageSlider
              images={[planImg1, roadImg1, tollImg4]}
              height="480px"
            />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════
          STATS
      ════════════════════════════ */}
      <section className="bg-[#0d3a6e] py-14 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 0.1}>
              <div
                className="text-4xl font-black leading-none mb-2"
                style={{ color: s.green ? "#6BAF45" : "#fff" }}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          TOLL MANAGEMENT — Tolls images
      ════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <SectionHeader
          eyebrow="Toll Operations"
          title="Toll Management Systems"
          subtitle="End-to-end toll collection, ETC integration, and compliance — delivering seamless revenue operations across every plaza."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Toll mosaic — 3 images */}
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-3" style={{ height: "420px" }}>
              {/* tall left */}
              <div
                className="row-span-2 rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={tollImg1}
                  alt="toll operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* top right */}
              <div
                className="rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={tollImg2}
                  alt="toll plaza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* bottom right */}
              <div
                className="rounded-2xl overflow-hidden group"
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
              >
                <img
                  src={tollImg3}
                  alt="toll system"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </Reveal>

          {/* Toll offer cards */}
          <Reveal direction="right">
            <div className="space-y-5">
              {tollOffers.map((o, i) => (
                <div
                  key={o.title}
                  className="group flex gap-4 bg-white rounded-2xl p-5 border border-[#e8f0fb]
                             hover:-translate-y-0.5 hover:border-[#22a05b] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                             transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg bg-[#f0f6ff]">
                    {["🛣️", "📊", "📋"][i]}
                  </div>
                  <div>
                    <h3 className="text-[#0d3a6e] font-bold text-[15px] mb-1">
                      {o.title}
                    </h3>
                    <p className="text-[#64748b] text-[13px] leading-[1.8]">
                      {o.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Toll image strip — remaining toll images */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[tollImg4, tollImg5, tollImg6].map((src, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 0.1}
              className="rounded-2xl overflow-hidden group"
              style={{
                height: "200px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          ROAD & HIGHWAY — Roads images
      ════════════════════════════ */}
      <section className="bg-[#f8fafc] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Road Projects"
            title="Road & Highway Development"
            subtitle="Planning, developing, and maintaining state-of-the-art roads, highways, and bridges across India."
          />

          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            {/* Road offer cards */}
            <Reveal direction="left">
              <div className="space-y-5">
                {roadOffers.map((o, i) => (
                  <div
                    key={o.title}
                    className="group flex gap-4 bg-white rounded-2xl p-5 border border-[#e8f0fb]
                               hover:-translate-y-0.5 hover:border-[#1a6fc4] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                               transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg bg-[#f0f6ff]">
                      {["🏗️", "🌉", "📡"][i]}
                    </div>
                    <div>
                      <h3 className="text-[#0d3a6e] font-bold text-[15px] mb-1">
                        {o.title}
                      </h3>
                      <p className="text-[#64748b] text-[13px] leading-[1.8]">
                        {o.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Road slider */}
            <Reveal direction="right" style={{ height: "380px" }}>
              <ImageSlider
                images={[roadImg1, roadImg2, roadImg3, roadImg4]}
                height="380px"
              />
            </Reveal>
          </div>

          {/* Road image strip — remaining road images */}
          <div className="grid grid-cols-2 gap-4">
            {[roadImg5, roadImg6].map((src, i) => (
              <Reveal
                key={i}
                direction={i === 0 ? "left" : "right"}
                className="rounded-2xl overflow-hidden group"
                style={{
                  height: "220px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          QUOTE DIVIDER — Road image
      ════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ height: "320px" }}>
        <img
          src={roadImg3}
          alt="highway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3a6e]/62 flex items-center justify-center">
          <Reveal direction="up" className="text-center px-8">
            <p
              className="text-white font-black"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
                lineHeight: 1.25,
                textShadow: "0 2px 16px rgba(0,0,0,0.3)",
              }}
            >
              "Connecting India's future —<br />
              <span style={{ color: "#6BAF45" }}>
                one road, one toll, one community at a time."
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* ════════════════════════════
          TIMELINE
      ════════════════════════════ */}
   
      {/* ════════════════════════════
          WORK / TEAMS — Work images
      ════════════════════════════ */}
      <section className="bg-[#f8fafc] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="On the Ground" title="Our Teams at Work" />

          {/* big slider + 2 stacked */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Reveal direction="left" style={{ height: "420px" }}>
              <ImageSlider
                images={[workImg1, workImg2, workImg3, workImg4]}
                height="420px"
              />
            </Reveal>

            <div className="grid grid-rows-2 gap-6">
              {[workImg3, workImg4].map((src, i) => (
                <Reveal
                  key={i}
                  direction="right"
                  delay={i * 0.12}
                  className="rounded-3xl overflow-hidden group"
                  style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* work strip */}
          <div className="grid grid-cols-2 gap-6">
            {[workImg1, workImg2].map((src, i) => (
              <Reveal
                key={i}
                direction={i === 0 ? "left" : "right"}
                className="rounded-2xl overflow-hidden group"
                style={{
                  height: "200px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

     

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to   { transform: scale(1); }
        }
        @keyframes sliderIn {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
