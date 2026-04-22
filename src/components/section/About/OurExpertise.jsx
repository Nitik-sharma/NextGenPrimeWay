import React, { useState, useEffect } from "react";
import {
  RadioTower,
  TrendingUp,
  ClipboardCheck,
  Users,
  HardHat,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import image1 from "../../../assets/Images/pic14.jpeg";
import image2 from "../../../assets/Images/pic5.jpeg";
import image3 from "../../../assets/Images/pic16.jpeg";
import image4 from "../../../assets/Images/pic1.jpeg";

const images = [
  { src: image1, caption: "Toll Operations" },
  { src: image2, caption: "Highway Infrastructure" },
  { src: image3, caption: "Project Execution" },
  { src: image4, caption: "Smart Planning" },
];

const expertiseItems = [
  { icon: RadioTower, label: "Toll Collection & Operations Management" },
  { icon: TrendingUp, label: "Traffic Flow Optimization & System Efficiency" },
  {
    icon: ClipboardCheck,
    label: "Regulatory Compliance & Performance Reporting",
  },
  { icon: Users, label: "Workforce Planning & Resource Deployment" },
  { icon: HardHat, label: "Road & Highway Project Execution & Supervision" },
];

export default function OurExpertise() {
  const [active, setActive] = useState(0);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo("next"), 3500);
    return () => clearInterval(timer);
  }, [current, paused]);

  const goTo = (dir, idx = null) => {
    if (animating) return;
    const next =
      idx !== null
        ? idx
        : dir === "next"
          ? (current + 1) % images.length
          : (current - 1 + images.length) % images.length;
    if (next === current) return;
    setDirection(dir === "next" || idx > current ? "next" : "prev");
    setPrev(current);
    setAnimating(true);
    setCurrent(next);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 600);
  };

  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{
        // Rich mid-tone: deep slate-teal, not fully dark, not light
        background:
          "linear-gradient(145deg, #1a2e3b 0%, #1e3a34 45%, #162d38 100%)",
        padding: "96px 0",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideInNext {
          from { opacity:0; transform:translateX(40px) scale(0.98); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        @keyframes slideInPrev {
          from { opacity:0; transform:translateX(-40px) scale(0.98); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        @keyframes slideOutNext {
          from { opacity:1; transform:translateX(0) scale(1); }
          to   { opacity:0; transform:translateX(-40px) scale(0.98); }
        }
        @keyframes slideOutPrev {
          from { opacity:1; transform:translateX(0) scale(1); }
          to   { opacity:0; transform:translateX(40px) scale(0.98); }
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes progress  { from{width:0%} to{width:100%} }
        .exp-fade  { animation: fadeUp 0.6s ease both; }
        .exp-item  { transition: all 0.25s ease; cursor: pointer; }
        .exp-item:hover { background: rgba(107,175,69,0.07) !important; }
        .img-enter-next { animation: slideInNext 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .img-enter-prev { animation: slideInPrev 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .img-exit-next  { animation: slideOutNext 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .img-exit-prev  { animation: slideOutPrev 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .progress-bar   { animation: progress 3.5s linear; }
        .nav-btn { transition: all 0.2s ease; }
        .nav-btn:hover { background: rgba(255,255,255,0.15) !important; }
      `}</style>

      {/* Mesh texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Color orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 560,
          height: 560,
          top: -160,
          right: -100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(107,175,69,0.12) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(58,143,183,0.10) 0%,transparent 70%)",
        }}
      />
      {/* Center warm glow */}
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
            "radial-gradient(ellipse,rgba(107,175,69,0.06) 0%,transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="max-w-xl mb-16 exp-fade">
          <p className="font-['Poppins'] text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6baf45] mb-3">
            Our Expertise
          </p>
          <h2
            className="font-['Poppins'] font-light text-white leading-tight mb-5"
            style={{ fontSize: "clamp(26px,4vw,42px)" }}
          >
            Delivering Precision, Efficiency &{" "}
            <span className="italic text-[#6baf45]">Compliance</span> Across
            Every Project
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
          <p className="text-[rgba(255,255,255,0.5)] text-sm font-light leading-relaxed">
            At NextGen PrimeWay Solutions LLP, our expertise lies in combining
            industry knowledge, structured processes, and modern technology to
            deliver reliable and efficient solutions.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[rgba(255,255,255,0.3)] text-[11px] tracking-[0.18em] uppercase font-['Poppins'] mb-5">
              Key Areas of Expertise
            </p>
            <div className="flex flex-col gap-2">
              {expertiseItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = active === i;
                return (
                  <div
                    key={i}
                    className="exp-item flex items-center gap-4 px-5 py-4 rounded-xl"
                    style={{
                      border: isActive
                        ? "0.5px solid rgba(107,175,69,0.3)"
                        : "0.5px solid rgba(255,255,255,0.07)",
                      background: isActive
                        ? "rgba(107,175,69,0.08)"
                        : "rgba(255,255,255,0.03)",
                    }}
                    onMouseEnter={() => setActive(i)}
                  >
                    <div
                      className="flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{
                        width: 38,
                        height: 38,
                        background: isActive
                          ? "rgba(107,175,69,0.12)"
                          : "rgba(255,255,255,0.04)",
                        border: isActive
                          ? "0.5px solid rgba(107,175,69,0.25)"
                          : "0.5px solid rgba(255,255,255,0.08)",
                        transition: "all 0.25s",
                      }}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        style={{
                          color: isActive ? "#6baf45" : "rgba(255,255,255,0.4)",
                          transition: "color 0.25s",
                        }}
                      />
                    </div>
                    <span
                      className="text-sm font-light leading-snug"
                      style={{
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                        transition: "color 0.25s",
                      }}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <CheckCircle2
                        size={14}
                        strokeWidth={1.5}
                        className="ml-auto flex-shrink-0"
                        style={{ color: "#6baf45", opacity: 0.9 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[rgba(255,255,255,0.42)] text-sm font-light leading-relaxed mt-8 pl-1">
              Our ability to integrate{" "}
              <span style={{ color: "#6baf45" }}>
                people, processes, and technology
              </span>{" "}
              enables us to deliver consistent results while maintaining high
              standards of quality and accountability.
            </p>
          </div>

          {/* RIGHT — carousel */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: 420,
                border: "0.5px solid rgba(255,255,255,0.1)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              }}
            >
              {prev !== null && animating && (
                <img
                  key={`exit-${prev}`}
                  src={images[prev].src}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover ${direction === "next" ? "img-exit-next" : "img-exit-prev"}`}
                  style={{
                    filter: "brightness(0.72) saturate(0.85)",
                    zIndex: 1,
                  }}
                />
              )}
              <img
                key={`enter-${current}`}
                src={images[current].src}
                alt="Infrastructure"
                className={`absolute inset-0 w-full h-full object-cover ${animating ? (direction === "next" ? "img-enter-next" : "img-enter-prev") : ""}`}
                style={{ filter: "brightness(0.72) saturate(0.85)", zIndex: 2 }}
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(26,46,59,0.5) 0%,rgba(26,46,59,0.1) 60%,rgba(26,46,59,0.6) 100%)",
                }}
              />

              {/* Top bar */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(26,46,59,0.75)",
                    border: "0.5px solid rgba(107,175,69,0.35)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#6baf45] inline-block"
                    style={{ animation: "pulse-dot 2s infinite" }}
                  />
                  <span
                    className="text-[#6baf45] font-['Poppins'] font-medium"
                    style={{ fontSize: 10, letterSpacing: "0.12em" }}
                  >
                    ACTIVE OPERATIONS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[ChevronLeft, ChevronRight].map((Btn, bi) => (
                    <button
                      key={bi}
                      className="nav-btn flex items-center justify-center rounded-full"
                      style={{
                        width: 30,
                        height: 30,
                        background: "rgba(26,46,59,0.7)",
                        border: "0.5px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        cursor: "pointer",
                      }}
                      onClick={() => goTo(bi === 0 ? "prev" : "next")}
                    >
                      <Btn
                        size={14}
                        strokeWidth={2}
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-[72px] left-6 z-20">
                <p
                  className="font-['Poppins'] font-light text-[rgba(255,255,255,0.55)]"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {images[current].caption}
                </p>
              </div>

              {/* Stat cards */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3 z-20">
                {[
                  { value: "100%", label: "Regulatory Compliance" },
                  { value: "6+", label: "Service Domains" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex-1 rounded-xl px-4 py-3"
                    style={{
                      background: "rgba(26,46,59,0.8)",
                      border: "0.5px solid rgba(107,175,69,0.15)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className="font-['Poppins'] font-light text-[#6baf45]"
                      style={{ fontSize: 22 }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-[rgba(255,255,255,0.45)] font-light mt-0.5"
                      style={{ fontSize: 11 }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i > current ? "next" : "prev", i)}
                  className="relative flex-1 rounded-lg overflow-hidden"
                  style={{
                    height: 52,
                    padding: 0,
                    background: "none",
                    cursor: "pointer",
                    border:
                      current === i
                        ? "1px solid rgba(107,175,69,0.55)"
                        : "0.5px solid rgba(255,255,255,0.08)",
                    transition: "border-color 0.3s",
                  }}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        current === i
                          ? "brightness(0.9)"
                          : "brightness(0.4) saturate(0.5)",
                      transition: "filter 0.3s",
                    }}
                  />
                  {current === i && !paused && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-[#6baf45] progress-bar"
                      key={`prog-${current}`}
                      style={{ borderRadius: 1 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i > current ? "next" : "prev", i)}
                  style={{
                    width: current === i ? 20 : 5,
                    height: 5,
                    borderRadius: 3,
                    background:
                      current === i ? "#6baf45" : "rgba(255,255,255,0.18)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Corner accent */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl pointer-events-none"
              style={{
                border: "0.5px solid rgba(107,175,69,0.12)",
                background: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
