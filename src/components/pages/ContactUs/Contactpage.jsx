import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Navigation,
  Building2,
  Building,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// ── IMAGES ────────────────────────────────────────────────────
import roadImg1 from "../../../assets/Images/Roads/32.jpg";
import roadImg2 from "../../../assets/Images/Roads/30.jpg";
import workImg1 from "../../../assets/Images/work/5.jpg";
import workImg2 from "../../../assets/Images/work/6.jpg";
import tollImg1 from "../../../assets/Images/Tolls/6.jpeg";
// ─────────────────────────────────────────────────────────────

/* ── useReveal ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({
  children,
  className = "",
  style = {},
  delay = 0,
  direction = "up",
}) {
  const [ref, visible] = useReveal();
  const transforms = {
    up: "translateY(32px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    scale: "scale(0.95)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── useCopy ── */
function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return [copied, copy];
}

/* ── Office map card ── */
function OfficeCard({ office, delay = 0 }) {
  const [copied, copy] = useCopy();
  const Icon = office.icon;
  return (
    <Reveal
      direction="up"
      delay={delay}
      className="bg-white rounded-3xl overflow-hidden border border-[#e8f0fb] hover:border-[#1a6fc4] hover:-translate-y-1
                 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
    >
      {/* Map */}
      <div className="relative h-60 overflow-hidden">
        <iframe
          src={office.mapEmbed}
          title={office.type}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-white/60 shadow-md"
            style={{ color: office.accentColor }}
          >
            <Icon className="w-3 h-3" />
            {office.badge}
          </span>
        </div>
        {/* directions over map */}
        <a
          href={office.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-[12px] font-bold
                     shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          style={{ background: office.accentColor }}
        >
          <Navigation className="w-3.5 h-3.5" />
          Directions
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: office.accentColor }}
            >
              <Icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-[15px] text-[#0d3a6e]">
              {office.type}
            </h3>
          </div>
          <button
            onClick={() => copy(office.fullAddress)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8fafc] border border-[#e8f0fb]
                       text-[11px] font-semibold text-[#64748b] hover:border-[#1a6fc4] hover:text-[#1a6fc4] transition-all duration-200"
          >
            {copied ? (
              <Check className="w-3 h-3 text-[#22a05b]" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-[#e8f0fb] mb-5">
          <MapPin
            className="w-4 h-4 mt-0.5 flex-shrink-0"
            style={{ color: office.accentColor }}
          />
          <div>
            <p className="text-[14px] font-semibold text-[#0d3a6e] leading-snug">
              {office.address}
            </p>
            <p className="text-[13px] text-[#64748b] mt-0.5">{office.area}</p>
            <p className="text-[13px] font-bold text-[#475569] mt-0.5">
              {office.city}
            </p>
          </div>
        </div>

        <a
          href={office.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-[13px] font-bold
                     hover:-translate-y-0.5 transition-all duration-200"
          style={{ color: office.accentColor, borderColor: office.accentColor }}
        >
          <Navigation className="w-4 h-4" />
          Open in Google Maps
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </Reveal>
  );
}

/* ── offices data ── */
const offices = [
  {
    id: "registered",
    type: "Registered Office",
    icon: Building,
    badge: "Registered",
    accentColor: "#1a6fc4",
    address: "Shop No. 166A, 3rd Floor, Khasra No. 61",
    area: "Bindapur Police Station",
    city: "Delhi – 110059",
    fullAddress:
      "Shop No. 166A, 3rd Floor, Khasra No. 61, Bindapur, Delhi – 110059",
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.0400%2C28.6000%2C77.0900%2C28.6300&layer=mapnik&marker=28.6150%2C77.0650",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bindapur+Police+Station+Delhi+110059",
  },
  {
    id: "corporate",
    type: "Corporate Office",
    icon: Building2,
    badge: "Corporate HQ",
    accentColor: "#22a05b",
    address: "Plot No. 154, 1st Floor, Main Dhanwapur Road",
    area: "Opposite Bhagat Singh Park",
    city: "Gurgaon, Haryana – 122006",
    fullAddress:
      "Plot No. 154, 1st Floor, Main Dhanwapur Road, Opposite Bhagat Singh Park, Gurgaon – 122006",
    mapEmbed:
      "https://maps.google.com/maps?q=28.480457,76.989944&z=16&output=embed",
    directionsUrl: "https://www.google.com/maps?q=28.480457,76.989944",
  },
];

export default function ContactPage() {
  const [heroRef, heroV] = useReveal(0.05);

  return (
    <main className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* ════════════════════════
          HERO — road image bg
      ════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "72vh", paddingTop: "80px" }}
      >
        <img
          src={roadImg1}
          alt="contact"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "heroZoom 1.6s ease forwards" }}
        />
        <div className="absolute inset-0 bg-[#050f1a]/68" />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
        />

        <div
          ref={heroRef}
          className="relative z-10 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          style={{ paddingTop: "10vh", paddingBottom: "110px" }}
        >
          {/* left: headline */}
          <div>
            {/* breadcrumb */}
            <div
              className="flex items-center gap-2 text-white/50 text-[12px] mb-5"
              style={{
                opacity: heroV ? 1 : 0,
                transition: "opacity 0.5s ease 0.05s",
              }}
            >
              <NavLink to="/" className="hover:text-white transition-colors">
                Home
              </NavLink>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Contact Us</span>
            </div>

            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-white bg-[#22a05b] px-4 py-1.5 rounded-full w-fit mb-6"
              style={{
                opacity: heroV ? 1 : 0,
                transform: heroV ? "none" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              Get In Touch
            </span>

            <h1
              className="text-white font-black leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                opacity: heroV ? 1 : 0,
                transform: heroV ? "none" : "translateY(28px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              Let's Connect &<br />
              <span style={{ color: "#6BAF45" }}>Build Together</span>
            </h1>

            <p
              className="text-white font-medium text-[15px] max-w-md leading-[1.85] mb-8"
              style={{
                opacity: heroV ? 1 : 0,
                transform: heroV ? "none" : "translateY(20px)",
                transition:
                  "opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s",
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              Reach out for project enquiries, partnerships, or any information
              about our toll management and highway infrastructure services.
            </p>

            <div
              className="flex flex-wrap gap-2"
              style={{
                opacity: heroV ? 1 : 0,
                transition: "opacity 0.7s ease 0.48s",
              }}
            >
              {[
                "Pan-India Operations",
                "24/7 Project Support",
                "Fast Response Time",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/75 text-[12px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right: contact card */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7"
            style={{
              opacity: heroV ? 1 : 0,
              transform: heroV ? "none" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <p className="text-white font-bold text-[14px] mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#6BAF45] rounded-full animate-pulse" />
              Available Mon – Sat, 10AM – 6PM
            </p>

            <div className="space-y-3">
              {/* Phone — ONE call button */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl text-white font-bold text-[14px]
                           hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                style={{
                  background: "#22a05b",
                  boxShadow: "0 6px 20px rgba(34,160,91,0.35)",
                }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-white/70 uppercase tracking-wider font-medium mb-0.5">
                    Call Us
                  </p>
                  <p>+91-XXXXXXXXXX</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@nextgenprimeway.com"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 border border-white/20
                           text-white text-[14px] hover:bg-white/15 hover:border-white/35 transition-all duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-[#6BAF45]" />
                <div>
                  <p className="text-[11px] text-white/60 uppercase tracking-wider font-medium mb-0.5">
                    Email
                  </p>
                  <p className="font-semibold">info@nextgenprimeway.com</p>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://www.nextgenprimeway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 border border-white/20
                           text-white text-[14px] hover:bg-white/15 hover:border-white/35 transition-all duration-200"
              >
                <Globe className="w-5 h-5 flex-shrink-0 text-[#6BAF45]" />
                <div>
                  <p className="text-[11px] text-white/60 uppercase tracking-wider font-medium mb-0.5">
                    Website
                  </p>
                  <p className="font-semibold">www.nextgenprimeway.com</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════
          IMAGE STRIP — 3 photos
      ════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-4">
          {[workImg1, roadImg2, tollImg1].map((src, i) => (
            <Reveal
              key={i}
              direction="scale"
              delay={i * 0.1}
              className="rounded-2xl overflow-hidden group"
              style={{
                height: "200px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════
          CONTACT INFO CARDS — no duplicate call buttons
      ════════════════════════ */}
      <section className="bg-[#f8fafc] py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up" className="mb-10">
            <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
              Contact Details
            </p>
            <h2 className="text-[#0d3a6e] font-black text-3xl">
              How to Reach Us
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Phone */}
            <Reveal
              direction="up"
              delay={0.0}
              className="bg-white rounded-2xl p-6 border border-[#e8f0fb] hover:border-[#1a6fc4]
                         hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#1a6fc4]">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] mb-1">
                Phone
              </p>
              <p className="font-bold text-[#0d3a6e] text-[15px] mb-1">
                +91-XXXXXXXXXX
              </p>
              <p className="text-[12px] text-[#64748b]">
                Mon – Sat, 10AM – 6PM
              </p>
            </Reveal>

            {/* Email */}
            <Reveal
              direction="up"
              delay={0.1}
              className="bg-white rounded-2xl p-6 border border-[#e8f0fb] hover:border-[#22a05b]
                         hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#22a05b]">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] mb-1">
                Email
              </p>
              <p className="font-bold text-[#0d3a6e] text-[14px] mb-1 break-all">
                info@nextgenprimeway.com
              </p>
              <a
                href="mailto:info@nextgenprimeway.com"
                className="text-[12px] text-[#22a05b] font-semibold hover:underline"
              >
                Send a message →
              </a>
            </Reveal>

            {/* Website */}
            <Reveal
              direction="up"
              delay={0.2}
              className="bg-white rounded-2xl p-6 border border-[#e8f0fb] hover:border-[#1a6fc4]
                         hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#0d3a6e]">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] mb-1">
                Website
              </p>
              <p className="font-bold text-[#0d3a6e] text-[15px] mb-1">
                www.nextgenprimeway.com
              </p>
              <a
                href="https://www.nextgenprimeway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[#1a6fc4] font-semibold hover:underline flex items-center gap-1"
              >
                Visit site <ExternalLink className="w-3 h-3" />
              </a>
            </Reveal>

            {/* Hours */}
            <Reveal
              direction="up"
              delay={0.3}
              className="bg-white rounded-2xl p-6 border border-[#e8f0fb] hover:border-[#22a05b]
                         hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#22a05b]">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] mb-1">
                Hours
              </p>
              <p className="font-bold text-[#0d3a6e] text-[14px] mb-1">
                Mon – Sat: 10AM – 6PM
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22a05b] animate-pulse" />
                <span className="text-[12px] font-semibold text-[#22a05b]">
                  Open Today
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════
          OFFICES WITH MAPS
      ════════════════════════ */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <Reveal direction="up" className="mb-12">
          <p className="text-[#22a05b] text-[11px] font-bold uppercase tracking-[3px] mb-2">
            Our Locations
          </p>
          <h2 className="text-[#0d3a6e] font-black text-3xl mb-3">
            Find Us at Our Offices
          </h2>
          <p className="text-[#64748b] text-[14px] max-w-lg leading-[1.8]">
            We operate from two offices — our registered office in Delhi and our
            corporate headquarters in Gurgaon.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, i) => (
            <OfficeCard key={office.id} office={office} delay={i * 0.12} />
          ))}
        </div>
      </section>

      {/* ════════════════════════
          WIDE PHOTO + CTA
      ════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "320px" }}
      >
        <img
          src={workImg2}
          alt="team at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d3a6e]/65" />
        <div
          className="relative z-10 flex flex-col md:flex-row items-center justify-between
                        max-w-5xl mx-auto px-8 py-20 gap-10"
        >
          <Reveal direction="left">
            <p className="text-[#6BAF45] text-[11px] font-bold uppercase tracking-[3px] mb-3">
              Start a Project
            </p>
            <h2
              className="text-white font-black leading-tight"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Ready to Work Together?
              <br />
              <span style={{ color: "#6BAF45" }}>
                We respond within 24 hours.
              </span>
            </h2>
          </Reveal>
          <Reveal
            direction="right"
            className="flex gap-4 flex-wrap flex-shrink-0"
          >
            <a
              href="mailto:info@nextgenprimeway.com"
              className="inline-flex items-center gap-2 text-white text-[14px] font-bold px-7 py-3.5 rounded-full bg-[#22a05b]
                         hover:bg-[#1a8a4e] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(34,160,91,0.4)]
                         transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 text-white text-[14px] font-bold px-7 py-3.5 rounded-full
                         border-2 border-white/35 hover:border-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Our Services →
            </NavLink>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to   { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
