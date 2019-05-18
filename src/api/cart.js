import request from '@/utils/request'

export default {
  addToCart(data = {}) {
    return request({
      url: 'shopcart/addToCart?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  cartcheckoutConfirm(data = {}) {
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
  orderConfirm(data = {}, loading) {
    let urls = 'order/orderConfirm?loading=yes'
    if(loading) { // loading参数仅在购物车提交时使用
      urls = 'order/orderConfirm'
    }
    return request({
      url: urls,
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  delShopCartGood(data = {}) {
    return request({
      url: 'shopcart/delShopCartGood?loading=yes ',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  updateCount(data = {}) {
    return request({
      url: 'shopcart/updateCount?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  likeList(data = {}) {
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
