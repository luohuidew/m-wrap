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
  children: [{
      path: 'index',
      name: 'welog',
      component: () =>
        import('@/views/welog/welog'),
      meta: {
        title: 'welog',
        keepAlive: false
      }
    }
  ]
}