import React from 'react';
import styles from './HeaderBlock.module.scss'
import { Text } from '@shared/ui/Text';
import AppImage from '@shared/ui/Image';
import cube from '@shared/icons/cube.svg'
import { aboutUs } from '../../model/adoutUs.mock';

const HeaderBlock = () => {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.content}>
                <div>
                    <Text>О нас</Text>
                    <h2 dangerouslySetInnerHTML={{__html:aboutUs.content_title}}></h2>
                </div>
                <div>
                    <div className={styles.cubeIcon}><AppImage src={cube} /></div>
                    <Text className={styles.subTitle}>{aboutUs.sub_title}</Text>
                    <div>

                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.stats}>
                <Text className={styles.statDescp}>{aboutUs.stat_descp}</Text>
                <div className={styles.statCard}>
                    <Text className={styles.statValue}>{aboutUs.stat_card.value}</Text>
                    <Text className={styles.statLabel}>{aboutUs.stat_card.label}</Text>
                </div>
                <div className={styles.statsComparison}>
                    <div className={styles.resultCard}>
                        <Text className={styles.resultValue}>{aboutUs.result_card.value}</Text>
                        <Text className={styles.resultLabel}>{aboutUs.result_card.label}</Text>
                    </div>
                    <div className={styles.companyCard}>
                        <Text className={styles.companyLabel}>Другие <br /> компании</Text>
                    </div>
                </div>
                    <div className={styles.verticalLine} />
            </div>
        </div>
    );
};

export default HeaderBlock;