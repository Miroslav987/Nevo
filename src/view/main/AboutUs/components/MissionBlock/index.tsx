import React from 'react';
import styles from './MissionBlock.module.scss'
import { Text } from '@shared/ui/Text';
import { aboutUs } from '../../model/adoutUs.mock';
const MissionBlock = () => {
    return (
        <div className={styles.missionBlock}>
            <div className={styles.rings}>
                <div className={styles.ringsWrapper}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={styles.ring} style={{ '--i': i } as React.CSSProperties}></div>
                    ))}
                </div>
            </div>

            <div className={styles.missionInfo}>

                <div className={styles.mainInfo}>
                    {aboutUs.mission_main_titles.map((title, i) =>
                        <Text key={i}>{title}<br /></Text>
                    )}

                </div>
                <div className={styles.info}>
                    {aboutUs.mission_info_textes.map((text, i) =>
                        <Text key={i}>{text}</Text>
                    )}
                </div>

            </div>

        </div>

    );
};

export default MissionBlock;