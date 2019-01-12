import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active-route',
  routes: [  
    {
      path: '/test',
      name: 'test',
      component: () =>
        import('@/pages/test'),
      meta: {
        title: 'test',
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import('@/pages/login'),
      meta: {
        title: 'login',
        keepAlive: false
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: () =>
        import('@/pages/login/logout'),
    },
    {
      path: '/reset-pass',
      name: 'reset-pass',
      component: () =>
        import('@/pages/reset-pass'),
    },
    {
      path: '/statement',
      name: 'statement',
      component: () =>
        import('@/pages/statement'),
      meta: {
        title: 'Statement',
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import('@/pages/about'),
      meta: {
        title: 'About US',
        keepAlive: false
      }
    },
    {
      path: '/article',
      name: 'article',
      component: () =>
        import('@/pages/article'),
      redirect: '/article/ac-1',
      meta: {
        title: 'article',
        keepAlive: false
      },
      children: [{
        path: 'ac-1',
        name: 'ac-1',
        component: () =>
          import('@/pages/article/ac-1'),
        meta: {
          title: '',
          keepAlive: false
        }
      }, {
        path: 'ac-2',
        name: 'ac-2',
        component: () =>
          import('@/pages/article/ac-2'),
        meta: {
          title: '',
          keepAlive: false
        }
      }, {
        path: 'ac-3',
        name: 'ac-3',
        component: () =>
          import('@/pages/article/ac-3'),
        meta: {
          title: '',
          keepAlive: false
        }
      },
      {
        path: 'ac-4',
        name: 'ac-4',
        component: () =>
          import('@/pages/article/ac-4'),
        meta: {
          title: '',
          keepAlive: false
        }
      },
      {
        path: 'ac-5',
        name: 'ac-5',
        component: () =>
          import('@/pages/article/ac-5'),
        meta: {
          title: '',
          keepAlive: false
        }
      },
      {
        path: 'ac-6',
        name: 'ac-6',
        component: () =>
          import('@/pages/article/ac-6'),
        meta: {
          title: '',
          keepAlive: false
        }
      }
    ]
    },

    {
      path: '/nopostal',
      name: 'nopostal',
      component: () =>
        import('@/pages/nopostal'),
      meta: {
        title: 'No postal rules',
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import('@/pages/home'),
      redirect: '/home/weget',
      children: [{
          path: 'weget',
          name: 'weget',
          component: () =>
            import('@/pages/home/weget.vue'),
          meta: {
            title: 'Weget',
            keepAlive: false,
            type: 'list'
          }
        },
        {
          path: '/activity',
          name: 'activity',
          component: () =>
            import('@/pages/activity'),
          redirect: '/activity/free',
          children: [{
              path: 'free',
              name: 'free',
              component: () =>
                import('@/pages/activity/free'),
              meta: {
                title: 'Freebies',
                keepAlive: false
              }
            },
            {
              path: 'free-detail',
              name: 'free_detail',
              component: () =>
                import('@/pages/activity/free/detail'),
              meta: {
                title: 'Detail',
                keepAlive: false
              }
            },
            {
              path: 'free-apply',
              name: 'free_apply',
              component: () =>
                import('@/pages/activity/free/apply'),
              meta: {
                title: 'Apply',
                keepAlive: false
              }
            },
            {
              path: 'free-submit',
              name: 'free_submit',
              component: () =>
                import('@/pages/activity/free/submit'),
              meta: {
                title: 'Apply Success',
                keepAlive: false
              }
            },
            {
              path: 'free-fail',
              name: 'free_fail',
              component: () =>
                import('@/pages/activity/free/fail'),
              meta: {
                title: 'Apply fail',
                keepAlive: false
              }
            },
            {
              path: 'free-list',
              name: 'free_list',
              component: () =>
                import('@/pages/activity/free/list'),
              meta: {
                title: 'Goods Lists',
                keepAlive: false
              }
            },           
            {
              path: 'christmas',
              name: 'christmas',
              component: () =>
                import('@/pages/activity/christmas'),
              meta: {
                title: 'christmas home',
                keepAlive: true
              }
            },            
            {
              path: 'christmas-lists',
              name: 'christmas-lists',
              component: () =>
                import('@/pages/activity/christmas/lists'),
              meta: {
                title: 'christmas-lists',
                keepAlive: false
              }
            },
            {
              path: 'christmas-download',
              name: 'christmas-download',
              component: () =>
                import('@/pages/activity/christmas/download'),
              meta: {
                title: 'christmas-download',
                keepAlive: false
              }
            },
            {
              path: 'christmas-norepeat',
              name: 'christmas-norepeat',
              component: () =>
                import('@/pages/activity/christmas/norepeat'),
              meta: {
                title: 'christmas-norepeat',
                keepAlive: false
              }
            },
            {
              path: 'christmas-groupbuy',
              name: 'christmas-groupbuy',
              component: () =>
                import('@/pages/activity/christmas/groupbuy'),
              meta: {
                title: 'christmas-groupbuy',
                keepAlive: true
              }
            }, {
              path: 'christmas-during',
              name: 'christmas-during',
              component: () =>
                import('@/pages/activity/christmas/during/index.vue'),
              meta: {
                title: 'christmas-during',
                keepAlive: false
              }
            },{
              path: 'christmas-detail',
              name: 'christmas-detail',
              component: () =>
                import('@/pages/activity/christmas/detail.vue'),
              meta: {
                title: 'christmas-detail',
                keepAlive: false
              }
            },{
              path: 'christmas-gift',
              name: 'christmas-gift',
              component: () =>
                import('@/pages/activity/christmas/christmas-gift.vue'),
              meta: {
                title: 'christmas-gift',
                keepAlive: false
              }
            },
            {
              path: 'popballoons',
              name: 'popballoons',
              redirect: '/activity/popballoons/popballoons-home',
              component: () =>
                import('@/pages/activity/popballoons'),
              meta: {
                title: 'popballoons home',
                keepAlive: true
              },
              children:[
                {
                  path: 'popballoons-home',
                  name: 'popballoons-home',
                  component: () =>
                    import('@/pages/activity/popballoons/home'),
                  meta: {
                    title: 'popballoons home',
                    keepAlive: false
                  }
                },
                {
                  path: 'popballoons-lists',
                  name: 'popballoons-lists',
                  component: () =>
                    import('@/pages/activity/popballoons/lists'),
                  meta: {
                    title: 'popballoons-lists',
                    keepAlive: false
                  }
                },
                {
                  path: 'popballoons-download',
                  name: 'popballoons-download',
                  component: () =>
                    import('@/pages/activity/popballoons/download'),
                  meta: {
                    title: 'popballoons-download',
                    keepAlive: false
                  }
                },
                {
                  path: 'popballoons-results',
                  name: 'popballoons-results',
                  component: () =>
                    import('@/pages/activity/popballoons/results'),
                  meta: {
                    title: 'popballoons-results',
                    keepAlive: false
                  }
                },
                {
                  path: 'popballoons-groupbuy',
                  name: 'popballoons-groupbuy',
                  component: () =>
                    import('@/pages/activity/popballoons/groupbuy'),
                  meta: {
                    title: 'popballoons-groupbuy',
                    keepAlive: true
                  }
                }, {
                  path: 'popballoons-during',
                  name: 'popballoons-during',
                  component: () =>
                    import('@/pages/activity/popballoons/during/index.vue'),
                  meta: {
                    title: 'popballoons-during',
                    keepAlive: false
                  }
                },{
                  path: 'popballoons-detail',
                  name: 'popballoons-detail',
                  component: () =>
                    import('@/pages/activity/popballoons/detail.vue'),
                  meta: {
                    title: 'popballoons-detail',
                    keepAlive: false
                  }
                },{
                  path: 'popballoons-gift',
                  name: 'popballoons-gift',
                  component: () =>
                    import('@/pages/activity/popballoons/gift.vue'),
                  meta: {
                    title: 'popballoons-gift',
                    keepAlive: false
                  }
                },
              ]
            },                       
          ]
        },
        {
          path: 'me',
          name: 'me',
          component: () =>
            import('@/pages/home/me.vue'),
        },
      ]
    }, {
      path: '/detail',
      name: 'detail',
      component: () =>
        import('@/pages/detail'),
      meta: {
        title: 'Goods details',
        keepAlive: false
      }
      //    redirect: '/detail/',
    }, {
      path: '/pay',
      name: 'pay',
      component: () =>
        import('@/pages/pay'),
      meta: {
        title: 'Create order',
        keepAlive: false
      }
    }, {
      path: '/accept',
      name: 'accept',
      component: () =>
        import('@/pages/pay/accept'),
      meta: {
        title: 'Payment',
        keepAlive: false
      }
    }, {
      path: '/address',
      name: 'address',
      component: () =>
        import('@/pages/address/address-list'),
    }, {
      path: '/add_address',
      name: 'add_address',
      component: () =>
        import('@/pages/address/add-address'),
    }, {
      path: '/address_edit',
      name: 'address_edit',
      component: () =>
        import('@/pages/address/address_edit'),
    }, {
      path: '/delivery',
      name: 'delivery',
      component: () =>
        import('@/pages/delivery'),
    }, {
      path: '/coupon',
      name: 'coupon',
      component: () =>
        import('@/pages/coupon'),
    }, {
      path: '/order',
      name: 'order',
      component: () =>
        import('@/pages/order'),
    }, {
      path: '/share',
      name: 'share',
      component: () =>
        import('@/pages/share'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () =>
        import('@/pages/share/feedback'),
    },
    {
      path: '/pay-success',
      name: 'pay-success',
      component: () =>
        import('@/pages/share/pay-success'),
    },
    {
      path: '/callback',
      name: 'callback',
      component: () =>
        import('@/pages/callback'),
    },
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      redirect: '/home'
    },
  ]
})