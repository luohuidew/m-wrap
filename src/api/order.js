import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
// let token = "39fe5880cf8d5e94a676668a04ba3f78d0d02c9fd7226bf79698b5b311043909";
export default {
  order_query(data={}) {
    data.token = token;
    return request({
      url: 'order/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  read(data={}) {
    data.token = token;
    return request({
      url: 'order/read',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  order_cancel(data={}) {
    data.token = token;
    return request({
      url: 'order/cancel',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  order_received(data={}) {
    data.token = token;
    return request({
      url: 'order/received',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  order_returned(data={}) {
    data.token = token;
    return request({
      url: 'order/returned',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  order_delete(data={}) {
    data.token = token;
    return request({
      url: 'order/delete',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getRelateProduct(data={}) {
    data.token = token;
    return request({
      url: 'order/getRelateProduct',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
