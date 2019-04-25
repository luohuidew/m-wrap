import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
  shareState(data={}) {
    data.token = token;
    return request({
      url: 'ActivityRegisteUser/shareInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}
