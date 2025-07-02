import { StaticImageData } from 'next/image'

import aboutProject from '@shared/icons/about_project.svg'
import aboutUs from '@shared/icons/about_us.svg'
import main from '@shared/icons/main.svg'

export interface ItemNav {
  icon: StaticImageData
  path: string
  title: string
}

export const itemNav: ItemNav[] = [
  {
    icon: main,
    path: '/',
    title: 'Главная',
  },
  {
    icon: aboutUs,
    path: '/about/us',
    title: 'О нас',
  },
  {
    icon: aboutProject,
    path: '/about/project',
    title: 'Наши проекты',
  },
]
