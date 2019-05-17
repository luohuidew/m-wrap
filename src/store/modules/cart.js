import request from '@/utils/request'
const cart = {
  state: {
    sidebar: {

    },
    is_static: true,
    goods_num: 0,
  },
  mutations: {

    SET_CATR: (state, data) => {
      state.goods_num = data;
    },
    SET_ANIMATE: (state, data) => {
      state.is_static = data;
    }
  },
  actions: {
    // addAction({commit}, data) {
    //   commit('SET_CATR', data);
    //   commit('SET_ANIMATE', false);
    //   setTimeout(() => {
    //     commit('SET_ANIMATE', true);
    //   }, 1000)
    // },
  }
}

export default cart
