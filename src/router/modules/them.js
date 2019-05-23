export default {
  path: '/article',
  name: 'article',
  component: () =>
    import('@/pages/article'),
  redirect: '/article/ac-1',
  meta: {
    title: 'article',
    keepAlive: false,
    fullScreen: true

  },
  children: [{
      path: 'ac-1',
      name: 'ac-1',
      component: () =>
        import('@/pages/article/ac-1'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    }, {
      path: 'ac-2',
      name: 'ac-2',
      component: () =>
        import('@/pages/article/ac-2'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    }, {
      path: 'ac-3',
      name: 'ac-3',
      component: () =>
        import('@/pages/article/ac-3'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-4',
      name: 'ac-4',
      component: () =>
        import('@/pages/article/ac-4'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-5',
      name: 'ac-5',
      component: () =>
        import('@/pages/article/ac-5'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-6',
      name: 'ac-6',
      component: () =>
        import('@/pages/article/ac-6'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-7',
      name: 'ac-7',
      component: () =>
        import('@/pages/article/ac-7'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-8',
      name: 'ac-8',
      component: () =>
        import('@/pages/article/ac-8'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    }, {
      path: 'ac-9',
      name: 'ac-9',
      component: () =>
        import('@/pages/article/ac-9'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-10',
      name: 'ac-10',
      component: () =>
        import('@/pages/article/ac-10'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'active',
      name: 'articleActive',
      component: () =>
          import('@/pages/article/ac-10-active'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active2',
      name: 'articleActive2',
      component: () =>
          import('@/pages/article/ac-10-active2'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active3',
      name: 'articleActive3',
      component: () =>
          import('@/pages/article/ac-10-active3'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active4',
      name: 'articleActive4',
      component: () =>
          import('@/pages/article/ac-10-active4'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active5',
      name: 'articleActive5',
      component: () =>
          import('@/pages/article/ac-10-active5'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active6',
      name: 'articleActive6',
      component: () =>
          import('@/pages/article/ac-10-active6'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active7',
      name: 'articleActive7',
      component: () =>
          import('@/pages/article/ac-10-active7'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active8',
      name: 'articleActive8',
      component: () =>
          import('@/pages/article/ac-10-active8'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active9',
      name: 'articleActive9',
      component: () =>
          import('@/pages/article/ac-10-active9'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active10',
      name: 'articleActive10',
      component: () =>
          import('@/pages/article/ac-10-active10'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active11',
      name: 'articleActive11',
      component: () =>
          import('@/pages/article/ac-10-active11'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active12',
      name: 'articleActive12',
      component: () =>
          import('@/pages/article/ac-10-active12'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },
    {
      path: 'active13',
      name: 'articleActive13',
      component: () =>
          import('@/pages/article/ac-10-active13'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: false
      }
    },

    {
      path: 'ac-11',
      name: 'ac-11',
      component: () =>
        import('@/pages/article/ac-11'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: 'ac-12',
      name: 'ac-12',
      component: () =>
        import('@/pages/article/ac-12'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    }
  ]
}
