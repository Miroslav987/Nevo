import React from 'react'

import Link from 'next/link'

import { ItemsNav } from '@entities/footer/model/nav.mock'

import { Text } from '@shared/ui/Text'

import styles from './LinksGroup.module.scss'

type LinksGroupProps = {
  item: ItemsNav
}

const LinksGroup = ({ item }: LinksGroupProps) => {
  return (
    <div className={styles.linksGroup}>
      <Text className={styles.title}>{item.title}</Text>
      <div className={styles.links}>
        {item.links.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LinksGroup
