import request from '@/utils/request'
import store from '@/store'
export default {
  banner_list(data={}) {
    data.token  = store.state.token;
    return request({
      url: 'weget/bannerList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  homeData(data={}) {
    return request({
      url: 'weget/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  homeTopic(data={}) {
    return request({
      url: 'topic/homeTopic',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  fetActive(data={}) {
    return request({
      url: 'weget/popup',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
