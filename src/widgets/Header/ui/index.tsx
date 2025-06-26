'use client'

import { BurgerButton } from '@entities/header/ui/BurgerButton'
import { MobileNavDrawer } from '@entities/header/ui/MobileNavDrawer'
import { NavButtons } from '@entities/header/ui/NavButtons'

import AppLogo from '@shared/ui/AppLogo'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <nav>
        <AppLogo />
        <NavButtons />
        <BurgerButton />
        <MobileNavDrawer />
      </nav>
    </header>
  )
}

export default Header
