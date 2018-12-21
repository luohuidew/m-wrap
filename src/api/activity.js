import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
  activity_list(data={}) {
    data.token = token;
    return request({
      url: 'christmas/getMessageTopN',
      method: 'post',
      data: JSON.stringify(data),
    })
  },  
  
}
