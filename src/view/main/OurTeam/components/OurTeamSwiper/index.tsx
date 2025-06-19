'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import styles from './OurTeamSwiper.module.scss'
import 'swiper/css';
import arrow from '@shared/icons/arrow.svg'
import AppImage from '@shared/ui/Image';
import { Text } from '@shared/ui/Text';
import AppButton from '@shared/ui/Button';
import { ourTeam } from '../../model/ourTeam.mock';
import { settingOurTeamSwiper } from '../../model/settingOurTeamSwiper';

const OurTeamSwiper = () => {
    const [imageSwiper, setImageSwiper] = useState<SwiperType | null>(null);
    const [textSwiper, setTextSwiper] = useState<SwiperType | null>(null);

    const handlePrev = () => {
        imageSwiper?.autoplay?.stop();
        textSwiper?.autoplay?.stop();

        imageSwiper?.slidePrev(300);
        textSwiper?.slidePrev(300);

        imageSwiper?.autoplay?.start();
        textSwiper?.autoplay?.start();
    };

    const handleNext = () => {
        imageSwiper?.autoplay?.stop();
        textSwiper?.autoplay?.stop();

        imageSwiper?.slideNext(300);
        textSwiper?.slideNext(300);

        imageSwiper?.autoplay?.start();
        textSwiper?.autoplay?.start();
    };


    return (
        <div className={styles.ourTeamSwiper}>
            <Swiper
                {...settingOurTeamSwiper}
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
                    {...settingOurTeamSwiper}
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
                </Swiper>
                <div className={styles.navigation}>
                    <AppButton onClick={handlePrev} className={styles.navButton}><AppImage src={arrow} /></AppButton>
                    <AppButton onClick={handleNext} className={styles.navButton}><AppImage src={arrow} /></AppButton>
                </div>
            </div>
        </div>
    );
};

export default OurTeamSwiper;