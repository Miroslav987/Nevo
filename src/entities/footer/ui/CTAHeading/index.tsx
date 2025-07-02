import React from 'react'

import { footer } from '@entities/footer/model/footer.mock'

import styles from './CTAHeading.module.scss'

const CTAHeading = () => {
  return <h2 className={styles.ctaheading} dangerouslySetInnerHTML={{ __html: footer.ctaHeading }}></h2>
}

export default CTAHeading
