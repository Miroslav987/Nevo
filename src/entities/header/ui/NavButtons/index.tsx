'use client'

import { useState } from 'react'

import NavButton from '@entities/header/components/NavButton'
// import { useRouter } from 'next/navigation';
import { itemNav } from '@entities/header/model/nav.mock'
import { useDrawerStore } from '@entities/header/model/useDrawerStore'

import styles from './NavButtons.module.scss'

type NavButtonsProps = {
  isMob?: boolean
}

export const NavButtons = ({ isMob }: NavButtonsProps) => {
  //   const router = useRouter();
  const close = useDrawerStore((state) => state.close)
  const [isActive, useIsActive] = useState('/') // временно

  const handleNav = (path: string) => {
    useIsActive(path)
    close()
    // router.push(path);
  }

  return (
    <div className={`${styles.navButtons} ${isMob && styles.navButtonsMob} `}>
      {itemNav.map((item, i) => (
        <NavButton key={i} item={item} isMob={isMob} isActive={isActive} handleNav={handleNav} />
      ))}
    </div>
  )
}
