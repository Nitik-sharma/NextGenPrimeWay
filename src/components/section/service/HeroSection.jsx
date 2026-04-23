import { Phone, MapPin, Activity, Clock, Shield } from "lucide-react";
import backgroundImage from "../../../assets/Images/pic18.jpeg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-inter">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
                  src={backgroundImage}
             alt="Highway"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F2F4A]/95 via-[#1E5A7A]/80 to-[#0F2F4A]/40" />

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-16 py-32 max-w-6xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2  border border-green-400/40 text-green-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur">
          <span className="w-2 h-2  rounded-full animate-pulse"></span>
          Infrastructure & Tolling Experts
        </div>

        {/* Heading */}
        <h1 className="font-poppins font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
          Delivering Smart{" "}
          <span className="text-green-500">Infrastructure</span> & <br />
          Tolling Solutions
        </h1>

        {/* Subheading */}
        <p className="text-white/80 max-w-xl text-base md:text-lg leading-relaxed mb-10">
          From advanced toll management systems to large-scale highway projects,
          we provide reliable, efficient, and technology-driven services that
          power modern transportation networks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-green-500/40"
          >
            <MapPin size={18} />
            Explore Services
          </a>

          <a
            href="#"
            className="flex items-center gap-2 border border-white/50 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur hover:bg-white/10"
          >
            <Phone size={18} />
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
          {[
            { num: "100+", label: "Projects Completed" },
            { num: "5+", label: "Years Experience" },
            { num: "32+", label: "States Covered" },
            { num: "99%", label: "Client Satisfaction" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white">
                {item.num.replace(/[+%]/, "")}
                <span className="text-green-500">{item.num.slice(-1)}</span>
              </h3>
              <p className="text-white/60 text-xs uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Card */}
      

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-xs uppercase tracking-widest">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse mb-2"></div>
        Scroll
      </div>
    </section>
  );
};

export default HeroSection;
