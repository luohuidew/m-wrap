import request from '@/utils/request'
import store from '@/store'
export default {
  banner_list(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'weget/bannerList',
      method: 'post',
      data: JSON.stringify(data),
    })
  }  
}
