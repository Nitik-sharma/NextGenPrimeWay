import React from "react";
import HeroSection from "../../section/Home/HeroSection";
import ServicesSection from "../../section/service/ServicesSection";
import AboutSection from "../../section/About/Aboutsection";

function GreenWaveDivider() {
  return (
    <div style={{ lineHeight: 0, position: "relative", overflow: "hidden" }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "60px" }}
      >
        <path
          d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill="#22a05b"
        />
        <path
          d="M0,30 C360,70 1080,10 1440,40 L1440,60 L0,60 Z"
          fill="#1a8a4a"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <GreenWaveDivider />
          <ServicesSection />
          <AboutSection/>
    </>
  );
}

export default Home;
