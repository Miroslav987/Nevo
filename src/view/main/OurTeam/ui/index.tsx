'use client'
import React from 'react';
import styles from './OurTeam.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '@shared/imgs/laptop_baytash.webp'
import img2 from '@shared/imgs/laptop_elite.webp'
import 'swiper/css';
import AppImage from '@shared/ui/Image';
const OurTeam = () => {
    return (
        <div className={styles.ourTeam}>
            <h2>Наша команда</h2>

    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className={styles.swiperTeamImg}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.slideTeam}><AppImage src={img1}/></SwiperSlide>
      <SwiperSlide className={styles.slideTeam}><AppImage src={img2}/></SwiperSlide>
      <SwiperSlide className={styles.slideTeam}><AppImage src={img1}/></SwiperSlide>
      <SwiperSlide className={styles.slideTeam}><AppImage src={img2}/></SwiperSlide>
      
    </Swiper>
            
        </div>
    );
};

export default OurTeam;