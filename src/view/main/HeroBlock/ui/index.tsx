import React from 'react';
import styles from './HeroBlock.module.scss'
import AppButton from '@shared/ui/Button';
import Image from 'next/image';
import arrow from '@shared/icons/arrow.svg'
import figure from '@shared/icons/figure_one.svg'
import laptop_elite from '@shared/imgs/laptop_elite.webp'
import laptop_baytash from '@shared/imgs/laptop_baytash.webp'
import { Text } from '@shared/ui/Text';


const HeroBlock = () => {
    return (
        <div className={styles.heroBlock}>
            <div className={styles.heroHeader}>
            <h1 >
                NevoDevs - <span>создаём технологии</span> сегодня, что бы вы лидировали завтра
            </h1>

            <div className={styles.casesPreviewBtns}>
                <AppButton className={styles.caseBtn}> <Text className={styles.text}> Наши кейсы </Text><div className={styles.arrow}><Image src={arrow} alt='стрелка'/></div></AppButton> 
            </div>

            <div className={styles.casesPreviewList}>
                <div className={styles.cardPreviewAboutUs}>
                    <div className={styles.cardImg}>
                    <Image src={figure} alt='фигура'/>
                    </div>
                    <Text> Мы разрабатываем сайты, онлайн-магазины и автоматизируем процессы, чтобы минимизировать ручной труд и увеличить вашу прибыль. Технологии, которые работают на вас – сегодня и в будущем.</Text>
                </div>
                <div className={styles.cardPreviewProject}>
                    <Image src={laptop_baytash} alt='фигура'/>
                    <Image src={laptop_elite} alt='фигура'/>
                </div>
            </div>
</div>
        </div>
    );
};

export default HeroBlock;