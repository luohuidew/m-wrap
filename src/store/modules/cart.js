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
      // state.cart.is_static = false;
      // setTimeout(() => {
      //   state.cart.is_static = true;
      // }, 1000)
    },
    SET_ANIMATE: (state, data) => {
      state.is_static = data;
    }
  },
  actions: {
    addAction({
      commit
    }, data) {
      commit('SET_CATR', data);
      commit('SET_ANIMATE', false);
      setTimeout(() => {
        commit('SET_ANIMATE', true);
      }, 1000)
    },
  }
}

export default cart