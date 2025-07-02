import React from 'react'

import { footer } from '@entities/footer/model/footer.mock'

import { Text } from '@shared/ui/Text'

import styles from './FooterBrand.module.scss'

const FooterBrand = () => {
  return (
    <div className={styles.footerBranding}>
      <Text className={styles.slogan}>{footer.slogan}</Text>
      <Text className={styles.signature}>{footer.signature}</Text>
    </div>
  )
}

export default FooterBrand
