import React from 'react'

import { navItems } from '@entities/footer/model/nav.mock'

import styles from './FooterNav.module.scss'
import LinksGroup from './components/LinksGroup'

const FooterNav = () => {
  return (
    <nav className={styles.footerNav}>
      {navItems.map((item, i) => (
        <LinksGroup key={i} item={item} />
      ))}
    </nav>
  )
}

export default FooterNav
