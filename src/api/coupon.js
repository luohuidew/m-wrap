import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  coupon(data={}) {
    data.token = token;
    return request({
      url: 'coupon/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  clickReceive(data={}) {
    data.token = token;
    return request({
      url: 'coupon/clickReceive',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  inputReceive(data={}) {
    data.token = token;
    return request({
      url: 'coupon/inputReceive',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}
