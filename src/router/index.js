import Vue from 'vue'
import Router from 'vue-router'
import THEM from "./modules/them"
import HOME from "./modules/home"
import CART from "./modules/cart"
import LAYOUT from "./modules/layout"
import CHECKOUT from "./modules/checkout"
import USER from "./modules/user"
import SEARCH from "./modules/search"
import STORE from "./modules/store"
import TEST from "./modules/test"
import LOGIN from "./modules/login"
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active-route',
  routes: [
    HOME,
    THEM,
    CART,
    CHECKOUT,
    TEST,
    LAYOUT,
    USER,
    SEARCH,
    LOGIN,
    STORE, {
      path: '/home/index',
      name: 'home',
      component: () =>
        import('@/views/home/index'),
      meta: {
        title: 'HOME',
        keepAlive: false,
        type: 'list'
      }
    },
    {
      path: '/home/theme',
      name: 'theme',
      component: () =>
        import('@/views/home/homeTheme'),
      meta: {
        title: 'HOME THEME',
        keepAlive: false,
      }
    },
    {
      path: '/hot',
      name: 'hot',
      component: () =>
        import('@/pages/hot'),
      meta: {
        title: 'hot',
        keepAlive: false
      }
    },
    {
      path: '/query',
      name: 'similar-query',
      component: () =>
        import('@/pages/query'),
      meta: {
        title: 'similar',
        keepAlive: false
      }
    },
    {
      path: '/likeQueryActive',
      name: 'likeQueryActive',
      component: () =>
          import('@/pages/query/index-active'),
      meta: {
        title: 'You might also like',
        keepAlive: false
      }
    },
      {
          path: '/queryActive',
          name: 'queryActive',
          component: () =>
              import('@/pages/query/index-active'),
          meta: {
              title: 'Complete the look',
              keepAlive: false
          }
      },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () =>
    //     import('@/pages/login'),
    //   meta: {
    //     title: 'login',
    //     keepAlive: false,
    //     fullScreen: true
    //   }
    // },
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
        meta: {
          title: 'reset',
          keepAlive: false,
          fullScreen: true
        }
    },
    {
      path: '/statement',
      name: 'statement',
      component: () =>
        import('@/pages/statement'),
      meta: {
        title: 'Statement',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import('@/pages/about'),
      meta: {
        title: 'About US',
        keepAlive: false,
        fullScreen: true
      }
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
      path: '/detail',
      name: 'detail',
      component: () =>
        import('@/pages/detail'),
      meta: {
        title: 'Details',
        keepAlive: false,
        fullScreen: false
      }
      //    redirect: '/detail/',
    },
    {
      path: '/detailAcive',
      name: 'detailAcive',
      component: () =>
          import('@/pages/detail/index_active'),
      meta: {
        title: 'detailAcive',
        keepAlive: false,
        fullScreen: true
      }
      //    redirect: '/detail/',
    },
    {
      path: '/pay',
      name: 'pay',
      component: () =>
        import('@/pages/pay'),
      meta: {
        title: 'Create order',
        keepAlive: false,
      }
    },
    {
      path: '/accept',
      name: 'accept',
      component: () =>
        import('@/pages/pay/accept'),
      meta: {
        title: 'Payment',
        keepAlive: false,
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () =>
        import('@/pages/address/address-list'),
      meta: {
        title: 'address',
      }
    },
    {
      path: '/add_address',
      name: 'add_address',
      component: () =>
        import('@/pages/address/add-address'),
      meta: {
        title: 'address',
      }
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () =>
        import('@/pages/delivery'),
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () =>
        import('@/pages/coupon'),
      meta: {
        title: '',
        keepAlive: false,
        fullScreen: true
      }
    },
    {
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
    },
    {
      path: '/',
      redirect: '/home/index'
    },
  ]
})
