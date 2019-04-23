import request from '@/utils/request'
import store from '@/store'
export default {
  address_list(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'address/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  /* 地址编辑 */
  address_save(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'address/save',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  address_state(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'address/state',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}
