import { useEffect, useRef, useState } from "react";
import AboutImage from "../../../assets/Images/About section.avif";

const features = [
  "Toll Management",
  "Road & Highway Projects",
  "Smart Infrastructure",
  "Bridge Construction",
  "Traffic Systems",
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[88px] px-8 font-['Inter'] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-[72px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* LEFT */}
        <div
          className={`relative transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {/* green accent bar */}
          <div className="absolute left-[-16px] top-5 bottom-5 w-[5px] bg-gradient-to-b from-[#22a05b] to-[#1a6fc4] rounded z-[1]" />

          <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(13,58,110,0.18)]">
            <img
              src={AboutImage}
              alt="NextGen PrimeWay infrastructure highway project"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </div>

          {/* badge */}
          <div className="absolute bottom-[-20px] right-[-20px] bg-[#0d3a6e] text-white rounded-[16px] px-6 py-4 text-center shadow-[0_12px_32px_rgba(13,58,110,0.28)] z-[2]">
            <span className="block text-[28px] font-extrabold text-[#22a05b] leading-none font-['Poppins']">
              15+
            </span>
            <span className="block text-[11px] text-[#a0b8d0] mt-1 whitespace-nowrap">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* eyebrow */}
          <p className="flex items-center gap-2 text-[12px] font-semibold tracking-[2.5px] uppercase text-[#22a05b] mb-4 font-['Poppins']">
            <span className="w-7 h-[2px] bg-[#22a05b] rounded"></span>
            About Us
          </p>

          {/* heading */}
          <h2 className="text-[36px] font-extrabold text-[#0d3a6e] leading-tight mb-2 font-['Poppins'] max-[900px]:text-[28px]">
            NextGen <span className="text-[#22a05b]">PrimeWay</span>
            <br />
            Solutions LLP
          </h2>

          {/* subheading */}
          <p className="text-[16px] font-semibold text-[#1a6fc4] italic mb-5 font-['Poppins']">
            Pioneers in Infrastructure Development
          </p>

          {/* description */}
          <p className="text-[15px] text-[#4a5568] leading-[1.8] mb-8">
            Welcome to NextGen PrimeWay Solutions LLP, where innovation meets
            excellence in infrastructure development. We specialize in toll
            management, road & highway projects, and smart infrastructure
            solutions, delivering projects that drive growth & connectivity
            across the nation.
          </p>

          {/* features */}
          <div className="flex flex-wrap gap-2 mb-9">
            {features.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 bg-[#f0f7ff] border border-[#b5d4f4] text-[#0d3a6e] text-[13px] font-medium px-3.5 py-1.5 rounded-full transition hover:bg-[#e1f5ea] hover:border-[#22a05b] hover:text-[#0d5c32]"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-[#22a05b]" />
                {f}
              </span>
            ))}
          </div>

          {/* button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0d3a6e] to-[#1a6fc4] text-white text-[14px] font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_24px_rgba(26,111,196,0.3)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,111,196,0.4)] font-['Poppins']"
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
