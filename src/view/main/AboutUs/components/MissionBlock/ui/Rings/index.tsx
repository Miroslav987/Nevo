import React from 'react'

import { motion } from 'framer-motion'

import styles from './Rings.module.scss'

const Rings = () => {
  return (
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
            style={{ '--i': i } as React.CSSProperties}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

export default Rings
