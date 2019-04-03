import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  getFirstCategory(data = {}) {
    data.token = token;
    return request({
      url: 'search/getFirstCategory',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getSecondCategory(data = {}) {
    data.token = token;
    return request({
      url: 'search/getSecondCategory',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  searchrecord(data = {}) {
    data.token = token;
    return request({
      url: 'search/searchrecord',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  delRecord(data = {}) {
    data.token = token;
    return request({
      url: 'search/delRecord',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  // getSecondCategory(data={}) {
  //   data.token = token;
  //   return request({
  //     url: 'search/getSecondCategory',
  //     method: 'post',
  //     data: JSON.stringify(data),
  //   })
  // }, 

}