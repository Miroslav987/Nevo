'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { TechCard as TechCardMock } from 'view/main/AboutUs/model/adoutUs.mock'

import { Text } from '@shared/ui/Text'

import styles from './TechCard.module.scss'
import Icon from '@shared/ui/Icon/Icon'

type TechCardProps = {
  card: TechCardMock
  index: number
}

const TechCard = ({ card, index }: TechCardProps) => {
  return (
    <div className={styles.techCard}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true, margin: '-70% 0px -70% 0px' }}
        className={styles.info}
      >
        <Text>{card.title}</Text>
        <div className={styles.icon}>
          <Icon name={card.icon} />
        </div>
      </motion.div>
    </div>
  )
}

export default TechCard
