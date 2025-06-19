'use client'

import React, { useState } from 'react';
import styles from './OurTeam.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

import arrow from '@shared/icons/arrow.svg'

import AppImage from '@shared/ui/Image';
import { Text } from '@shared/ui/Text';
import AppButton from '@shared/ui/Button';
import { ourTeam } from '../model/ourTeam.mock';
import OurPartners from '../components/OurPartners/inex';

const OurTeam = () => {
  const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
  const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    imageSwiper?.slidePrev();
    textSwiper?.slidePrev();
  };

  const handleNext = () => {
    imageSwiper?.slideNext();
    textSwiper?.slideNext();
  };
  const [imageSwiper2, setImageSwiper2] = useState<SwiperType | null>(null);

  const handlePrev2 = () => {
    imageSwiper2?.slidePrev();
    console.log(2);
    
  };

  const handleNext2 = () => {
    imageSwiper2?.slideNext();
  };

  const settingSwiper = {
    slidesPerView: 1,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    loop: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
    modules: [Autoplay, EffectFade],
  };

  const allSettingSwiper = {
    spaceBetween:100,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  };



  return (
    <div className={styles.ourTeam}>
      <div className='container'>
        <h2 className={styles.title}>Наша команда</h2>

        <div className={styles.teamWrapper}>
          <Swiper
            {...settingSwiper}
            onSwiper={setImageSwiper2}
            className={styles.swiperImage}
          >
            {ourTeam.map((e, i) =>
              <SwiperSlide key={i} className={styles.slideImage}>
                <AppImage src={e.img} />
                <div>
                  <div className={styles.mainInfo}>
                    <Text className={styles.name}>{e.name}</Text>
                    <Text className={styles.position}>{e.position}</Text>
                  </div>
                  <Text className={styles.quote}>
                    {e.quote}
                  </Text>
                </div>
              </SwiperSlide>
            )}
            <div className={styles.navigation}>
              <AppButton onClick={handlePrev2} className={styles.navButton}><AppImage src={arrow} /></AppButton>
              <AppButton onClick={handleNext2} className={styles.navButton}><AppImage src={arrow} /></AppButton>
            </div>
          </Swiper>

        </div>

        <div className={styles.teamWrapper2}>
          <Swiper
            {...allSettingSwiper}
            onSwiper={setImageSwiper}
            className={styles.swiperImage}
          >
            {ourTeam.map((e, i) =>
              <SwiperSlide key={i} className={styles.slideImage}>
                <AppImage src={e.img} />
              </SwiperSlide>
            )}
          </Swiper>

          <div className={styles.sectionSwiperAndNav}>
            <Swiper
              {...allSettingSwiper}
              onSwiper={setTextSwiper}
              className={styles.swiperText}
            >{ourTeam.map((e, i) =>
              <SwiperSlide key={i} className={styles.slideText}>
                <div className={styles.mainInfo}>
                  <Text className={styles.name}>{e.name}</Text>
                  <Text className={styles.position}>{e.position}</Text>
                </div>
                <Text className={styles.quote}>
                  {e.quote}
                </Text>
              </SwiperSlide>
            )}
          <div className={styles.navigation}>
            <AppButton onClick={handlePrev} className={styles.navButton}><AppImage src={arrow} /></AppButton>
            <AppButton onClick={handleNext} className={styles.navButton}><AppImage src={arrow} /></AppButton>
          </div>
            </Swiper>
          </div>
        </div>
        <OurPartners />
      </div>
    </div>
  );
};

export default OurTeam;
