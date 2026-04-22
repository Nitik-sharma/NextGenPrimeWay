import React from "react";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{ background: "#f0f4f8", padding: "96px 0" }}
    >
      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .mv-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .mv-card:hover { transform: translateY(-5px); box-shadow: 0 24px 64px rgba(0,0,0,0.10) !important; }
      `}</style>

      {/* Soft blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: -200,
          right: -150,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,143,183,0.08) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: -120,
          left: -80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(107,175,69,0.07) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-['Poppins'] text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6baf45] mb-3">
            Mission & Vision
          </p>
          <h2
            className="font-['Poppins'] font-light text-[#0d1f2d] leading-tight mb-4"
            style={{ fontSize: "clamp(26px,4vw,42px)" }}
          >
            Purpose That Drives{" "}
            <span className="italic text-[#6baf45]">Every Decision</span>
          </h2>
          <div
            style={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg,#6baf45,#a8d878)",
              borderRadius: 2,
              margin: "0 auto",
            }}
          />
        </div>
        {/* Cards row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ── Mission ── */}
          <div
            className="mv-card rounded-2xl overflow-hidden bg-white relative"
            style={{
              boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
              border: "1px solid rgba(58,143,183,0.1)",
            }}
          >
            {/* Top accent bar */}
            <div
              style={{
                height: 4,
                background: "linear-gradient(90deg,#3a8fb7,#7ecbea)",
              }}
            />

            <div className="p-8">
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(58,143,183,0.08)",
                    border: "1px solid rgba(58,143,183,0.15)",
                  }}
                >
                  <Target
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: "#3a8fb7" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-['Poppins'] font-semibold text-[#0d1f2d]"
                    style={{ fontSize: 20 }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="text-[#3a8fb7] font-['Poppins']"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    What We Deliver
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.06)",
                  marginBottom: 20,
                }}
              />

              {/* Text */}
              <p
                className="text-[#4a5568] font-light leading-relaxed mb-6"
                style={{ fontSize: 14 }}
              >
                To deliver{" "}
                <span style={{ color: "#3a8fb7", fontWeight: 500 }}>
                  reliable, compliant, and technology-driven solutions
                </span>{" "}
                in toll management and infrastructure services, enabling
                efficient operations and contributing to the development of
                modern transportation systems.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Reliable", "Compliant", "Technology-Driven"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full font-['Poppins'] font-medium"
                    style={{
                      fontSize: 11,
                      background: "rgba(58,143,183,0.08)",
                      color: "#3a8fb7",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Vision ── */}
          <div
            className="mv-card rounded-2xl overflow-hidden bg-white relative"
            style={{
              boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
              border: "1px solid rgba(107,175,69,0.12)",
            }}
          >
            {/* Top accent bar */}
            <div
              style={{
                height: 4,
                background: "linear-gradient(90deg,#6baf45,#a8d878)",
              }}
            />

            <div className="p-8">
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(107,175,69,0.08)",
                    border: "1px solid rgba(107,175,69,0.18)",
                  }}
                >
                  <Eye
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: "#6baf45" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-['Poppins'] font-semibold text-[#0d1f2d]"
                    style={{ fontSize: 20 }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="text-[#6baf45] font-['Poppins']"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Where We're Headed
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,0,0,0.06)",
                  marginBottom: 20,
                }}
              />

              {/* Text */}
              <p
                className="text-[#4a5568] font-light leading-relaxed mb-6"
                style={{ fontSize: 14 }}
              >
                To become a{" "}
                <span style={{ color: "#6baf45", fontWeight: 500 }}>
                  trusted and leading service provider
                </span>{" "}
                in toll management and infrastructure support by consistently
                delivering excellence, maintaining strong compliance standards,
                and building long-term partnerships.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Excellence", "Long-term Partnerships", "Leadership"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-['Poppins'] font-medium"
                      style={{
                        fontSize: 11,
                        background: "rgba(107,175,69,0.08)",
                        color: "#6baf45",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote strip */}
        <div
          className="rounded-2xl px-8 py-5 bg-white flex flex-col sm:flex-row sm:items-center gap-4"
          style={{
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}
        >
          {/* Left gradient rule */}
          <div
            className="flex-shrink-0 hidden sm:block w-[3px] self-stretch rounded-full"
            style={{ background: "linear-gradient(180deg,#3a8fb7,#6baf45)" }}
          />

          <p
            className="font-['Poppins'] font-light text-[#4a5568] flex-1 leading-relaxed sm:pl-5"
            style={{ fontSize: 14 }}
          >
            Rooted in purpose. Driven by results. Building infrastructure that{" "}
            <span style={{ color: "#3a8fb7", fontWeight: 500 }}>
              serves the nation
            </span>
            .
          </p>

          <div
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full self-start sm:self-auto"
            style={{
              border: "1px solid rgba(107,175,69,0.2)",
              background: "rgba(107,175,69,0.05)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#6baf45] inline-block"
              style={{ animation: "pulse-dot 2s infinite" }}
            />
            <span className="font-['Poppins'] text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6baf45]">
              NextGen PrimeWay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
