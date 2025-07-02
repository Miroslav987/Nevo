import React from 'react'

import { footer } from '@entities/footer/model/footer.mock'

import { Text } from '@shared/ui/Text'

import styles from './FooterText.module.scss'

const FooterText = () => {
  return (
    <div className={styles.text}>
      <Text>{footer.text}</Text>
    </div>
  )
}

export default FooterText
