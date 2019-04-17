import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  /* 主页面的获取用户信息 */
  getInfoByToken(data={}) {
    data.token = token;
    return request({
      url: '/user/getInfoByToken',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  PersonalCenter(data={}) {
    data.token = token;
    return request({
      url: '/user/PersonalCenter',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  updateUserInfo(data={}) {
    data.token = token;
    return request({
      url: '/user/updateUserInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  messageList(data={}) {
    data.token = token;
    return request({
      url: '/user/messageList',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  send_email(data={}) {
    data.token = token;
    return request({
      url: 'user/sendEmailByPs',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  reset_pass(data={}) {
    data.token = token;
    return request({
      url: 'user/changePassword',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  getUserHeaderInfo(data={}) {
    data.token = token;
    return request({
      url: 'user/getUserInfo',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  forgetPassword(data={}) {
    // data.token = token;
    return request({
      url: '/user/forgetPassword',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  updateForgetPassword(data={}) {
    // data.token = token;
    return request({
      url: '/user/updateForgetPassword',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

}
