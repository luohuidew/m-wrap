import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  checkCode(data={}) {
    data.token = token;
    return request({
      url: 'code/checkCode',
      method: 'post',
      data: JSON.stringify(data),
    })
  }

}
