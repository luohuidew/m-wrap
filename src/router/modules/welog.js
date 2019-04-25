export default {
  path: '/welog',
  name: 'welogLayout',
  component: () =>
    import('@/views/welog'),
  redirect: '/welog/index',
  meta: {
    title: 'welog',
    keepAlive: false
  },
  children: [

    {
      path: 'index',
      name: 'welog',
      component: () =>
        import('@/views/welog/welogList'),
      meta: {
        title: 'welog',
        keepAlive: false
      }
    },
    {
      path: 'theme',
      name: 'welogTheme',
      component: () =>
        import('@/views/welog/themeList'),
      meta: {
        title: 'welog theme',
        keepAlive: false
      }
    },
    {
      path: 'me',
      name: 'welogMe',
      component: () =>
        import('@/views/welog/welogMe'),
      meta: {
        title: 'welog',
        keepAlive: false
      }
    },
    {
      path: 'detail',
      name: 'detail',
      component: () =>
        import('@/views/welog/welogDetail'),
      meta: {
        title: 'welog',
        keepAlive: false,
      }
    },
  ]
}