// ProjectApproach.jsx
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Users,
  Activity,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: FileText,
    title: "Detailed Planning & Design Review",
    desc: "Every engagement begins with comprehensive feasibility studies, site analysis, and design validation — ensuring zero ambiguity before ground is broken.",
    check: "Blueprint Verified",
    bar: "from-[#1E5A7A] to-[#2F7FA3]",
    ic: "bg-[#EAF2F8]",
    tc: "text-[#1E5A7A]",
  },
  {
    num: "02",
    icon: Users,
    title: "Strategic Resource Deployment",
    desc: "Right people, equipment, and materials allocated to every phase — ensuring maximum efficiency, minimal downtime, and cost-controlled execution.",
    check: "Optimally Staffed",
    bar: "from-[#2F7FA3] to-[#3A9BB8]",
    ic: "bg-[#E8F4F8]",
    tc: "text-[#2F7FA3]",
  },
  {
    num: "03",
    icon: Activity,
    title: "Continuous Monitoring & Reporting",
    desc: "Real-time dashboards, milestone tracking, and transparent reporting keep all stakeholders fully informed at every stage of the project lifecycle.",
    check: "Live Dashboards",
    bar: "from-[#3A9BB8] to-[#5FA046]",
    ic: "bg-[#E8F5EE]",
    tc: "text-[#3A9BB8]",
  },
  {
    num: "04",
    icon: Clock,
    title: "Timely Delivery with Cost Efficiency",
    desc: "Disciplined project management ensures on-time handovers, controlled budgets, and zero compromise on deliverable quality or scope.",
    check: "On Budget Always",
    bar: "from-[#5FA046] to-[#4A8A38]",
    ic: "bg-[#EDF6E5]",
    tc: "text-[#5FA046]",
  },
  {
    num: "05",
    icon: Shield,
    title: "Safety & Sustainability Focus",
    desc: "NHAI and IS safety standards embedded in every process. We pursue sustainable construction methods to reduce environmental impact at every stage.",
    check: "NHAI Compliant",
    bar: "from-[#4A8A38] to-[#3F6F35]",
    ic: "bg-[#EAF3E5]",
    tc: "text-[#3F6F35]",
  },
];

const rows = [
  {
    icon: FileText,
    grad: "from-[#1E5A7A] to-[#2F7FA3]",
    tag: "Phase 1 — Pre-Construction",
    tagBg: "bg-[#EAF2F8]",
    tagTc: "text-[#1E5A7A]",
    title: "Detailed Planning & Design Review",
    desc: "Site surveys, feasibility analysis, topographic studies, utility mapping, and multi-discipline design reviews are completed before mobilization. Every risk is identified, quantified, and mitigated upfront through structured design validation workshops with the client team.",
  },
  {
    icon: Users,
    grad: "from-[#2F7FA3] to-[#3A9BB8]",
    tag: "Phase 2 — Mobilization",
    tagBg: "bg-[#E8F4F8]",
    tagTc: "text-[#2F7FA3]",
    title: "Strategic Resource Deployment",
    desc: "Specialist engineers, supervisors, equipment operators, and support staff are deployed with precision. Resource schedules are optimized using project management tools to eliminate idle time, reduce costs, and maintain peak productivity throughout the project lifecycle.",
  },
  {
    icon: Activity,
    grad: "from-[#3A9BB8] to-[#5FA046]",
    tag: "Phase 3 — Execution",
    tagBg: "bg-[#E8F5EE]",
    tagTc: "text-[#3A9BB8]",
    title: "Continuous Monitoring & Performance Reporting",
    desc: "Real-time progress tracking, quality inspection reports, milestone dashboards, and incident logs. Weekly client briefings, formal MIS reports, and live portals ensure complete transparency. Zero surprises, full accountability at every stage for every stakeholder involved.",
  },
  {
    icon: Clock,
    grad: "from-[#5FA046] to-[#4A8A38]",
    tag: "Phase 4 — Completion",
    tagBg: "bg-[#EDF6E5]",
    tagTc: "text-[#4A8A38]",
    title: "Timely Delivery with Cost Efficiency",
    desc: "Critical path analysis, earned value management (EVM), and daily progress monitoring enable us to proactively identify schedule slippage and budget deviations. Our 98% on-time delivery record reflects disciplined project controls applied at every level of execution.",
  },
  {
    icon: Shield,
    grad: "from-[#4A8A38] to-[#3F6F35]",
    tag: "Phase 5 — Ongoing",
    tagBg: "bg-[#EAF3E5]",
    tagTc: "text-[#3F6F35]",
    title: "Strong Focus on Safety & Sustainability",
    desc: "Safety is non-negotiable. Every team follows IS and NHAI safety standards, conducts daily toolbox talks, and enforces PPE compliance. Sustainability protocols include waste minimization, dust suppression, green material sourcing, and environmental monitoring aligned with regulatory requirements.",
  },
];

const commitments = [
  "ISO-aligned project management processes",
  "Digital monitoring with real-time client access",
  "Dedicated safety officer on every project",
  "Post-completion O&M handover with full documentation",
  "Pan-India deployment capability within 72 hours",
  "Zero tolerance for safety non-compliance",
];

function Divider({ label }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-gradient-to-r from-[#D1E4EE] to-transparent" />
      <span className="text-[11px] font-bold tracking-[1.2px] uppercase text-[#1E5A7A] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-[#D1E4EE] to-transparent" />
    </div>
  );
}

export default function ProjectApproach() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#F0F4F8] to-[#E8EEF5]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D1E4EE] text-[11px] font-bold tracking-[1.2px] uppercase text-[#1E5A7A] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046]" />
          Project Methodology
        </div>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">
          {/* Left */}
          <div>
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] bg-clip-text text-transparent">
                Project Approach
              </span>{" "}
              — Built for Results
            </h2>
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#1E5A7A] to-[#5FA046] mb-6" />
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              We follow a{" "}
              <span className="font-bold text-[#1E5A7A]">
                structured, transparent, and result-oriented approach
              </span>{" "}
              for every project we undertake. From the first blueprint to the
              final handover, every phase is engineered for precision,
              accountability, and long-term value.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Our methodology is rooted in decades of toll and highway
              infrastructure experience — combining{" "}
              <span className="font-bold text-[#1E5A7A]">
                intelligent planning, expert execution,
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#3F6F35]">
                continuous performance oversight
              </span>{" "}
              to deliver projects that meet the highest standards of quality,
              safety, and sustainability.
            </p>
            {/* Quote */}
            <div className="bg-white border border-[#D1E4EE] border-l-4 border-l-[#1E5A7A] rounded-r-2xl p-5 mb-2">
              <p className="text-[14.5px] text-gray-700 leading-relaxed italic mb-4">
                "Every project we deliver is backed by a rigorous process — from
                feasibility through commissioning — ensuring no detail is left
                to chance and every milestone is met with confidence."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E5A7A] to-[#5FA046] flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0">
                  NP
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E5A7A]">
                    NextGen PrimeWay Solutions LLP
                  </p>
                  <p className="text-xs text-gray-400">
                    Core Project Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "100+", label: "Projects Delivered" },
                { num: "98%", label: "On-Time Completion" },
                { num: "5+", label: "Years of Expertise" },
                { num: "Zero", label: "Safety Violations" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border-[1.5px] border-[#E5EDF3] rounded-2xl py-5 px-4 text-center
                    hover:-translate-y-1 hover:border-[#1E5A7A] transition-all duration-200"
                >
                  <div className="font-poppins text-3xl font-black text-[#1E5A7A] leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=75"
                alt="Infrastructure project site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E5A7A]/55 to-[#3F6F35]/35" />
              <div className="absolute bottom-3 left-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-white text-xs font-bold">
                Active Project Sites — Pan India
              </div>
            </div>
          </div>
        </div>

        <Divider label="Five Core Pillars of Our Approach" />

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="group relative bg-white rounded-2xl border-[1.5px] border-[#E5EDF3] p-5 overflow-hidden
                  hover:-translate-y-2 hover:shadow-2xl hover:border-transparent transition-all duration-300"
              >
                {/* Top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${p.bar}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="text-5xl font-black text-gray-900/[0.05] font-poppins leading-none mb-2">
                  {p.num}
                </div>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${p.ic}`}
                >
                  <Icon className={`w-5 h-5 ${p.tc}`} />
                </div>
                <h4 className="font-poppins font-bold text-[13.5px] text-gray-900 leading-snug mb-2">
                  {p.title}
                </h4>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
                <div
                  className={`flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-100`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${p.tc}`} />
                  <span className={`text-[11.5px] font-semibold ${p.tc}`}>
                    {p.check}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Divider label="How We Execute" />

        {/* Bottom: Rows + Dark Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
          {/* Approach Rows */}
          <div className="flex flex-col gap-4">
            {rows.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="group flex items-start gap-4 bg-white border-[1.5px] border-[#E5EDF3] rounded-2xl p-5
                    hover:border-[#2F7FA3] hover:translate-x-1 transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${r.grad}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[14px] text-gray-900 mb-1.5">
                      {r.title}
                    </h4>
                    <p className="text-[12.5px] text-gray-500 leading-relaxed mb-2">
                      {r.desc}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${r.tagBg} ${r.tagTc}`}
                    >
                      {r.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dark Commitment Card */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg,#0D2535 0%,#1E5A7A 50%,#1d4520 100%)",
            }}
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle,#fff 1px,transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/18 rounded-full px-3 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DD856]" />
                <span className="text-[10px] font-bold tracking-[1.1px] uppercase text-white/80">
                  Our Commitment
                </span>
              </div>
              <h3 className="font-poppins font-black text-xl text-white leading-snug mb-3">
                Why Our Approach{" "}
                <span className="bg-gradient-to-r from-[#7DD856] to-[#A8E87E] bg-clip-text text-transparent">
                  Delivers Results
                </span>
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed mb-5">
                Every principle in our methodology is derived from real-world
                project learnings across highways, toll corridors, and smart
                infrastructure deployments — refined over 15+ years.
              </p>
              <div className="flex flex-col gap-2.5 mb-5">
                {commitments.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2.5 bg-white/7 border border-white/10 rounded-xl px-3 py-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7DD856] flex-shrink-0" />
                    <span className="text-[12.5px] text-white/80 font-medium">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5 border-t border-white/10 pt-4">
                {[
                  { n: "100+", l: "Projects Completed" },
                  { n: "98%", l: "On-Time Delivery" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="text-center bg-white/6 border border-white/10 rounded-xl py-3"
                  >
                    <div className="font-poppins font-black text-2xl text-white leading-none">
                      {s.n}
                    </div>
                    <div className="text-[11px] text-white/45 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <NavLink
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                  bg-gradient-to-r from-[#5FA046] to-[#3F6F35] text-white
                  font-poppins font-bold text-[13.5px]
                  shadow-lg shadow-[#5FA046]/30
                  hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
              >
                Start a Project With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
