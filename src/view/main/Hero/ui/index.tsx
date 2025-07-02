'use client'

import React from 'react'

import { motion } from 'framer-motion'

import arrow from '@shared/icons/arrow.svg'
import AppButton from '@shared/ui/Button'
import AppImage from '@shared/ui/Image'
import { Text } from '@shared/ui/Text'

import { hero } from '../model/hero.mock'

import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={`container ${styles.hero}`}>
      <div className={styles.heroHeader}>
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          dangerouslySetInnerHTML={{ __html: hero.mainText }}
        ></motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.casesPreviewBtns}
        >
          <AppButton className={styles.caseBtn}>
            {' '}
            <Text className={styles.text}> Наши кейсы </Text>
            <div className={styles.arrow}>
              <AppImage src={arrow} alt="стрелка" />
            </div>
          </AppButton>
        </motion.div>

        <motion.div className={styles.casesPreviewList}>
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(40% 40% 40% 40%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-80% 0px -80% 0px' }}
            className={styles.cardPreviewAboutUs}
          >
            <div className={styles.cardImg}>
              <AppImage src={hero.cardPreviewAboutUs.img} alt="фигура" />
            </div>
            <Text> {hero.cardPreviewAboutUs.text}</Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(40% 0% 40% 40%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-80% 0px -80% 0px' }}
            className={styles.cardPreviewProject}
          >
            <AppImage src={hero.cardPreviewProject.imgOne} />
            <AppImage src={hero.cardPreviewProject.imgTwo} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
