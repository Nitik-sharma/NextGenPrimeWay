import React from "react";
import { ShieldCheck, Cpu, LayoutList, Users } from "lucide-react";

const cards = [
  { label: "Legally Registered & Compliant", icon: ShieldCheck },
  { label: "Technology-Driven Operations", icon: Cpu },
  { label: "Structured & Process-Oriented", icon: LayoutList },
  { label: "Client-Focused Execution", icon: Users },
];

const WhoWeAre = () => {
  return (
    <section
      className="relative py-20 px-6 sm:px-12 overflow-hidden min-h-[560px] font-['Inter']"
      style={{
        background:
          "linear-gradient(135deg, #0a1f2e 0%, #0d3040 40%, #0a4a3a 100%)",
      }}
    >
      {/* Orbs */}
      <div
        className="absolute w-[480px] h-[480px] rounded-full -top-28 -right-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(58,183,143,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[320px] h-[320px] rounded-full -bottom-16 left-16 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(107,175,69,0.10) 0%, transparent 70%)",
        }}
      />
      {/* Extra center glow for depth */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(13,80,64,0.4) 0%, transparent 70%)",
        }}
      />

      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .wwa-card { transition: border-color 0.3s, background 0.3s, transform 0.3s; }
        .wwa-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(107,175,69,0.4), transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .wwa-card:hover { border-color: rgba(107,175,69,0.25) !important; background: rgba(107,175,69,0.06) !important; transform: translateY(-3px); }
        .wwa-card:hover::before { opacity:1; }
        .pulse-dot { animation: pulse-dot 2s infinite; }
      `}</style>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#6baf45] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3 font-['Poppins']">
          Who We Are
        </p>

        {/* Headline */}
        <h2
          className="font-['Poppins'] font-light text-white leading-tight mb-5"
          style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
        >
          A Trusted Partner in <br />
          <span className="italic text-[#6baf45]">
            Infrastructure & Toll Management
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-[rgba(255,255,255,0.55)] text-sm font-light leading-relaxed max-w-[440px] mb-7">
          NextGen PrimeWay Solutions LLP is a legally registered Limited
          Liability Partnership under the Ministry of Corporate Affairs,
          Government of India — operating with full compliance, transparency,
          and precision.
        </p>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border border-[rgba(107,175,69,0.35)] rounded-full px-3 py-1"
          style={{ background: "rgba(107,175,69,0.08)" }}
        >
          <span className="pulse-dot w-[5px] h-[5px] rounded-full bg-[#6baf45] inline-block" />
          <span className="text-[11px] text-[rgba(107,175,69,0.95)] tracking-wide font-['Poppins']">
            Registered · MCA · Government of India
          </span>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 items-start">
          {/* Left */}
          <div>
            <p className="text-[rgba(255,255,255,0.65)] text-sm font-light leading-[1.85] mb-5">
              Our organization is built on a strong legal and operational
              foundation, enabling us to deliver services with professionalism,
              accountability, and precision. We specialize in toll management
              systems and infrastructure support services aligned with modern
              industry standards.
            </p>

            <div
              className="w-full h-px mb-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(107,175,69,0.4), rgba(58,143,183,0.2), transparent)",
              }}
            />

            <p className="text-[rgba(255,255,255,0.55)] text-sm font-light leading-[1.85]">
              By combining technology-driven processes with skilled manpower, we
              ensure efficient execution, regulatory compliance, and long-term
              value creation for every project we undertake.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-8">
              {[
                { value: "100%", label: "Compliant" },
                { value: "LLP", label: "Registered" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-[#6baf45] font-['Poppins'] font-light text-3xl leading-none">
                    {value}
                  </div>
                  <div className="text-[rgba(255,255,255,0.38)] text-[11px] uppercase tracking-widest mt-1 font-['Inter']">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map(({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="wwa-card relative rounded-xl p-[18px] overflow-hidden"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: "#6baf45", opacity: 0.85, marginBottom: 12 }}
                />
                <p className="text-[rgba(255,255,255,0.82)] text-[12.5px] font-normal leading-snug tracking-wide font-['Inter']">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
