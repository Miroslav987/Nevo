'use client'

import { useDrawerStore } from '@entities/header/model/useDrawerStore'

import AppButton from '@shared/ui/AppButton'
import Icon from '@shared/ui/Icon/Icon'

import styles from './BurgerButton.module.scss'

export const BurgerButton = () => {
  const toggleDrawer = useDrawerStore((state) => state.toggle)

  return (
    <AppButton onClick={toggleDrawer} className={styles.burgerBtn}>
      <Icon name="burger_menu" />
    </AppButton>
  )
}
