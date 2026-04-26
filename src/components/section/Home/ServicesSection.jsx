import React from "react";

// ── Replace these with your actual image imports ──────────────
import tollImg from "../../../assets/Images/Tolls/8.jpeg";
import roadImg from "../../../assets/Images/Roads/14.jpg";
import smartImg from "../../../assets/Images/Planning/12 (1).jpeg";
// ─────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: "Toll Management",
    description:
      "Efficient toll collection and management solutions tailored for seamless operations and revenue optimization.",
    accent: "#1a6fc4",
    badge: null,
    image: tollImg,
    alt: "Toll management operations",
  },
  {
    id: 2,
    title: "Road & Highway Projects",
    description:
      "Planning, developing, and maintaining state-of-the-art roads, highways, and bridges.",
    accent: "#22a05b",
    badge: "Core Service",
    image: roadImg,
    alt: "Road and highway construction",
  },
  {
    id: 3,
    title: "Smart Infrastructure",
    description:
      "Innovative technology integration for smart cities, highway, and toll systems.",
    accent: "#1a6fc4",
    badge: null,
    image: smartImg,
    alt: "Smart infrastructure technology",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-[72px] px-8 bg-gradient-to-br from-[#0a2a4a] to-[#0d3a28] font-['Inter']">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-[#22a05b]/10 rounded-full blur-3xl top-[80%] left-[20%]" />
        <div className="absolute w-[400px] h-[400px] bg-[#1a6fc4]/10 rounded-full blur-3xl top-[20%] left-[80%]" />
      </div>

      {/* header */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-2xl font-semibold tracking-[2.5px] uppercase text-[#22a05b] mb-3 font-['Poppins']">
          What We Offer
        </p>
        <h2 className="text-[32px] font-bold text-white leading-tight font-['Poppins'] max-md:text-[24px]">
          Our Core Services
        </h2>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-6 max-w-[1000px] mx-auto max-md:grid-cols-1 relative z-10">
        {services.map((service, index) => {
          const isGreen = service.accent === "#22a05b";

          return (
            <div
              key={service.id}
              className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border-t-[4px] transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)]
              ${service.badge ? "shadow-[0_8px_32px_rgba(34,160,91,0.18)]" : ""}
              animate-[fadeUp_0.5s_ease_forwards] opacity-0`}
              style={{
                borderTopColor: service.accent,
                animationDelay: `${0.1 + index * 0.12}s`,
              }}
            >
              {/* badge */}
              

              {/* image */}
              <div className="relative w-full h-[180px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* subtle colour tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: service.accent }}
                />
              </div>

              {/* text content */}
              <div className="flex flex-col items-center text-center px-7 py-6">
                {/* accent line */}
                <span
                  className="w-10 h-[3px] rounded-full mb-4"
                  style={{ background: service.accent }}
                />

                {/* title */}
                <h3
                  className="text-[17px] font-bold mb-3 font-['Poppins']"
                  style={{ color: isGreen ? service.accent : "#0d3a6e" }}
                >
                  {service.title}
                </h3>

                {/* description */}
                <p className="text-[14px] text-[#4a5568] leading-[1.7]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
