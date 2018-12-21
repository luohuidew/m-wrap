import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  getUserInfo(data = {}) {
    data.token = token;
    return request({
      url: '/user/getInfoByToken',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  trial_list(data = {}) {
    data.token = token;
    return request({
      url: '/trial/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  trial_read(data = {}) {
    data.token = token;
    return request({
      url: '/trial/read',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  trial_apply(data = {}) {
    data.token = token;
    return request({
      url: '/trial/apply?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  trial_winner(data = {}) {
    data.token = token;
    return request({
      url: '/trial/winner',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}