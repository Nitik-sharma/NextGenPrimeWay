import React, { useState } from "react";
import {
  Radio,
  TrendingUp,
  ClipboardCheck,
  Users,
  Construction,
  Settings,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Toll Management Solutions",
    description:
      "We deliver efficient and technology-driven toll operations aligned with modern systems such as FASTag, ensuring smooth and accurate toll collection.",
    benefit:
      "Improved traffic flow, reduced congestion, and enhanced revenue efficiency.",
    accent: "#3a8fb7",
    rgb: "58,143,183",
  },
  {
    icon: TrendingUp,
    title: "Traffic Flow Optimization",
    description:
      "We implement structured systems and monitoring strategies to manage and optimize vehicle movement across toll plazas and highways.",
    benefit:
      "Faster processing, reduced wait times, and better user experience.",
    accent: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Reporting",
    description:
      "We ensure all operations meet regulatory standards with accurate documentation and transparent reporting systems.",
    benefit:
      "Risk-free operations and full adherence to government regulations.",
    accent: "#3a8fb7",
    rgb: "58,143,183",
  },
  {
    icon: Users,
    title: "Workforce Planning & Management",
    description:
      "We deploy skilled manpower and manage workforce operations to maintain efficiency and reliability in project execution.",
    benefit: "Consistent performance and smooth day-to-day operations.",
    accent: "#6baf45",
    rgb: "107,175,69",
  },
  {
    icon: Construction,
    title: "Road & Highway Project Support",
    description:
      "We provide comprehensive support for infrastructure projects, including planning, execution, and supervision.",
    benefit:
      "Timely project delivery with high standards of safety and quality.",
    accent: "#3a8fb7",
    rgb: "58,143,183",
  },
  {
    icon: Settings,
    title: "Operational & Administrative Support",
    description:
      "We assist in managing backend processes, coordination, and overall project operations to ensure smooth workflow.",
    benefit: "Increased productivity and streamlined project management.",
    accent: "#6baf45",
    rgb: "107,175,69",
  },
];

const WhatWeDo = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative overflow-hidden font-['Inter']"
      style={{ background: "#f0f4f8", padding: "88px 48px 100px" }}
    >
      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .pulse-dot { animation: pulse-dot 2s infinite; }
        .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(0,0,0,0.10) !important; }
      `}</style>

      {/* Soft blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: -180,
          left: -120,
          background:
            "radial-gradient(circle,rgba(58,143,183,0.08) 0%,transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          right: -60,
          background:
            "radial-gradient(circle,rgba(107,175,69,0.07) 0%,transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#6baf45] text-2xl font-semibold tracking-[0.22em] uppercase mb-3 font-['Poppins']">
            What We Do
          </p>
          <h2
            className="font-['Poppins'] font-light text-[#0d1f2d] leading-tight mb-6"
            style={{ fontSize: "clamp(26px,4vw,42px)" }}
          >
            Delivering Efficient, Compliant &{" "}
            <span className="italic text-[#6baf45]">Technology-Driven</span>{" "}
            Infrastructure Solutions
          </h2>
          <div
            className="mb-6"
            style={{
              width: 56,
              height: 2,
              background: "linear-gradient(90deg,#3a8fb7,#6baf45)",
              borderRadius: 2,
            }}
          />
          <p className="text-[#4a5568] text-sm font-light leading-relaxed">
            At NextGen PrimeWay Solutions LLP, we specialize in providing
            end-to-end solutions in toll management and road & highway
            infrastructure support. Our services are designed to ensure seamless
            operations, regulatory compliance, and optimized performance across
            every stage of a project.
          </p>
        </div>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="pulse-dot w-[5px] h-[5px] rounded-full bg-[#6baf45]" />
          <span className="text-[#6baf45] text-[11px] tracking-[0.18em] uppercase font-['Poppins'] font-semibold">
            Core Services
          </span>
          <div
            className="flex-1"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(107,175,69,0.25),transparent)",
            }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={i}
                className="service-card relative rounded-2xl p-6 overflow-hidden cursor-default bg-white"
                style={{
                  border: isHovered
                    ? `1px solid rgba(${service.rgb},0.3)`
                    : "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top accent bar on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${service.accent}, rgba(${service.rgb},0.3))`,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s",
                    borderRadius: "12px 12px 0 0",
                  }}
                />

                {/* Index number */}
                <div
                  className="absolute top-5 right-5 font-['Poppins'] font-light"
                  style={{
                    fontSize: 11,
                    color: "rgba(0,0,0,0.1)",
                    letterSpacing: "0.05em",
                  }}
                >
                  0{i + 1}
                </div>

                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-xl mb-5"
                  style={{
                    width: 44,
                    height: 44,
                    background: `rgba(${service.rgb},0.08)`,
                    border: `1px solid rgba(${service.rgb},0.15)`,
                  }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    style={{ color: service.accent }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-['Poppins'] font-semibold text-[#0d1f2d] mb-3 leading-snug"
                  style={{ fontSize: 14 }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#4a5568] font-light leading-relaxed mb-4"
                  style={{ fontSize: 12.5 }}
                >
                  {service.description}
                </p>

                {/* Benefit box */}
                <div
                  className="flex items-start gap-2 rounded-xl p-3"
                  style={{
                    background: `rgba(${service.rgb},0.06)`,
                    border: `1px solid rgba(${service.rgb},0.12)`,
                  }}
                >
                  <ChevronRight
                    size={12}
                    strokeWidth={2}
                    style={{
                      color: service.accent,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className="font-light leading-relaxed"
                    style={{ fontSize: 11.5, color: service.accent }}
                  >
                    {service.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing strip */}
        <div
          className="relative rounded-2xl p-8 overflow-hidden bg-white"
          style={{
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-6 bottom-6 rounded-full"
            style={{
              width: 3,
              background: "linear-gradient(180deg,#3a8fb7,#6baf45)",
            }}
          />

          <div className="pl-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3 font-['Poppins'] text-[#6baf45]">
              Our Commitment
            </p>
            <p
              className="font-['Poppins'] font-light text-[#0d1f2d] leading-relaxed"
              style={{ fontSize: "clamp(14px,2vw,18px)", maxWidth: 760 }}
            >
              We focus on delivering{" "}
              <span style={{ color: "#3a8fb7", fontWeight: 500 }}>
                structured, scalable, and reliable
              </span>{" "}
              solutions that not only meet industry standards but also create{" "}
              <span style={{ color: "#6baf45", fontWeight: 500 }}>
                long-term value
              </span>{" "}
              for our clients and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
