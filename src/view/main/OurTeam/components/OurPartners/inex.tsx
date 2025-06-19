import AppImage from '@shared/ui/Image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './OurPartners.module.scss'
import { Autoplay } from 'swiper/modules';
import { ourPartners } from '../../model/ourPartners..mock';

const OurPartners = () => {
  const settingSwiper = {
    spaceBetween: 50,
    slidesPerView: 5,
    allowTouchMove: false,
        loop: true, // добавлен бесконечный цикл
    speed: 6000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  }
  return (
    <div className={styles.ourPartners}>
      <Swiper
        {...settingSwiper}
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

export default OurPartners;