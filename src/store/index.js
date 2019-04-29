import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken
} from '@/utils/auth'
import cart from "./modules/cart"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    cart,
  },
  state: {
    token: getToken(),
    user: {},
    share_token: '',
    address: {},
    order_detail: {
      is_selected_shipping: [],
      is_selected_couponid: -1,
      is_selected_address: -1,
      address: {},
      delivery: [],
      applyCode: [],
      payment: undefined,
      coupon: {},
      change_address: false
    },
    info_lists: {},
    christmas_share_info: undefined,
    christmas_share_params: undefined,
    popballoons_share_info: undefined,
    popballoons_share_params: undefined,
    is_ios: window.weget_mobile_type === "iOS",
    is_load_position:false
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
    set_popballoons_share_info(state, data) {
      // 变更状态
      Vue.set(state, 'popballoons_share_info', data);
      // state.popballoons_share_info = data;
    },
    set_popballoons_share_params(state, data) {
      // 变更状态
      Vue.set(state, 'popballoons_share_params', data);
      // state.popballoons_share_info = data;
    },
  },
  actions: {
    SetToken({ commit }, val) {
      commit('set_token', val)
    },
  }
})

export default store
