import request from '@/utils/request'
export default {
  goods_lists(data = {}) {
    // data.token  = store.state.token;
    return request({
      url: '/store/getStoreRecommendList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  store_info(data = {}) {
    // data.token  = store.state.token;
    return request({
      url: '/store/info',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getStoreCateList(data = {}) {
    // data.token  = store.state.token;
    return request({
      url: 'store/getStoreCateList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getSkuListByCateId(data = {}) {
    // data.token  = store.state.token;
    return request({
      url: 'store/getSkuListByCateId',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getThemeStoreInfo(data = {}) {
    // data.token  = store.state.token;
    return request({
      url: 'store/getThemeStoreInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}