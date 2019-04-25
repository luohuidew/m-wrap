export default {
  path: '/search',
  name: 'search',
  component: () =>
    import('@/pages/search'),
  meta: {
    title: 'search',
    keepAlive: false,
  },
  redirect: '/search/search-home',
  children: [{
    path: 'search-home',
    name: 'search-home',
    component: () =>
      import('@/pages/search/search-home'),
    meta: {
      title: 'Category',
      keepAlive: false,
    },
  }, {
    path: 'search-query',
    name: 'search-query',
    component: () =>
      import('@/pages/search/search-query'),
    meta: {
      title: 'search query',
      keepAlive: false,
      fullScreen:true
    },
  }, {
    path: 'search-result',
    name: 'search-result',
    component: () =>
      import('@/pages/search/search-result'),
    meta: {
      title: 'search result',
      keepAlive: false,
    },
  }, {
    path: 'search-lists',
    name: 'search-lists',
    component: () =>
      import('@/pages/search/search-lists'),
    meta: {
      title: 'Query Lists',
      keepAlive: false,
    },
  },{
    path: 'search-store-lists',
    name: 'search-store-lists',
    component: () =>
      import('@/pages/search/search-store-lists'),
    meta: {
      title: 'Query Lists',
      keepAlive: false,
    },
  }],
}