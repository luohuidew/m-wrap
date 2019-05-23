export default {
  path: '/popularize',
  name: 'popularize',
  redirect: '/popularize/popu-1',
  component: () => import('@/views/popularize'),
  children: [
    {
      path: 'popu8',
      name: 'popu8',
      component: () =>
          import('@/views/popularize/popu-1/index2'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
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
    },
    {
      path: 'popu-1/share',
      name: 'popu-1-share',
      component: () =>
          import('@/views/popularize/popu-1/share'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'login',
      name: 'login-index',
      redirect: '/popularize/login/index',
      component: () =>
          import('@/views/popularize/login/index'),
      children: [{
        path: 'index',
        name: 'login-signup',
        component: () =>
            import('@/views/popularize/login/login'),
        meta: {
          title: 'login',
          keepAlive: false,
          fullScreen: false,
          noBack: true
        },
      },
        {
          path: 'reset-email',
          name: 'lreset-email',
          component: () =>
              import('@/views/popularize/login/resetEmail'),
          meta: {
            title: 'resetEmail',
            keepAlive: false,
            fullScreen: true
          },
        },
        {
          path: 'reset-success',
          name: 'reset-success',
          component: () =>
              import('@/views/popularize/login/resetSuccess'),
          meta: {
            title: 'resetSuccess',
            keepAlive: false,
            fullScreen: true
          },
        },
      ]
    },
    {
      path: 'active',
      name: 'popu-active',
      component: () =>
          import('@/views/popularize/active/index'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
  ]
}
