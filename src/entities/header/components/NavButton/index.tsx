import React from 'react'

import { Typography } from 'antd'
import { ItemNav } from '@entities/header/model/nav.mock'

import AppButton from '@shared/ui/AppButton'

import styles from './NavButton.module.scss'
import Icon from '@shared/ui/Icon/Icon'

// import { usePathname } from 'next/navigation';
const { Text } = Typography

type NavButtonProps = {
  item: ItemNav
  isMob?: boolean
  isActive: string // временно
  handleNav: (path: string) => void
}

const NavButton = ({ item, isMob, isActive, handleNav }: NavButtonProps) => {
  // const pathname = usePathname()
  // const isActive = pathname === item.path;
  return (
    <AppButton
      onClick={() => handleNav(item.path)}
      className={`${styles.navButton} ${isActive === item.path && !isMob && styles.active}`}
    >
      <Icon name={item.icon} priority/><Text>{item.title}</Text>
    </AppButton>
  )
}

export default NavButton
