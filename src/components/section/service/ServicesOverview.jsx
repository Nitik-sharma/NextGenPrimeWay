import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Toll Management Systems",
  "Road & Highway Projects",
  "Digital Infrastructure",
  "Workforce Management",
  "Smart Mobility Solutions",
  "Compliance & Auditing",
];

const ServicesOverview = () => {
  return (
    <section className="bg-[#F5F7FA] py-24 relative overflow-hidden font-inter">
      {/* Background Circles */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(30,90,122,0.07),transparent_70%)]" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(76,175,80,0.07),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-[3px] bg-green-500 rounded"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-500">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-4xl md:text-5xl font-extrabold text-[#0F2F4A] leading-tight mb-4">
              What We{" "}
              <span className="relative text-[#1E5A7A]">
                Offer
                <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-gradient-to-r from-green-500 to-[#1E5A7A] rounded"></span>
              </span>
            </h2>

            {/* Divider */}
            <div className="w-20 h-[3px] bg-gradient-to-r from-[#1E5A7A] via-green-500 to-[#1E5A7A] rounded my-6 animate-pulse"></div>

            {/* Description */}
            <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
              We offer a comprehensive range of infrastructure and toll
              management services designed to enhance operational efficiency,
              ensure compliance, and deliver long-term value.
            </p>

            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              Our solutions combine industry expertise, advanced technologies,
              and a results-driven approach to meet the evolving demands of
              transportation and infrastructure sectors.
            </p>

            {/* CTA */}
            <button className="flex items-center gap-2 text-[#1E5A7A] font-semibold hover:text-green-500 transition-all group">
              View All Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                num: "100+",
                label: "Projects Delivered",
                sub: "Across India & abroad",
                bg: "bg-blue-50",
                text: "text-[#1E5A7A]",
                accent: "bg-[#1E5A7A]/10",
              },
              {
                num: "5+",
                label: "Years of Expertise",
                sub: "In toll & highway sector",
                bg: "bg-green-50",
                text: "text-green-700",
                accent: "bg-green-500/10",
              },
              {
                num: "32+",
                label: "States Covered",
                sub: "Pan-India operations",
                bg: "bg-slate-100",
                text: "text-[#0F2F4A]",
                accent: "bg-[#1E5A7A]/10",
              },
              {
                num: "99%",
                label: "Client Retention",
                sub: "Long-term partnerships",
                bg: "bg-green-50",
                text: "text-green-700",
                accent: "bg-green-500/10",
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`relative rounded-2xl p-6 ${card.bg} shadow-sm hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`absolute top-0 right-0 w-14 h-14 rounded-bl-[50px] ${card.accent}`}
                />

                <h3
                  className={`font-poppins text-3xl font-extrabold ${card.text}`}
                >
                  {card.num}
                </h3>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {card.label}
                </p>
                <p className="text-xs text-gray-500">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12"></div>

        {/* Highlights */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Core Service Areas
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 hover:border-[#1E5A7A] hover:text-[#1E5A7A] hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <CheckCircle2 size={16} className="text-green-500" />
              {item}
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E5A7A] to-[#0F2F4A] flex items-center justify-center">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>

            <div>
              <p className="font-poppins font-bold text-sm text-[#0F2F4A]">
                End-to-End Infrastructure Partner
              </p>
              <p className="text-xs text-gray-500">
                From planning to operations & maintenance
              </p>
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(76,175,80,0.2)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
