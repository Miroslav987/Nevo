'use client'

import React from 'react'

import { motion } from 'framer-motion'

import AppImage from '@shared/ui/Image'
import { Text } from '@shared/ui/Text'

import { CardProject as CardProjectMock } from '../../model/ListOurProject.mock'

import styles from './CardProject.module.scss'

type CardProjectProps = {
  card: CardProjectMock
}

const CardProject = ({ card }: CardProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={styles.cardProject}
    >
      <div className={styles.mainImg}>
        <AppImage src={card.main_img} />
      </div>
      <div className={styles.info}>
        <div className={styles.infoImages}>
          <AppImage src={card.img_one} />
          <AppImage src={card.img_two} />
        </div>
        <div className={styles.infoText}>
          <Text className={styles.title}>{card.title}</Text>
          <div className={styles.description}>
            {card.description.map((text, i) => (
              <Text key={i} className={styles.text}>
                {text}{' '}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CardProject
