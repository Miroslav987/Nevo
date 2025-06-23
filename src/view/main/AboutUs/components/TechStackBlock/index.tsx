"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TechStackBlock.module.scss'
import { Text } from '@shared/ui/Text';
import { aboutUs } from '../../model/adoutUs.mock';
import TechCard from './components/TechCard';

const TechStackBlock = () => {
    return (
        <div className={styles.techStackBlock}>
            {aboutUs.techCards.map((card, i) =>
                <TechCard key={i} card={card} index={i} />
            )}
            <motion.div 
                initial={{ opacity: 0, y: 50, x:50 }}
                whileInView={{ opacity: 1, y: 0, x:20 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: '-70% 0px -70% 0px'}}
                 className={styles.toolsCard}>
                <Text className={styles.toolsTitle}>Технологии и инструменты:</Text>
                <div className={styles.toolsInfo}>
                    <Text className={styles.toolsFront}>{aboutUs.tools_front}</Text>
                    <Text className={styles.toolsBack}>{aboutUs.tools_back}</Text>
                </div>
            </motion.div>
        </div>
    );
};

export default TechStackBlock;