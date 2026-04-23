// CoreServices.jsx
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Toll Management",
    description:
      "Technology-driven toll operations aligned with FASTag and national standards for seamless, congestion-free revenue collection.",
    link: "/services",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="5" height="18" rx="1" />
        <rect x="18" y="3" width="5" height="18" rx="1" />
        <path d="M6 12h12" />
      </svg>
    ),
    bar: "from-[#1E5A7A] to-[#2F7FA3]",
    iconBg: "bg-[#EAF2F8]",
    iconColor: "text-[#1E5A7A]",
    linkColor: "text-[#1E5A7A] hover:text-[#2F7FA3]",
    border: "hover:border-[#1E5A7A]",
    shadow: "hover:shadow-[#1E5A7A]/10",
  },
  {
    id: "02",
    title: "Road & Highway Projects",
    description:
      "End-to-end infrastructure management from feasibility and construction through long-term operations and maintenance.",
    link: "/services",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M6 20V8l6-5 6 5v12" />
        <path d="M10 14h4v6h-4z" />
      </svg>
    ),
    bar: "from-[#2F7FA3] to-[#5FA046]",
    iconBg: "bg-[#E8F4F0]",
    iconColor: "text-[#2F7FA3]",
    linkColor: "text-[#2F7FA3] hover:text-[#1E5A7A]",
    border: "hover:border-[#2F7FA3]",
    shadow: "hover:shadow-[#2F7FA3]/10",
  },
  {
    id: "03",
    title: "Digital & Smart Infrastructure",
    description:
      "IoT-enabled smart toll systems, real-time monitoring dashboards, and predictive analytics for modern highways.",
    link: "/services",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    bar: "from-[#5FA046] to-[#3F6F35]",
    iconBg: "bg-[#EDF6E5]",
    iconColor: "text-[#5FA046]",
    linkColor: "text-[#5FA046] hover:text-[#3F6F35]",
    border: "hover:border-[#5FA046]",
    shadow: "hover:shadow-[#5FA046]/10",
  },
  {
    id: "04",
    title: "Workforce & Operations Management",
    description:
      "Right-talent deployment, structured training, shift planning, and performance monitoring for every project scale.",
    link: "/services",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bar: "from-[#3F6F35] to-[#1E5A7A]",
    iconBg: "bg-[#EAF2EC]",
    iconColor: "text-[#3F6F35]",
    linkColor: "text-[#3F6F35] hover:text-[#1E5A7A]",
    border: "hover:border-[#3F6F35]",
    shadow: "hover:shadow-[#3F6F35]/10",
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 px-6 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D1E4EE] text-[11px] font-bold tracking-[1.2px] uppercase text-[#1E5A7A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5A7A]" />
            What We Offer
          </span>
        </div>
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
          Our <span className="text-[#1E5A7A]">Core Services</span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-10">
          Technology-led infrastructure and tolling solutions — built for scale,
          precision, and impact.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {services.map((s) => (
            <div
              key={s.id}
              className={`group bg-white rounded-2xl border-[1.5px] border-gray-200 p-6 overflow-hidden
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-2xl ${s.border} ${s.shadow}`}
            >
              {/* Colored top bar */}
              <div
                className={`h-[3px] rounded-full bg-gradient-to-r ${s.bar}
                  mb-5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}
              />

              {/* Icon + Number */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.iconBg} ${s.iconColor}`}
                >
                  {s.icon}
                </div>
                <span className="text-[42px] font-black text-gray-900/[0.06] leading-none font-poppins select-none">
                  {s.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-poppins text-[15px] font-bold text-gray-900 mb-2 leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                {s.description}
              </p>

              {/* Divider + Link */}
              <div className="border-t border-gray-100 pt-4">
                <NavLink
                  to={s.link}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 text-[13px] font-bold transition-all duration-200
                    ${s.linkColor}
                    ${isActive ? "underline underline-offset-2" : "group-hover:gap-3"}`
                  }
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0D3347] via-[#1E5A7A] to-[#2F5E20] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-poppins font-bold text-white text-[15px] mb-0.5">
              Need a custom infrastructure solution?
            </p>
            <p className="text-white/60 text-[13px]">
              Talk to our experts — get a tailored plan for your project.
            </p>
          </div>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
              bg-gradient-to-r from-[#5FA046] to-[#3F6F35]
              text-white font-poppins font-bold text-[13px] whitespace-nowrap
              shadow-lg shadow-[#5FA046]/30 hover:-translate-y-0.5 hover:shadow-xl
              transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
