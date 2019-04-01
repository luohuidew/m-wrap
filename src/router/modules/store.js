export default {
  path: '/store',
  name: 'store-index',
  redirect: '/store/detail',
  component: () =>
    import('@/views/store/index'),
  meta: {
    title: '',
    keepAlive: false,
    fullScreen: true
  },
  children: [{
    path: 'detail',
    name: 'store-detail',
    component: () =>
      import('@/views/store/storeDetail'),
    meta: {
      title: 'store',
      keepAlive: false,
      fullScreen: true
    },
  },{
    path: 'info',
    name: 'store-info',
    component: () =>
      import('@/views/store/storeInfo'),
    meta: {
      title: 'Store Info',
      keepAlive: false,     
    },
  },{
    path: 'category',
    name: 'store-category',
    component: () =>
      import('@/views/store/storeCategory'),
    meta: {
      title: 'Store cate',
      keepAlive: false,
      fullScreen:true     
    },
  }]
}