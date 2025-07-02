'use client'

import { Drawer } from 'antd'

import { useDrawerStore } from '@entities/header/model/useDrawerStore'
import { NavButtons } from '@entities/header/ui/NavButtons'

export const MobileNavDrawer = () => {
  const { close, isOpen } = useDrawerStore((state) => state)

  return (
    <Drawer
      placement="top"
      onClose={close}
      open={isOpen}
      rootStyle={{
        top: 125,
        height: 240,
        borderRadius: 30,
        overflow: 'hidden',
        margin: '0 15px',
      }}
      mask={false}
      closable={false}
    >
      <NavButtons isMob={true} />
    </Drawer>
  )
}
