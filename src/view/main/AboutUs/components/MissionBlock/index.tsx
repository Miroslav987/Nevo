'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionBlock.module.scss'
import { Text } from '@shared/ui/Text';
import { aboutUs } from '../../model/adoutUs.mock';
const MissionBlock = () => {

    return (
        <div className={styles.missionBlock}>
            <div className={styles.rings}>
                <div className={styles.ringsWrapper}>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={styles.ring}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{
                                opacity: [0, 1, 0.7, 1],
                                scale: [0.5, 1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: 'easeInOut',
                                delay: i * 0.3,
                            }}
                            viewport={{ once: true }}
                            style={{ '--i': i } as React.CSSProperties}></motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ filter: 'blur(5px)', x: -20 }}
                whileInView={{ filter: 'blur(0px)', x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: '50% 0px -50% 0px' }}
                className={styles.missionInfo}>

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

            </motion.div>

        </div>

    );
};

export default MissionBlock;