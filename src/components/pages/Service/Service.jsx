import React from 'react'
import HeroSection from '../../section/service/HeroSection'
import ServicesOverview from '../../section/service/ServicesOverview'
import CoreServices from '../../section/service/CoreServices'
import NextGenSections from '../../section/service/Nextgensections'

function Service() {
  return (
      <>
          <HeroSection />
          <ServicesOverview />
          <CoreServices />
          <NextGenSections/>
      </>
  )
}

export default Service