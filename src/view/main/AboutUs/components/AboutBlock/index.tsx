"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutBlock.module.scss'
import { Text } from '@shared/ui/Text';
import AppImage from '@shared/ui/Image';
import cube from '@shared/icons/cube.svg'
import { aboutUs } from '../../model/adoutUs.mock';

const AboutBlock = () => {
    return (
        <div

            className={styles.aboutBlock}>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                className={styles.content}>

                <div>
                    <Text>О нас</Text>
                    <h2 dangerouslySetInnerHTML={{ __html: aboutUs.content_title }}></h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <div className={styles.cubeIcon}><AppImage src={cube} /></div>
                    <Text className={styles.subTitle}>{aboutUs.sub_title}</Text>
                </motion.div>

            </motion.div>
            <div className={styles.line}></div>
            <div className={styles.stats}>
                <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}>
                    <Text className={styles.statDescp}>{aboutUs.stat_descp}</Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={styles.statCard}>
                    <Text className={styles.statValue}>{aboutUs.stat_card.value}</Text>
                    <Text className={styles.statLabel}>{aboutUs.stat_card.label}</Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: '-70% 0px -70% 0px' }}
                    className={styles.statsComparison}>
                    <div className={styles.resultCard}>
                        <Text className={styles.resultValue}>{aboutUs.result_card.value}</Text>
                        <Text className={styles.resultLabel}>{aboutUs.result_card.label}</Text>
                    </div>
                    <div className={styles.companyCard}>
                        <Text className={styles.companyLabel}>Другие <br /> компании</Text>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: '-80% 0px -80% 0px' }} className={styles.verticalLine} ></motion.div>
            </div>
        </div>
    );
};

export default AboutBlock;