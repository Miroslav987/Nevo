import AppImage from '@shared/ui/Image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './OurPartnersCarousel.module.scss'
import { ourPartners } from '../../model/ourPartners..mock';
import { settingOurPartnersCarousel } from '../../model/settingOurPartnersCarousel';

const OurPartnersCarousel = () => {

  return (
    <div className={styles.ourPartners}>
      <Swiper
        {...settingOurPartnersCarousel}
        className={styles.swiperPartners}
      >
        {ourPartners.map((e, i) =>
          <SwiperSlide key={i} className={styles.partners}>
            <AppImage src={e} />
          </SwiperSlide>
        )}
      </Swiper>
      <div className={styles.shadows}></div>
    </div>
  );
};

export default OurPartnersCarousel;