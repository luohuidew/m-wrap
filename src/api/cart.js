import request from '@/utils/request'
import store from '@/store'
let token = store.state.token;
export default {
  addToCart(data = {}) {
    data.token = token;
    return request({
      url: 'shopcart/addToCart?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  cartcheckoutConfirm(data = {}) {
    data.token = token;
    return request({
      url: 'cartcheckout/confirm?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  totalPrice(data = {}) {
    return request({
      url: 'cartcheckout/totalPrice?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  orderConfirm(data = {}) {
    return request({
      url: 'order/orderConfirm?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  delShopCartGood(data = {}) {
    data.token = token;
    return request({
      url: 'shopcart/delShopCartGood?loading=yes ',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  updateCount(data = {}) {
    data.token = token;
    return request({
      url: 'shopcart/updateCount?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  likeList(data = {}) {
    data.token = token;
    return request({
      url: 'shopcart/likeList ',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getCartNum(data = {}) {
    return request({
      url: 'shopcart/getCartNum ',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}
