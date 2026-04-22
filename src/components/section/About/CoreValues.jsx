import React, { useState } from "react";
import { ShieldCheck, Scale, Award, Leaf, Handshake } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity & Transparency",
    desc: "We operate with honesty, accountability, and ethical business practices in every project.",
    color: "#7ecbea",
    rgb: "126,203,234",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    desc: "We strictly adhere to all legal and regulatory requirements to ensure secure and risk-free operations.",
    color: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    desc: "We focus on efficiency, precision, and continuous improvement to deliver high-quality outcomes.",
    color: "#7ecbea",
    rgb: "126,203,234",
  },
  {
    icon: Leaf,
    title: "Safety & Sustainability",
    desc: "We prioritize safe practices and sustainable solutions across all our operations.",
    color: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: Handshake,
    title: "Client Commitment",
    desc: "We are dedicated to building long-term relationships by delivering consistent value and dependable service.",
    color: "#7ecbea",
    rgb: "126,203,234",
  },
];

export default function CoreValues() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{ background: "#060f1a", padding: "96px 0" }}
    >
      <style>{`
        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(126,203,234,0); }
          50%      { box-shadow: 0 0 18px 2px rgba(126,203,234,0.1); }
        }
        .val-card { transition: transform 0.3s ease, border-color 0.3s, background 0.3s; }
        .val-card:hover { transform: translateY(-5px); }
        .val-card-active { animation: pulse-glow 2.5s infinite; }
      `}</style>

      {/* BG pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: -160,
          right: -80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,143,183,0.09) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          bottom: -100,
          left: -60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(107,175,69,0.07) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-['Poppins'] text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6baf45] mb-3">
              Core Values
            </p>
            <h2
              className="font-['Poppins'] font-light text-[#f0ece4] leading-tight mb-5"
              style={{ fontSize: "clamp(26px,4vw,42px)" }}
            >
              The Principles That{" "}
              <span className="italic text-[#7ecbea]">Define Us</span>
            </h2>
            <div
              style={{
                width: 48,
                height: 2,
                background: "linear-gradient(90deg,#3a8fb7,#6baf45)",
                borderRadius: 2,
                marginBottom: 20,
              }}
            />
            <p className="text-[rgba(240,236,228,0.5)] text-sm font-light leading-relaxed">
              Our values are not just words — they are the foundation of every
              decision we make, every project we deliver, and every relationship
              we build.
            </p>
          </div>

          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: 260,
              border: "0.5px solid rgba(255,255,255,0.07)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Team values"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.55) saturate(0.75)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg,rgba(6,15,26,0.5) 0%,rgba(6,15,26,0.2) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="font-['Poppins'] font-light text-center px-8 leading-snug"
                style={{ fontSize: 17, color: "rgba(240,236,228,0.85)" }}
              >
                "Built on trust.
                <br />
                <span style={{ color: "#7ecbea" }}>
                  Delivered with integrity.
                </span>
                "
              </p>
            </div>
          </div>
        </div>

        {/* Values grid — 5 cards, asymmetric: 3 + 2 */}
        <div className="flex flex-col gap-5">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.slice(0, 3).map((val, i) => {
              const Icon = val.icon;
              const isHov = hovered === i;
              return (
                <div
                  key={i}
                  className={`val-card relative rounded-2xl p-6 overflow-hidden cursor-default ${isHov ? "val-card-active" : ""}`}
                  style={{
                    border: isHov
                      ? `0.5px solid rgba(${val.rgb},0.22)`
                      : "0.5px solid rgba(255,255,255,0.06)",
                    background: isHov
                      ? `rgba(${val.rgb},0.05)`
                      : "rgba(255,255,255,0.025)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* top shimmer */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: `linear-gradient(90deg,transparent,rgba(${val.rgb},0.3),transparent)`,
                      opacity: isHov ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />

                  {/* number */}
                  <div
                    className="absolute top-4 right-5 font-['Poppins'] font-light"
                    style={{
                      fontSize: 10,
                      color: "rgba(240,236,228,0.1)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    0{i + 1}
                  </div>

                  <div
                    className="flex items-center justify-center rounded-xl mb-4"
                    style={{
                      width: 44,
                      height: 44,
                      background: `rgba(${val.rgb},0.08)`,
                      border: `0.5px solid rgba(${val.rgb},0.15)`,
                      transition: "all 0.3s",
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      style={{ color: val.color, opacity: 0.8 }}
                    />
                  </div>

                  <h3
                    className="font-['Poppins'] font-medium text-[#f0ece4] mb-2 leading-snug"
                    style={{ fontSize: 13 }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-[rgba(240,236,228,0.48)] font-light leading-relaxed"
                    style={{ fontSize: 12 }}
                  >
                    {val.desc}
                  </p>

                  {/* bottom accent line */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "20%",
                      right: "20%",
                      height: 1,
                      background: `linear-gradient(90deg,transparent,rgba(${val.rgb},0.2),transparent)`,
                      opacity: isHov ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Row 2: 2 wider cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.slice(3).map((val, j) => {
              const i = j + 3;
              const Icon = val.icon;
              const isHov = hovered === i;
              return (
                <div
                  key={i}
                  className={`val-card relative rounded-2xl overflow-hidden cursor-default ${isHov ? "val-card-active" : ""}`}
                  style={{
                    border: isHov
                      ? `0.5px solid rgba(${val.rgb},0.22)`
                      : "0.5px solid rgba(255,255,255,0.06)",
                    background: isHov
                      ? `rgba(${val.rgb},0.05)`
                      : "rgba(255,255,255,0.025)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: `linear-gradient(90deg,transparent,rgba(${val.rgb},0.3),transparent)`,
                      opacity: isHov ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />

                  <div className="flex items-center gap-6 p-6">
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0"
                      style={{
                        width: 52,
                        height: 52,
                        background: `rgba(${val.rgb},0.08)`,
                        border: `0.5px solid rgba(${val.rgb},0.15)`,
                      }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        style={{ color: val.color, opacity: 0.8 }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-['Poppins'] font-medium text-[#f0ece4] mb-1.5 leading-snug"
                        style={{ fontSize: 14 }}
                      >
                        {val.title}
                      </h3>
                      <p
                        className="text-[rgba(240,236,228,0.48)] font-light leading-relaxed"
                        style={{ fontSize: 12.5 }}
                      >
                        {val.desc}
                      </p>
                    </div>
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
