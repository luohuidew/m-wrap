import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
  homeData(data={}) {
    data.token = token;
    return request({
      url: 'weget/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  saleList(data={}) {
    data.token= token;
    return request({
      url: 'weget/saleList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getCate(data={}) {
    data.token = token;
    return request({
      url: 'category/getcate',
      method: 'post',
      // data: data,
      data: JSON.stringify(data),
    })
  },
  get_lists(data={}) {
    data.token = token;
    return request({
      url: 'product/getList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  
}
