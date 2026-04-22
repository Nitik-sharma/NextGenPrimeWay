import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import backgroundImage from "../../../assets/Images/pic5.jpeg"

export default function CtaSection() {
  const [hovBtn, setHovBtn] = useState(false);
  const [hovBtn2, setHovBtn2] = useState(false);

  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{ padding: "96px 0 80px" }}
    >
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(107,175,69,0.4); }
          70%  { box-shadow: 0 0 0 12px rgba(107,175,69,0); }
          100% { box-shadow: 0 0 0 0 rgba(107,175,69,0); }
        }
        .cta-float  { animation: float 5s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 2s infinite; }
        .cta-btn    { transition: all 0.3s ease; }
        .cta-btn:hover { transform: translateY(-2px); }
      `}</style>

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Highway infrastructure"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.28) saturate(0.7) contrast(1.05)" }}
        />
        {/* Multi-stop overlay: dark top & bottom, semi-transparent middle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,19,31,0.92) 0%, rgba(7,19,31,0.55) 35%, rgba(7,19,31,0.55) 65%, rgba(7,19,31,0.95) 100%)",
          }}
        />
        {/* Centre teal glow sitting above the image */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 800,
            height: 500,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(58,143,183,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Floating rings */}
      <div
        className="absolute cta-float pointer-events-none"
        style={{
          width: 300,
          height: 300,
          border: "0.5px solid rgba(107,175,69,0.1)",
          borderRadius: "50%",
          top: "8%",
          right: "-70px",
        }}
      />
      <div
        className="absolute cta-float pointer-events-none"
        style={{
          width: 200,
          height: 200,
          border: "0.5px solid rgba(126,203,234,0.08)",
          borderRadius: "50%",
          bottom: "12%",
          left: "-50px",
          animationDelay: "2s",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
          style={{
            border: "0.5px solid rgba(107,175,69,0.35)",
            background: "rgba(107,175,69,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="pulse-ring w-2 h-2 rounded-full bg-[#6baf45] inline-block" />
          <span className="font-['Poppins'] text-[10px] font-semibold tracking-[0.18em] uppercase text-[rgba(107,175,69,0.9)]">
            Ready to Partner
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-['Poppins'] font-light text-white leading-tight mb-6 mx-auto"
          style={{ fontSize: "clamp(28px,5vw,52px)", maxWidth: 720 }}
        >
          Let's Build Reliable{" "}
          <span className="italic text-[#6baf45]">Infrastructure</span> Together
        </h2>

        {/* Rule */}
        <div
          className="mx-auto mb-8"
          style={{
            width: 64,
            height: 2,
            background: "linear-gradient(90deg,#3a8fb7,#6baf45)",
            borderRadius: 2,
          }}
        />

        {/* Body */}
        <p
          className="text-[rgba(255,255,255,0.58)] font-light leading-relaxed mx-auto mb-4"
          style={{ fontSize: 14, maxWidth: 600 }}
        >
          At NextGen PrimeWay Solutions LLP, we are committed to delivering
          solutions that are not only efficient and compliant but also built for
          long-term success.
        </p>
        <p
          className="text-[rgba(255,255,255,0.42)] font-light leading-relaxed mx-auto mb-14"
          style={{ fontSize: 13.5, maxWidth: 560 }}
        >
          Whether it's toll management or infrastructure support, our team is
          ready to partner with you to create reliable, scalable, and
          high-performing solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            className="cta-btn flex items-center gap-3 px-8 py-4 rounded-xl font-['Poppins'] font-semibold"
            style={{
              background: hovBtn
                ? "linear-gradient(135deg,#4aa0c4,#5a9e38)"
                : "linear-gradient(135deg,#3a8fb7,#6baf45)",
              color: "#07131f",
              fontSize: 13,
              letterSpacing: "0.03em",
              border: "none",
              cursor: "pointer",
              boxShadow: hovBtn
                ? "0 10px 32px rgba(58,143,183,0.35)"
                : "0 4px 20px rgba(58,143,183,0.25)",
            }}
            onMouseEnter={() => setHovBtn(true)}
            onMouseLeave={() => setHovBtn(false)}
          >
            Connect With Us
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>

          <button
            className="cta-btn flex items-center gap-3 px-8 py-4 rounded-xl font-['Poppins'] font-medium"
            style={{
              background: hovBtn2
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.85)",
              fontSize: 13,
              letterSpacing: "0.02em",
              border: "0.5px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={() => setHovBtn2(true)}
            onMouseLeave={() => setHovBtn2(false)}
          >
            Learn More
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "0.5px",
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)",
            marginBottom: 36,
          }}
        />

        
      </div>
    </section>
  );
}
