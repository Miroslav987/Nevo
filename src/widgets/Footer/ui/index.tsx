'use client'

import React from 'react'

import { motion } from 'framer-motion'

import CTAButton from '@features/CTAButton/inex'

import CTAHeading from '@entities/footer/ui/CTAHeading'
import FooterBrand from '@entities/footer/ui/FooterBrand'
import FooterNav from '@entities/footer/ui/FooterNav'
import FooterText from '@entities/footer/ui/FooterText'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className={`container ${styles.content}`}
      >
        <div className={styles.linksAndCTA}>
          <CTAHeading />
          <FooterNav />
        </div>

        <FooterText />

        <div className={styles.btnBlock}>
          <CTAButton />
        </div>

        <FooterBrand />
      </motion.div>
    </footer>
  )
}

export default Footer
