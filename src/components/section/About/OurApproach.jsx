import React, { useState } from "react";
import { Search, Layers, Zap, BarChart2, Clock } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Detailed Planning & Requirement Analysis",
    desc: "We begin every project with thorough analysis to understand scope, requirements, and constraints before any execution begins.",
    color: "#3a8fb7",
    rgb: "58,143,183",
  },
  {
    icon: Layers,
    title: "Strategic Resource Allocation",
    desc: "Skilled manpower, technology, and tools are deployed with precision to ensure efficiency and optimal utilisation.",
    color: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: Zap,
    title: "Seamless Execution & Process Management",
    desc: "Our teams execute with structured workflows, minimizing disruptions while maintaining quality at every stage.",
    color: "#3a8fb7",
    rgb: "58,143,183",
  },
  {
    icon: BarChart2,
    title: "Continuous Monitoring & Performance Reporting",
    desc: "Real-time tracking and transparent reporting keep clients informed and operations on track throughout the project lifecycle.",
    color: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: Clock,
    title: "Timely Delivery with Cost Efficiency",
    desc: "We respect deadlines and budgets — delivering results that match commitments without compromising standards.",
    color: "#3a8fb7",
    rgb: "58,143,183",
  },
];

export default function OurApproach() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{ background: "#f0f4f8", padding: "96px 0" }}
    >
      <style>{`
        @keyframes pulse-dot2 { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .appr-card { transition: transform 0.28s ease, border-color 0.28s, background 0.28s, box-shadow 0.28s; }
        .appr-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.07) !important; }
        .step-connector {
          background: linear-gradient(180deg, rgba(58,143,183,0.25) 0%, rgba(107,175,69,0.15) 100%);
        }
      `}</style>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: -150,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,143,183,0.07) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          right: -80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(107,175,69,0.06) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className="font-['Poppins'] text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6baf45] mb-3">
              Our Approach
            </p>
            <h2
              className="font-['Poppins'] font-light text-[#0d1f2d] leading-tight mb-5"
              style={{ fontSize: "clamp(26px,4vw,42px)" }}
            >
              A Structured, Transparent &{" "}
              <span className="italic text-[#6baf45]">Result-Oriented</span>{" "}
              Methodology
            </h2>
            <div
              style={{
                width: 48,
                height: 2,
                background: "linear-gradient(90deg,#3a8fb7,#6baf45)",
                borderRadius: 2,
              }}
            />
          </div>
          <div>
            <p className="text-[#4a5568] text-sm font-light leading-relaxed mb-4">
              We follow a disciplined and process-driven approach to ensure
              every project is delivered with precision, efficiency, and
              reliability.
            </p>
            <p className="text-[#718096] text-sm font-light leading-relaxed">
              From initial planning to final execution, our focus remains on
              optimizing performance while maintaining compliance and quality
              standards.
            </p>
          </div>
        </div>

        {/* Image + Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Image panel */}
          <div className="lg:col-span-2 relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: 480,
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 16px 56px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(0.85)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(240,244,248,0.05) 0%,rgba(13,31,45,0.82) 100%)",
                }}
              />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="font-['Poppins'] font-light text-white leading-snug mb-3"
                  style={{ fontSize: 15 }}
                >
                  This structured methodology allows us to{" "}
                  <span style={{ color: "#7ecbea" }}>minimize risks</span>,
                  improve operational efficiency, and deliver{" "}
                  <span style={{ color: "#6baf45" }}>measurable outcomes</span>.
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#6baf45]"
                    style={{ animation: "pulse-dot2 2s infinite" }}
                  />
                  <span
                    className="font-['Poppins'] text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(107,175,69,0.9)" }}
                  >
                    Process-Driven Delivery
                  </span>
                </div>
              </div>

              {/* Top badge */}
              <div
                className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(13,31,45,0.65)",
                  border: "0.5px solid rgba(107,175,69,0.35)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#6baf45] inline-block"
                  style={{ animation: "pulse-dot2 2s infinite" }}
                />
                <span
                  className="font-['Poppins'] font-medium text-[#6baf45]"
                  style={{ fontSize: 10, letterSpacing: "0.12em" }}
                >
                  OUR METHODOLOGY
                </span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              const isLast = i === steps.length - 1;
              return (
                <div key={i} className="relative flex gap-5">
                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="absolute left-[19px] top-[42px] w-[1px] step-connector"
                      style={{ height: "calc(100% - 12px)" }}
                    />
                  )}

                  {/* Icon circle */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full z-10 mt-1"
                    style={{
                      width: 38,
                      height: 38,
                      background: isActive
                        ? `rgba(${step.rgb},0.12)`
                        : "#ffffff",
                      border: isActive
                        ? `1px solid rgba(${step.rgb},0.35)`
                        : "1px solid rgba(0,0,0,0.1)",
                      boxShadow: isActive
                        ? "none"
                        : "0 2px 8px rgba(0,0,0,0.06)",
                      transition: "all 0.28s",
                    }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      style={{
                        color: isActive ? step.color : "#94a3b8",
                        transition: "color 0.28s",
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="appr-card flex-1 rounded-xl px-5 py-4 mb-3 cursor-default bg-white"
                    style={{
                      border: isActive
                        ? `1px solid rgba(${step.rgb},0.25)`
                        : "1px solid rgba(0,0,0,0.07)",
                      boxShadow: isActive
                        ? `0 8px 32px rgba(${step.rgb},0.10)`
                        : "0 2px 12px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Top accent on active */}
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          background: `linear-gradient(90deg,${step.color},rgba(${step.rgb},0.2))`,
                          borderRadius: "12px 12px 0 0",
                        }}
                      />
                    )}

                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="font-['Poppins'] font-light"
                        style={{ fontSize: 10, color: "rgba(0,0,0,0.18)" }}
                      >
                        0{i + 1}
                      </span>
                      <h3
                        className="font-['Poppins'] font-semibold leading-snug"
                        style={{
                          fontSize: 13,
                          color: isActive ? "#0d1f2d" : "#2d3748",
                          transition: "color 0.28s",
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="font-light leading-relaxed"
                      style={{ fontSize: 12, color: "#718096" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
