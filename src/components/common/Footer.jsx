import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Images/logo/logonav.png";

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

 
  return (
    <footer
      style={{ fontFamily: "'Poppins', sans-serif", background: "#0B1F2A" }}
    >
      {/* ── MAIN GRID ── */}
      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src={Logo}
            alt="NextGen PrimeWay"
            className="h-12 mb-4 brightness-0 invert"
          />
          <p className="text-white/45 text-[13px] leading-[1.8] mb-5">
            Expert solutions for tolls, roads & smart infrastructure across
            India.
          </p>
          <div
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#6BAF45]
                          border border-[#6BAF45]/30 px-3 py-1 rounded-full"
          >
            <span className="w-1.5 h-1.5 bg-[#6BAF45] rounded-full animate-pulse" />
            Available for Projects
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-[12px] font-semibold uppercase tracking-[2.5px] mb-5">
            Services
          </h4>
          <ul className="space-y-2.5">
            {[
              "Toll Management",
              "Road & Highway Projects",
              "Smart Infrastructure",
              "Bridge Construction",
            ].map((s) => (
              <li key={s}>
                <NavLink
                  to="/services"
                  className="text-[13px] text-white/45 hover:text-[#6BAF45] transition-colors duration-200"
                >
                  › {s}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-[12px] font-semibold uppercase tracking-[2.5px] mb-5">
            Company
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", to: "/about" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map((c) => (
              <li key={c.label}>
                <NavLink
                  to={c.to}
                  className="text-[13px] text-white/45 hover:text-[#6BAF45] transition-colors duration-200"
                >
                  › {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
     
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#070F14",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/35">
            © {currentYear}{" "}
            <span className="text-[#1a6fc4]">
              NextGen PrimeWay Solutions LLP
            </span>
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[12px] text-white/35 hover:text-[#6BAF45] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <p className="text-[12px] text-white/30">
            Made with <span className="text-red-400">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
