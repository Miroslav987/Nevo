export interface ItemsNav {
  title: string
  links: Link[]
}

export interface Link {
  label: string
  path: string
}

export const navItems: ItemsNav[] = [
  {
    title: 'РАЗДЕЛЫ',
    links: [
      { label: 'Главная', path: '/' },
      { label: 'О нас', path: '/about' },
      { label: 'Наша команда', path: '/team' },
      { label: 'Кейсы работ', path: '/cases' },
    ],
  },
  {
    title: 'ПОЛЕЗНАЯ ИНФОРМАЦИЯ',
    links: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Оплата', path: '/payment' },
      { label: 'Наши контакты', path: '/contacts' },
    ],
  },
]
