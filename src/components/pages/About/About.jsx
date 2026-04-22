import React from 'react'
import HeroSection from '../../section/About/HeroSection'
import WhoWeAre from '../../section/About/WhoWeAre'
import WhatWeDo from '../../section/About/WhatWeDo'
import OurExpertise from '../../section/About/OurExpertise'
import OurApproach from '../../section/About/OurApproach'
import MissionVision from '../../section/About/MissionVision'
import CoreValues from '../../section/About/CoreValues'
import CtaSection from '../../section/About/CtaSection'

function About() {
  return (
      <>
          <HeroSection />
          <WhoWeAre />
          <WhatWeDo />
          <OurExpertise />
          <OurApproach />
          <MissionVision />
          <CoreValues />
          <CtaSection/>
      </>
  )
}

export default About