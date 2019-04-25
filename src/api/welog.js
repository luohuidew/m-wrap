import request from '@/utils/request'
import store from '@/store'
export default {
  welogIndex(data = {}) {
    data.token = store.state.token;
    return request({
      url: 'welog/index',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  welogIndexMore(data = {}) {
    data.token = store.state.token;
    return request({
      url: 'welog/welogList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  welogDetail(data = {}) {
    data.token = store.state.token;
    return request({
      url: 'welog/detail',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  welogTheme(data = {}) {
    data.token = store.state.token;
    return request({
      url: 'welog/topicList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}