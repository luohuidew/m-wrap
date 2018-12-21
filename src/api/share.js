import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  group(data={}) {
    data.token = token;
    return request({
      url: 'share/group',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getShareInfo(data={}){
    // data.token = token;
    return request({
      url: 'share/getShareInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  transform(data={}){
    // data.token = token;
    return request({
      url: 'share/transform',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}

