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
  address_save(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'address/save',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
