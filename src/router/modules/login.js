export default {
  path: '/login',
  name: 'login-index',
  redirect: '/login/index', 
  component: () =>
  import('@/views/login'),
  children: [{
    path: 'index',
    name: 'login-signup',
    component: () =>
      import('@/views/login/login'),
    meta: {
      title: 'login',
      keepAlive: false,
      fullScreen: true
    },
  },
  {
    path: 'reset-email',
    name: 'lreset-email',
    component: () =>
      import('@/views/login/resetEmail'),
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
      import('@/views/login/resetSuccess'),
    meta: {
      title: 'resetSuccess',
      keepAlive: false,
      fullScreen: true
    },
  },
]
}