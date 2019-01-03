import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {  
  successActivityList(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/successActivityList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  init_lists(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/chriList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  watch_detail(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/activityDetail',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  user_detail(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/activityItems',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  add_sku(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/addUserChri',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  init_info(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/getLampHelperList?loading=no',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  init_status(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/christmasIndex?loading=no',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  share_detail(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/shareChristmasDetail',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  share_Info(data = {}) {
    data.token = token;
    return request({
      url: 'share/getShareInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  help_light(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/lightOnNotify',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  help_tips(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/alertUser',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  down_load(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/getCouponList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  back_index(data = {}) {
    data.token = token;
    return request({
      url: 'newyear/hitShopNow',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  get_similar_product(data = {}){
    data.token = token;
    return request({
      url: 'newyear/getSimilarProducts',
      method: 'post',
      data: JSON.stringify(data),
    })
  }
}