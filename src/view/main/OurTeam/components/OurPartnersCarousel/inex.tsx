import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import AppImage from '@shared/ui/Image'

import { ourPartners } from '../../model/ourPartners..mock'
import { settingOurPartnersCarousel } from '../../model/settingOurPartnersCarousel'

import styles from './OurPartnersCarousel.module.scss'

const OurPartnersCarousel = () => {
  return (
    <div className={styles.ourPartners}>
      <Swiper {...settingOurPartnersCarousel} className={styles.swiperPartners}>
        {ourPartners.map((e, i) => (
          <SwiperSlide key={i} className={styles.partners}>
            <AppImage name={e} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.shadows}></div>
    </div>
  )
}

export default OurPartnersCarousel
