
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Navigation,
  PhoneCall,
  Building2,
  Building,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

/* ─── Scroll reveal hook ─── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return [ref, visible];
}

/* ─── Copy to clipboard hook ─── */
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

/* ─── Offices data ─── */
const offices = [
  {
    id: "registered",
    type: "Registered Office",
    icon: Building,
    badge: "Registered",
    badgeBg: "bg-[#EAF2F8]",
    badgeTc: "text-[#1E5A7A]",
    address: "Shop No. 166A, 3rd Floor, Khasra No. 61",
    area: "Bindapur Police Station",
    city: "Delhi – 110059",
    fullAddress:
      "Shop No. 166A, 3rd Floor, Khasra No. 61, Bindapur, Delhi – 110059",
    mapQuery: "Bindapur+Delhi+110059",
    // OpenStreetMap embed for Bindapur, Delhi
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.0400%2C28.6000%2C77.0900%2C28.6300&layer=mapnik&marker=28.6150%2C77.0650",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bindapur+Police+Station+Delhi+110059",
    color: "from-[#1E5A7A] to-[#2F7FA3]",
    borderHover: "hover:border-[#1E5A7A]",
    shadowHover: "hover:shadow-[#1E5A7A]/10",
  },
  {
    id: "corporate",
    type: "Corporate Office",
    icon: Building2,
    badge: "Corporate HQ",
    badgeBg: "bg-[#EDF6E5]",
    badgeTc: "text-[#3F6F35]",
    address: "Plot No. 154, 1st Floor, Main Dhanwapur Road",
    area: "Opposite Bhagat Singh Park",
    city: "Gurgaon, Haryana – 122006",
    fullAddress:
      "Plot No. 154, 1st Floor, Main Dhanwapur Road, Opposite Bhagat Singh Park, Gurgaon, Haryana – 122006",
    mapQuery: "Dhanwapur+Road+Gurgaon+Haryana+122006",
    // OpenStreetMap embed for Gurgaon
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=76.9600%2C28.4200%2C77.0200%2C28.4700&layer=mapnik&marker=28.4441%2C76.9842",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dhanwapur+Road+Gurgaon+Haryana+122006",
    color: "from-[#5FA046] to-[#3F6F35]",
    borderHover: "hover:border-[#5FA046]",
    shadowHover: "hover:shadow-[#5FA046]/10",
  },
];

/* ─── SectionLabel ─── */
function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[1.2px] uppercase
        ${
          light
            ? "bg-white/10 border border-white/20 text-white/80"
            : "bg-white border border-[#D1E4EE] text-[#1E5A7A]"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${light ? "bg-[#7DD856]" : "bg-gradient-to-r from-[#1E5A7A] to-[#5FA046]"}`}
      />
      {children}
    </span>
  );
}

/* ─── Office Map Card ─── */
function OfficeCard({ office, index }) {
  const [ref, visible] = useReveal(index * 150);
  const [copied, copy] = useCopy();
  const Icon = office.icon;

  return (
    <div
      ref={ref}
      className={`flex flex-col bg-white rounded-3xl border-[1.5px] border-gray-200 overflow-hidden
        shadow-sm transition-all duration-700
        ${office.borderHover} ${office.shadowHover}
        hover:shadow-2xl hover:-translate-y-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Map embed */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <iframe
          src={office.mapEmbed}
          title={`Map for ${office.type}`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay badge */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold
            ${office.badgeBg} ${office.badgeTc} border border-white/60 shadow-md`}
          >
            <Icon className="w-3 h-3" />
            {office.badge}
          </span>
        </div>
        {/* Directions button over map */}
        <a
          href={office.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-3 right-3 z-10 flex items-center gap-2 px-4 py-2 rounded-xl
            bg-gradient-to-r ${office.color} text-white text-xs font-bold
            shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200`}
        >
          <Navigation className="w-3.5 h-3.5" />
          Get Directions
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`inline-flex items-center gap-2 mb-1`}>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${office.color}`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-[15px] text-gray-900">
                {office.type}
              </h3>
            </div>
          </div>
          <button
            onClick={() => copy(office.fullAddress)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200
              text-xs font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700
              transition-all duration-200"
            title="Copy address"
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-600" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 mb-5 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <MapPin
            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${office.badgeTc}`}
          />
          <div>
            <p className="text-[14px] font-semibold text-gray-800 leading-snug">
              {office.address}
            </p>
            <p className="text-[13px] text-gray-500 mt-0.5">{office.area}</p>
            <p className="text-[13px] font-bold text-gray-700 mt-0.5">
              {office.city}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={`tel:+91XXXXXXXXXX`}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
              bg-gradient-to-r ${office.color} text-white font-poppins font-bold text-[13px]
              shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group`}
          >
            <PhoneCall className="w-4 h-4" />
            Call Us
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={office.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
              border-[1.5px] border-gray-200 text-gray-700 font-poppins font-bold text-[13px]
              hover:border-[#1E5A7A] hover:text-[#1E5A7A] hover:bg-[#EAF2F8]/50
              transition-all duration-200 group"
          >
            <Navigation className="w-4 h-4" />
            Directions
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Contact Page ─── */
export default function ContactPage() {
  const [heroRef, heroVisible] = useReveal(0);
  const [infoRef, infoVisible] = useReveal(0);
  const [copied, copy] = useCopy();

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* ── HERO BANNER ── */}
      <div
        className="relative overflow-hidden py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg,#0D2535 0%,#1E5A7A 45%,#1d4520 100%)",
        }}
      >
        {/* Highway bg image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=60"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div
          ref={heroRef}
          className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-xs font-medium mb-6">
            <NavLink to="/" className="hover:text-white transition-colors">
              Home
            </NavLink>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">Contact Us</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <SectionLabel light>Get In Touch</SectionLabel>
              <h1 className="font-poppins text-4xl md:text-5xl font-extrabold text-white leading-tight mt-4 mb-4">
                Let's Connect &{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7DD856,#A8E87E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Build Together
                </span>
              </h1>
              <p className="text-white/65 text-[15px] leading-relaxed max-w-xl">
                Reach out to our team for project enquiries, partnerships, or
                any information about our toll management and highway
                infrastructure services.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "Pan-India Operations",
                  "24/7 Project Support",
                  "Fast Response Time",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-[12px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick contact card */}
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 min-w-[260px]">
              <p className="font-poppins font-bold text-white text-[14px] mb-4">
                Quick Contact
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 bg-gradient-to-r from-[#5FA046] to-[#3F6F35] text-white
                    px-4 py-3 rounded-xl font-poppins font-bold text-[13px]
                    shadow-lg shadow-[#5FA046]/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91-XXXXXXXXXX</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:info@nextgenprimeway.com"
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white/85
                    px-4 py-3 rounded-xl font-medium text-[13px]
                    hover:bg-white/15 hover:border-white/35 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#7DD856]" />
                  <span>info@nextgenprimeway.com</span>
                </a>
                <a
                  href="https://www.nextgenprimeway.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white/85
                    px-4 py-3 rounded-xl font-medium text-[13px]
                    hover:bg-white/15 hover:border-white/35 transition-all duration-200"
                >
                  <Globe className="w-4 h-4 text-[#7DD856]" />
                  <span>www.nextgenprimeway.com</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-white/40" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* ── TWO OFFICE MAP CARDS ── */}
        <div className="mb-4">
          <SectionLabel>Our Offices</SectionLabel>
          <h2 className="font-poppins text-3xl font-extrabold text-gray-900 mt-3 mb-2">
            Find Us{" "}
            <span className="bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] bg-clip-text text-transparent">
              At Our Locations
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] mb-2" />
          <p className="text-gray-500 text-[15px] max-w-xl mb-8">
            We operate from two offices — our registered office in Delhi and our
            corporate headquarters in Gurgaon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {offices.map((office, i) => (
            <OfficeCard key={office.id} office={office} index={i} />
          ))}
        </div>

        {/* ── CONTACT INFO ROW ── */}
        <div
          ref={infoRef}
          className={`transition-all duration-700 delay-200 ${
            infoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Phone */}
            <div className="group bg-white border-[1.5px] border-gray-200 rounded-2xl p-6 hover:border-[#1E5A7A] hover:shadow-xl hover:shadow-[#1E5A7A]/8 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5A7A] to-[#2F7FA3] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1.5">
                Phone
              </p>
              <p className="font-poppins font-bold text-gray-900 text-[15px] mb-3">
                +91-XXXXXXXXXX
              </p>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl w-full justify-center
                  bg-gradient-to-r from-[#1E5A7A] to-[#2F7FA3] text-white font-poppins font-bold text-[13px]
                  shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group/btn"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Call Now
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email */}
            <div className="group bg-white border-[1.5px] border-gray-200 rounded-2xl p-6 hover:border-[#2F7FA3] hover:shadow-xl hover:shadow-[#2F7FA3]/8 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F7FA3] to-[#3A9BB8] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1.5">
                Email
              </p>
              <p className="font-poppins font-bold text-gray-900 text-[14px] mb-3 break-all">
                info@nextgenprimeway.com
              </p>
              <a
                href="mailto:info@nextgenprimeway.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl w-full justify-center
                  bg-gradient-to-r from-[#2F7FA3] to-[#3A9BB8] text-white font-poppins font-bold text-[13px]
                  shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group/btn"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Email
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Website */}
            <div className="group bg-white border-[1.5px] border-gray-200 rounded-2xl p-6 hover:border-[#5FA046] hover:shadow-xl hover:shadow-[#5FA046]/8 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FA046] to-[#3F6F35] flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1.5">
                Website
              </p>
              <p className="font-poppins font-bold text-gray-900 text-[15px] mb-3">
                www.nextgenprimeway.com
              </p>
              <a
                href="https://www.nextgenprimeway.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl w-full justify-center
                  bg-gradient-to-r from-[#5FA046] to-[#3F6F35] text-white font-poppins font-bold text-[13px]
                  shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group/btn"
              >
                <Globe className="w-3.5 h-3.5" />
                Visit Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Business Hours */}
            <div className="group bg-white border-[1.5px] border-gray-200 rounded-2xl p-6 hover:border-[#3F6F35] hover:shadow-xl hover:shadow-[#3F6F35]/8 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3F6F35] to-[#2a5020] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-1.5">
                Business Hours
              </p>
              <div className="flex flex-col gap-1.5 mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5FA046] flex-shrink-0" />
                  <span className="text-[13px] font-semibold text-gray-800">
                    Mon – Sat: 10AM – 6PM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-red-300 flex-shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  <span className="text-[13px] text-gray-400">
                    Sunday: Closed
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#EDF6E5] border border-[#C0DD97] rounded-xl px-3 py-2">
                <div className="w-2 h-2 rounded-full bg-[#5FA046] animate-pulse" />
                <span className="text-[12px] font-bold text-[#3F6F35]">
                  Open Today
                </span>
              </div>
            </div>
          </div>

          {/* ── BOTTOM CTA STRIP ── */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(135deg,#0D2535 0%,#1E5A7A 45%,#1d4520 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle,#fff 1px,transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-10">
              <p className="font-poppins font-black text-white text-xl mb-1">
                Ready to start a project?
              </p>
              <p className="text-white/60 text-[14px]">
                Call us directly or drop an email — our team responds within 24
                business hours.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 flex-shrink-0 flex-wrap">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-[#5FA046] to-[#3F6F35] text-white
                  font-poppins font-bold text-[13.5px] shadow-lg shadow-[#5FA046]/30
                  hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
              >
                <PhoneCall className="w-4 h-4" />
                Call Us Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:info@nextgenprimeway.com"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl
                  bg-white/10 border border-white/25 text-white
                  font-poppins font-bold text-[13.5px]
                  hover:bg-white/18 hover:border-white/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
