import React from 'react'

import AboutUs from './AboutUs'
import Hero from './Hero/ui'
import ListOurProject from './ListOurProject/ui'
import OurTeam from './OurTeam/ui'
import OurTariffPlans from './OurTariffPlans/OurTariffPlans'

const Main = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurTariffPlans/>
      <OurTeam />
      <ListOurProject />
    </>
  )
}

export default Main
