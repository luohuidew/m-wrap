export default {
  path: '/popularize',
  name: 'popularize',
  redirect: '/popularize/popu-1',
  component: () => import('@/views/popularize'),
  children: [
    {
      path: 'popu-1',
      name: 'popu-1',
      component: () =>
          import('@/views/popularize/popu-1'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'popu-1/check',
      name: 'popu-1-check',
      component: () =>
          import('@/views/popularize/popu-1/checkStatus'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    }
  ]
}
