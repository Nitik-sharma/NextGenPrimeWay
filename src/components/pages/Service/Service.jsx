import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// ── TOLLS ─────────────────────────────────────────────────────
import tollImg1 from "../../../assets/Images/Tolls/2.jpeg";
import tollImg2 from "../../../assets/Images/Tolls/3.jpg";
import tollImg3 from "../../../assets/Images/Tolls/4.JPG";
import tollImg4 from "../../../assets/Images/Tolls/6.jpeg";
import tollImg5 from "../../../assets/Images/Tolls/8.jpeg";
import tollImg6 from "../../../assets/Images/Tolls/12.webp";

// ── ROADS ─────────────────────────────────────────────────────
import roadImg1 from "../../../assets/Images/Roads/2.jpg";
import roadImg2 from "../../../assets/Images/Roads/3.jpg";
import roadImg3 from "../../../assets/Images/Roads/4.jpg";
import roadImg4 from "../../../assets/Images/Roads/5.jpg";
import roadImg5 from "../../../assets/Images/Roads/7.jpg";
import roadImg6 from "../../../assets/Images/Roads/8.jpg";

// ── PLANNING ──────────────────────────────────────────────────
import planImg1 from "../../../assets/Images/Planning/5.jpeg";
import planImg2 from "../../../assets/Images/Planning/2.jpeg"
import planImg3 from "../../../assets/Images/Planning/3.jpeg"
import planImg4 from "../../../assets/Images/Planning/4.jpeg"
import planImg5 from "../../../assets/Images/Planning/12 (1).jpeg"



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

/* ── Services data ── */
const services = [
  {
    number: "01",
    title: "Toll Management Solutions",
    desc: "We provide efficient, technology-driven toll management solutions aligned with modern systems such as FASTag, ensuring seamless, accurate, and transparent toll collection with enhanced operational efficiency.",
    images: [tollImg1, tollImg2, tollImg3],
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
    icon: "🛣️",
    tags: ["FASTag Integration", "ETC Systems", "Revenue Audit"],
    flip: false,
  },
  {
    number: "02",
    title: "Traffic Flow Optimization",
    desc: "We implement intelligent traffic management systems and real-time monitoring strategies to streamline vehicle movement, reduce congestion, and enhance throughput across toll plazas and highways.",
    images: [tollImg4, tollImg5, roadImg1],
    accent: "#22a05b",
    iconBg: "#e8f5ee",
    icon: "🚦",
    tags: ["ANPR Cameras", "Real-Time Monitoring", "Congestion Control"],
    flip: true,
  },
  {
    number: "03",
    title: "Compliance & Reporting",
    desc: "We ensure strict adherence to regulatory frameworks through robust documentation, audit-ready processes, and transparent reporting systems, enabling accountability and informed decision-making.",
    images: [workImg1, workImg2, planImg1],
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
    icon: "📋",
    tags: ["MCA Compliance", "GST Reporting", "Audit Readiness"],
    flip: false,
  },
  {
    number: "04",
    title: "Workforce Planning & Management",
    desc: "We strategically deploy and manage skilled manpower through structured planning, training, and performance monitoring to ensure efficiency, reliability, and consistent service delivery.",
    images: [workImg3, workImg4, tollImg6],
    accent: "#22a05b",
    iconBg: "#e8f5ee",
    icon: "👷",
    tags: ["Skilled Deployment", "Training Programs", "Performance Tracking"],
    flip: true,
  },
  {
    number: "05",
    title: "Road & Highway Project Support",
    desc: "We provide end-to-end support across planning, execution, and supervision of infrastructure projects, ensuring quality, timely delivery, and adherence to industry standards.",
    images: [roadImg2, roadImg3, roadImg4],
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
    icon: "🏗️",
    tags: ["NHAI Standards", "Project Supervision", "Quality Control"],
    flip: false,
  },
  {
    number: "06",
    title: "Operational & Administrative Support",
    desc: "We manage backend operations, coordination, and administrative processes to ensure seamless workflow, improved efficiency, and strong project control.",
    images: [planImg2, planImg3, planImg4],
    accent: "#22a05b",
    iconBg: "#e8f5ee",
    icon: "📊",
    tags: ["Backend Operations", "Project Coordination", "Process Control"],
    flip: true,
  },
  {
    number: "07",
    title: "Smart Infrastructure",
    desc: "We deliver advanced infrastructure solutions by integrating intelligent systems, automation, and data analytics across highways, toll networks, and urban infrastructure.",
    images: [tollImg5, roadImg1,planImg5],
    accent: "#1a6fc4",
    iconBg: "#e8f1fb",
    icon: "📡",
    tags: ["IoT Integration", "Data Analytics", "Smart Automation"],
    flip: false,
  },
];

/* ── Image mosaic for each service ── */
function ServiceImageBlock({ images }) {
  return (
    <div
      className="grid grid-cols-2 gap-3 h-full"
      style={{ minHeight: "380px" }}
    >
      {/* tall left */}
      <div
        className="row-span-2 rounded-2xl overflow-hidden group"
        style={{ boxShadow: "0 12px 36px rgba(0,0,0,0.13)" }}
      >
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      {/* top right */}
      <div
        className="rounded-2xl overflow-hidden group"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
      >
        <img
          src={images[1]}
          alt=""
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      {/* bottom right */}
      <div
        className="rounded-2xl overflow-hidden group"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
      >
        <img
          src={images[2]}
          alt=""
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [heroRef, heroV] = useReveal(0.05);
  const [activeService, setActiveService] = useState(null);

  return (
    <main className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "72vh", paddingTop: "80px" }}
      >
        <img
          src={roadImg2}
          alt="roads"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 1.6s ease forwards" }}
        />
        {/* stronger overlay so text is always readable */}
        <div className="absolute inset-0 bg-[#050f1a]/70" />
        {/* white wave — pushed down so it never overlaps content */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />

        <div
          ref={heroRef}
          className="relative z-10 flex flex-col justify-center px-8 max-w-6xl mx-auto"
          style={{ paddingTop: "10vh", paddingBottom: "100px" }}
        >
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-white bg-[#22a05b] px-4 py-1.5 rounded-full w-fit mb-6"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            What We Offer
          </span>

          <h1
            className="text-white font-black leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(28px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Our Services
          </h1>

          <p
            className="text-white text-[16px] max-w-xl leading-[1.85] font-medium"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s",
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            Comprehensive infrastructure and toll management solutions — built
            for precision, compliance, and long-term value.
          </p>
        </div>
      </section>

      {/* ════════════════════════════
          SERVICE INDEX PILLS
      ════════════════════════════ */}
      <section className="bg-[#f8fafc] border-b border-[#e8f0fb] py-6 px-8 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {services.map((s) => (
            <a
              key={s.number}
              href={`#service-${s.number}`}
              className="text-[11px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
              style={{
                color: "#0d3a6e",
                borderColor: "#c7ddf7",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0d3a6e";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#0d3a6e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#0d3a6e";
                e.currentTarget.style.borderColor = "#c7ddf7";
              }}
            >
              {s.number}. {s.title.split(" ").slice(0, 2).join(" ")}
            </a>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          SERVICES — alternating layout
      ════════════════════════════ */}
      {services.map((service, idx) => (
        <section
          key={service.number}
          id={`service-${service.number}`}
          className={`py-20 px-8 ${idx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* number + eyebrow */}
            <Reveal direction="up" className="flex items-center gap-4 mb-10">
              <span
                className="text-[56px] font-black leading-none select-none"
                style={{
                  color: "#f0f4f8",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {service.number}
              </span>
              <div>
                <p
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[3px] mb-1"
                  style={{ color: service.accent }}
                >
                  <span
                    className="w-5 h-[2px] rounded"
                    style={{ background: service.accent }}
                  />
                  Our Services
                </p>
                <h2
                  className="text-[#0d3a6e] font-black leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
                >
                  {service.title}
                </h2>
              </div>
            </Reveal>

            {/* image + content */}
            <div
              className={`grid md:grid-cols-2 gap-16 items-center ${service.flip ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
            >
              {/* Image mosaic */}
              <Reveal
                direction={service.flip ? "right" : "left"}
                style={{ minHeight: "380px" }}
              >
                <ServiceImageBlock images={service.images} />
              </Reveal>

              {/* Text */}
              <Reveal direction={service.flip ? "left" : "right"}>
                {/* icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{ background: service.iconBg }}
                >
                  {service.icon}
                </div>

                <p className="text-[#475569] text-[15px] leading-[1.95] mb-7">
                  {service.desc}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-full border"
                      style={{
                        color: service.accent,
                        background:
                          service.accent === "#22a05b" ? "#e8f5ee" : "#e8f1fb",
                        borderColor:
                          service.accent === "#22a05b" ? "#b6e4ca" : "#b5d4f4",
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>

                {/* divider accent */}
                <div
                  className="h-[3px] w-12 rounded-full"
                  style={{ background: service.accent }}
                />
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* ════════════════════════════
          FULL-WIDTH IMAGE STRIP
      ════════════════════════════ */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up" className="text-center mb-12">
            <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
              Projects in Motion
            </p>
            <h2 className="text-[#0d3a6e] font-black text-3xl">
              A Glimpse of Our Work
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[tollImg4, roadImg3, workImg3, roadImg5].map((src, i) => (
              <Reveal
                key={i}
                direction="scale"
                delay={i * 0.09}
                className="rounded-2xl overflow-hidden group"
                style={{
                  height: "200px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.09)",
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
          QUOTE DIVIDER
      ════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ height: "300px" }}>
        <img
          src={roadImg6}
          alt="highway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3a6e]/65 flex items-center justify-center">
          <Reveal direction="up" className="text-center px-8">
            <p
              className="text-white font-black"
              style={{
                fontSize: "clamp(1.3rem, 3.5vw, 2.6rem)",
                lineHeight: 1.3,
                textShadow: "0 2px 16px rgba(0,0,0,0.3)",
              }}
            >
              "Reliable solutions. Compliant execution.
              <br />
              <span style={{ color: "#6BAF45" }}>Lasting infrastructure."</span>
            </p>
          </Reveal>
        </div>
      </div>

    

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to   { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
