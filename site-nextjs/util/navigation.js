const getPages = (filterId = '') => {
  const pages = [
    {
      title: 'Werk',
      href: '/'
    },
    // {
    //   title: 'Logo & Identity',
    //   href: '/#identity',
    //   category: 'logo & identity'
    // },
    // {
    //   title: 'User Interface',
    //   href: '/#ui',
    //   category: 'user'
    // },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Say Hi',
      href: '/contact'
    },
    {
      title: 'Résumé',
      href: '/resume'
    }
  ]

  return filterId
    ? pages.filter(page => {
        return page.id === filterId
      })
    : pages
}

export { getPages }