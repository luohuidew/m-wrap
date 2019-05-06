export default {
  path: '/checkout',
  name: 'checkout-view',
  component: () =>
    import('@/pages/new/checkout'),
  redirect: '/checkout/index',
  children: [
      {
    path: 'index',
    name: 'checkout',
    component: () =>
      import('@/pages/new/checkout/checkout'),
    meta: {
      title: 'checkout',
      // keepAlive: true,
    }
  },
    {
      path: 'pay',
      name: 'pay',
      component: () =>
          import('@/pages/new/checkout/pay'),
      meta: {
        title: 'pay',
        // keepAlive: true,
      }
    },
  ]
}
