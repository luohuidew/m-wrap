import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  review_list(data={}) {
    data.token = token;
    return request({
      url: 'comment/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  add_review(data={}){
    data.token = token;
    return request({
      url: 'comment/save',
      method: 'post',
      data: JSON.stringify(data),
    })
  }
}

