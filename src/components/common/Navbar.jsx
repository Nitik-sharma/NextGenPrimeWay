import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/Images/logonav.png'

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Sticky shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ════════════════════════════════════════
          HEADER (fixed, top)
      ════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(31,90,122,0.13)]" : ""
        }`}
      >
        {/* ── TOP BAR ── */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#1F5A7A] transition-colors duration-200"
              >
                <svg
                  className="w-[14px] h-[14px] text-gray-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5.5a1.5 1.5 0 011.5-1.5h1.372c.356 0 .668.228.775.567l1.1 3.3a.75.75 0 01-.174.795l-1.178 1.178a13.06 13.06 0 006.265 6.265l1.178-1.178a.75.75 0 01.795-.174l3.3 1.1c.34.107.567.42.567.775V18.5A1.5 1.5 0 0118.5 20C9.94 20 3 13.06 3 5.5z"
                  />
                </svg>
                <span className="font-medium">+91 98765 43210</span>
              </a>

              {/* Email + CTA */}
              <div className="flex items-center gap-5">
                <a
                  href="mailto:info@example.com"
                  className="hidden sm:flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#1F5A7A] transition-colors duration-200"
                >
                  <svg
                    className="w-[14px] h-[14px] text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
                    />
                  </svg>
                  info@example.com
                </a>

                <a
                  href="/contact"
                  className="hidden sm:inline-block px-5 py-[5px] rounded-full text-white text-[12px] font-semibold
                             bg-[#6BAF45] hover:bg-[#1F5A7A] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <nav aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">
              {/* LOGO */}
              <Link
                to="/"
                className="flex items-end gap-3 flex-shrink-0"
                aria-label="NextGen PrimeWay Solutions"
              >
                <img src={Logo} alt="" className="w-35 h-18"/>
                
              </Link>

              {/* DESKTOP LINKS */}
              <ul className="hidden lg:flex items-center gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `relative px-4 py-2 text-[14px] font-medium rounded-md transition-colors duration-200
                         ${isActive ? "text-[#1F5A7A] font-semibold" : "text-gray-600 hover:text-[#1F5A7A]"}`
                      }
                      style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <span className="absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-[#6BAF45]" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* MOBILE: Quote + Hamburger */}
              <div className="flex lg:hidden items-center gap-3">
                <a
                  href="/contact"
                  className="px-4 py-[5px] rounded-full text-white text-[11px] font-semibold
                             bg-[#6BAF45] hover:bg-[#1F5A7A] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                >
                  Get a Quote
                </a>

                {/* ── ANIMATED HAMBURGER → CROSS BUTTON ── */}
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-drawer"
                  className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg
                             hover:bg-[#1F5A7A]/5 transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-[#1F5A7A]/30"
                >
                  {/* Bar 1 — rotates to top of X */}
                  <span
                    className="block w-[22px] h-[2px] rounded-full bg-[#1F5A7A]"
                    style={{
                      transition:
                        "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                      transform: menuOpen
                        ? "translateY(7px) rotate(45deg)"
                        : "none",
                    }}
                  />
                  {/* Bar 2 — fades out (middle) */}
                  <span
                    className="block w-[22px] h-[2px] rounded-full bg-[#1F5A7A]"
                    style={{
                      transition: "transform 0.25s ease, opacity 0.25s ease",
                      opacity: menuOpen ? 0 : 1,
                      transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                    }}
                  />
                  {/* Bar 3 — rotates to bottom of X */}
                  <span
                    className="block w-[22px] h-[2px] rounded-full bg-[#1F5A7A]"
                    style={{
                      transition:
                        "transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
                      transform: menuOpen
                        ? "translateY(-7px) rotate(-45deg)"
                        : "none",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ════════════════════════════════════════
          BACKDROP OVERLAY
      ════════════════════════════════════════ */}
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* ════════════════════════════════════════
          SLIDE-IN DRAWER  ← slides from RIGHT
      ════════════════════════════════════════ */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="fixed top-0 right-0 z-50 h-full w-[290px] bg-white lg:hidden flex flex-col"
        style={{
          boxShadow: "-8px 0 40px rgba(31,90,122,0.18)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* ── Drawer Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          {/* Mini logo */}
          <div className="flex flex-col">
            <span
              className="text-[15px] font-extrabold"
              style={{
                fontFamily: "'Poppins', Arial, sans-serif",
                color: "#1F5A7A",
              }}
            >
              NextGen <span style={{ color: "#6BAF45" }}>PrimeWay</span>
            </span>
            <span
              className="text-[8px] font-semibold uppercase mt-[3px]"
              style={{
                color: "#3A8FB7",
                letterSpacing: "0.18em",
                fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              — Solutions LLP —
            </span>
          </div>

          {/* X close button */}
          <button
            onClick={close}
            aria-label="Close navigation menu"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200
                       text-gray-400 hover:text-[#1F5A7A] hover:border-[#1F5A7A] hover:bg-[#1F5A7A]/5
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1F5A7A]/30"
          >
            <svg
              className="w-[15px] h-[15px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ── Nav Links — each slides in from RIGHT with staggered delay ── */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <ul className="space-y-[3px]" role="list">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.path}
                style={{
                  /* When open: slide in from right, staggered per item */
                  transform: menuOpen ? "translateX(0)" : "translateX(56px)",
                  opacity: menuOpen ? 1 : 0,
                  transition: menuOpen
                    ? `transform 0.4s cubic-bezier(0.4,0,0.2,1) ${0.06 + i * 0.075}s,
                       opacity   0.35s ease                      ${0.06 + i * 0.075}s`
                    : "transform 0.15s ease, opacity 0.15s ease",
                }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-[14px] rounded-xl text-[14px] font-medium
                     transition-colors duration-200
                     ${
                       isActive
                         ? "bg-[#1F5A7A]/8 text-[#1F5A7A] font-semibold"
                         : "text-gray-600 hover:bg-gray-50 hover:text-[#1F5A7A]"
                     }`
                  }
                  style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
                >
                  {({ isActive }) => (
                    <>
                      {/* Active dot indicator */}
                      <span
                        className="flex-shrink-0 w-[7px] h-[7px] rounded-full transition-all duration-300"
                        style={{
                          background: isActive ? "#6BAF45" : "transparent",
                          border: isActive ? "none" : "1.5px solid #d1d5db",
                          transform: isActive ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                      {link.label}

                      {/* Arrow on hover — shown for non-active via CSS */}
                      {!isActive && (
                        <svg
                          className="w-3.5 h-3.5 ml-auto text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Drawer Footer — contact + CTA ── */}
        <div
          className="px-6 pb-8 pt-5 border-t border-gray-100 space-y-3"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(24px)",
            opacity: menuOpen ? 1 : 0,
            transition: menuOpen
              ? "transform 0.45s cubic-bezier(0.4,0,0.2,1) 0.42s, opacity 0.4s ease 0.42s"
              : "none",
          }}
        >
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-[#1F5A7A] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#3A8FB7] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.5a1.5 1.5 0 011.5-1.5h1.372c.356 0 .668.228.775.567l1.1 3.3a.75.75 0 01-.174.795l-1.178 1.178a13.06 13.06 0 006.265 6.265l1.178-1.178a.75.75 0 01.795-.174l3.3 1.1c.34.107.567.42.567.775V18.5A1.5 1.5 0 0118.5 20C9.94 20 3 13.06 3 5.5z"
              />
            </svg>
            +91 98765 43210
          </a>

          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-[#1F5A7A] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#3A8FB7] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
              />
            </svg>
            info@example.com
          </a>

          <a
            href="/contact"
            onClick={close}
            className="mt-1 w-full flex items-center justify-center py-3 rounded-full
                       text-white text-[13px] font-semibold
                       bg-[#6BAF45] hover:bg-[#1F5A7A] transition-colors duration-300"
            style={{ fontFamily: "'Poppins', Arial, sans-serif" }}
          >
            Get a Free Quote
          </a>
        </div>
      </aside>
    </>
  );
}
