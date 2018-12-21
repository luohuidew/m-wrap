import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  confirm_order(data={}) {
    data.token = token;
    return request({
      url: 'checkout/confirm',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  total_price(data={}) {
    data.token = token;
    return request({
      url: 'checkout/totalPrice',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  create_order(data={}) {
    data.token = token;
    return request({
      url: 'order/createOrder?loading=no',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  
}
