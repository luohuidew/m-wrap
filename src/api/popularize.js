import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
  shareState(data={}) {
    data.token = token;
    return request({
      url: 'ActivityRegisteUser/shareInfo?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getActiveState(data={}) {
    data.token = token;
    return request({
      url: 'product/getActivityProduct?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
