import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  detail(data = {}) {
    data.token = token;
    return request({
      url: 'product/detail?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getLikeLook(data = {}) {
    data.token = token;
    return request({
      url: 'product/getLikeLook',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getRandGroup(data = {}) {
    data.token = token;
    return request({
      url: 'product/getRandGroup',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  get_similar(data = {}) {
    data.token = token;
    return request({
      url: 'product/getSimilarProducts',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  confirm_order(data = {}) {
    data.token = token;
    return request({
      url: 'checkout/confirm',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  like(data = {}) {
    data.token = token;
    return request({
      url: 'product/like?loading=no',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  query_lists(data = {}) {
    data.token = token;
    return request({
      url: 'product/getFullGoodsList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
