export default {
  path: '/category',
  name: 'category',
  component: () =>
    import('@/views/category'),
  meta: {
    title: 'category',
    keepAlive: true,    
  }
  // redirect: '/checkout/index',
  // children: [{
  //   path: 'index',
  //   name: 'checkout',
  //   component: () =>
  //     import('@/pages/new/checkout/checkout'),
  //   meta: {
  //     title: 'checkout',
  //     // keepAlive: true,
  //     fullScreen: true
  //   }
  // }, ]
}