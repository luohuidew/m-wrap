import store from '@/store'
let token  = store.state.token;
export default {
  path: '/user',
  name: 'userInfo',
  component: () =>
    import('@/views/user'),
  redirect: '/user/index',
  meta: {
    title: 'userInfo',
    keepAlive: false
  },
  children: [{
      path: 'index',
      name: 'me',
      component: () =>
        import('@/views/user/me'),
      meta: {
        title: 'userInfo',
        keepAlive: false
      },
      beforeEnter: (to, from, next) => {
        if(token){
          next();
        }else {
          window.location.href="/login"
        }
      },
    },
    {
      path: 'profile',
      name: 'profile',
      component: () =>
        import('@/views/user/profile'),
      meta: {
        title: 'Profile',
        keepAlive: false,
      }
    },
    {
      path: 'orders',
      name: 'orders',
      component: () =>
        import('@/views/user/order'),
      meta: {
        title: 'My Orders',
        keepAlive: false,
      }
    },
    {
      path: 'orders/detail',
      name: 'order-detail',
      component: () =>
        import('@/views/user/orderDetail'),
      meta: {
        title: 'My Orders',
        keepAlive: false,
      }
    },
    {
      path: 'setting',
      name: 'setting',
      component: () =>
        import('@/views/user/setting'),
      meta: {
        title: 'Settings',
        keepAlive: false,
      }
    },
    {
      path: 'coupon',
      name: 'user-coupon',
      component: () =>
        import('@/views/user/coupon'),
      meta: {
        title: 'My Coupons',
        keepAlive: false,
      }
    },
    {
      path: 'like',
      name: 'user-like',
      component: () =>
        import('@/views/user/like'),
      meta: {
        title: 'like',
        keepAlive: false,
      }
    },
    {
      path: 'follow',
      name: 'user-follow',
      component: () =>
        import('@/views/user/follow'),
      meta: {
        title: 'following',
        keepAlive: false,
      }
    },
  ]
}
