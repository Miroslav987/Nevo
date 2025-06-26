'use client'

import React from 'react'

import { motion } from 'framer-motion'

import CardProject from '../components/CardProject'
import { listOurProject } from '../model/ListOurProject.mock'

import styles from './ListOurProject.module.scss'

const ListOurProject = () => {
  return (
    <div className={`container ${styles.ourProject}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Ознакомьтесь с кейсами работ нашей студии IT Разработки
      </motion.h2>

      <div className={styles.listProject}>
        {listOurProject.map((card, i) => (
          <CardProject key={i} card={card} />
        ))}
      </div>
    </div>
  )
}

export default ListOurProject
