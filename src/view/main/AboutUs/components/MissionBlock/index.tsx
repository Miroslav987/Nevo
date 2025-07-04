'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { Text } from '@shared/ui/Text'

import { aboutUs } from '../../model/adoutUs.mock'

import styles from './MissionBlock.module.scss'
import Rings from './ui/Rings'

const MissionBlock = () => {
  return (
    <div className={styles.missionBlock}>
      <Rings />

      <motion.div
        initial={{ filter: 'blur(5px)', x: -20 }}
        whileInView={{ filter: 'blur(0px)', x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: '50% 0px -50% 0px' }}
        className={styles.missionInfo}
      >
        <div className={styles.mainInfo}>
          {aboutUs.mission_main_titles.map((title, i) => (
            <Text key={i}>
              {title}
              <br />
            </Text>
          ))}
        </div>
        <div className={styles.info}>
          {aboutUs.mission_info_textes.map((text, i) => (
            <Text key={i}>{text}</Text>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default MissionBlock
