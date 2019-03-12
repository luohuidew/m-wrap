import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
  addToCart(data={}) {
    data.token = token;
    return request({
      url: 'shopcart/addToCart',
      method: 'post',
      data: JSON.stringify(data),
    })
  },  
  shopCartList(data={}) {
    data.token = token;
    return request({
      url: 'shopcart/shopCartList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },  
  
}
