export default {
  path: '/cart',
  name: 'cart',
  component: () =>
    import('@/pages/new/cart'),
  redirect: '/cart/index',
  meta: {
    title: 'cart',
    keepAlive: false,
  },
  children: [{
      path: 'index',
      name: 'index',
      component: () =>
        import('@/pages/new/cart/cart'),
      meta: {
        title: 'cart',
        keepAlive: false,
        fullScreen:true
      }
    }
  ]
}