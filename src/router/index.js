import Vue from 'vue'
import Router from 'vue-router'
import THEM from "./modules/them"
import HOME from "./modules/home"
import CART from "./modules/cart"
import LAYOUT from "./modules/layout"
import CHECKOUT from "./modules/checkout"
import USER from "./modules/user"
import TEST from "./modules/test"
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
    {
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
          title: 'search home',
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
      }],
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
      name: 'query',
      component: () =>
        import('@/pages/query'),
      meta: {
        title: 'query',
        keepAlive: false
      }
    },
    {
      path: '/store',
      name: 'store',
      component: () =>
        import('@/pages/store'),
      meta: {
        title: 'store',
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
        keepAlive: false,        
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
        keepAlive: false,        
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
      }
      //    redirect: '/detail/',
    }, {
      path: '/pay',
      name: 'pay',
      component: () =>
        import('@/pages/pay'),
      meta: {
        title: 'Create order',
        keepAlive: false,        
      }
    }, {
      path: '/accept',
      name: 'accept',
      component: () =>
        import('@/pages/pay/accept'),
      meta: {
        title: 'Payment',
        keepAlive: false,        
      }
    }, {
      path: '/address',
      name: 'address',
      component: () =>
        import('@/pages/address/address-list'),
      meta: {
        title: 'address',        
      }
    }, {
      path: '/add_address',
      name: 'add_address',
      component: () =>
        import('@/pages/address/add-address'),
      meta: {
        title: 'address',        
      }
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
      redirect: '/home/index'
    },
  ]
})