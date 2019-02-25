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
      url: 'order/createOrder?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  pay_key(data={}) {
    data.token = token;
    return request({
      url: 'pay/getTokenizationkey?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  pay_accept(data={}) {
    // data.token = token;
    return request({
      url: 'pay/pay?loading=yes',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data,
    })
  }, 
  pay_paypal(data={}) {
    data.token = token;
    return request({
      url: 'pay/paypal?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  }, 
  
}
