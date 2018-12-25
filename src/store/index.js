import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken
} from '@/utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: getToken(),
    user: {},
    share_token: '',
    address: {},
    order_detail: {
      address: undefined,
      delivery: undefined,
      payment: undefined,
      coupon: undefined,
      change_address:false
    },
    info_lists: undefined,
    christmas_share_info:undefined,
    christmas_share_params:undefined,
    is_ios:window.weget_mobile_type === "iOS"
  },
  getters: {
    token: () => {
      return getToken();
    },
  },
  mutations: {
   /*  increment(state, n) {
      state.count += n
    }, */
    set_token(state, data) {
      // 变更状态
      state.token = data;
    },
    set_share_token(state, data) {
      // 变更状态
      state.share_token = data;
    },
    set_christmas_share_info(state, data) {
      // 变更状态
      Vue.set(state, 'christmas_share_info', data);
      // state.christmas_share_info = data;
    },
    set_christmas_share_params(state, data) {
      // 变更状态
      Vue.set(state, 'christmas_share_params', data);
      // state.christmas_share_info = data;
    },
  }
})

export default store