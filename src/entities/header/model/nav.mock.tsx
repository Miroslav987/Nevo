import { StaticImageData } from 'next/image'
import main from '@shared/icons/main.svg?url'
import aboutUs from '@shared/icons/about_us.svg?url'
import aboutProject from '@shared/icons/about_project.svg?url'


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

// export interface ItemNav {
//   icon: any
//   path: string
//   title: string
// }

// export const itemNav: ItemNav[] = [
//   {
//     icon: <Icon name="main" priority/>,
//     path: '/',
//     title: 'Главная',
//   },
//   {
//     icon: <Icon name='about_us' priority/>,
//     path: '/about/us',
//     title: 'О нас',
//   },
//   {
//     icon: <Icon name='about_us' priority/>,
//     path: '/about/project',
//     title: 'Наши проекты',
//   },
// ]
