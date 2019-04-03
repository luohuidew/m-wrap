export default {
  path: '/store',
  name: 'store-index',
  redirect: '/store/detail',
  component: () =>
    import('@/views/store/index'),
  meta: {
    title: '',
    keepAlive: true,
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
  },{
    path: 'list',
    name: 'store-list',
    component: () =>
      import('@/views/store/storeList'),
    meta: {
      title: 'Store list',
      keepAlive: false,
      fullScreen:true     
    },
  },{
    path: 'theme',
    name: 'store-theme',
    component: () =>
      import('@/views/store/storeTheme'),
    meta: {
      title: 'Store theme',
      keepAlive: true,
      fullScreen:false     
    },
  }]
}