import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
export default {
  sign_up(data = {}) {
    return request({
      url: 'user/signUp?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  thirdLogin(data = {}) {
    return request({
      url: 'user/thirdLogin?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  preLogin(data = {}) {
    return request({
      url: 'user/preLogin?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  sendEmail(data = {}) {
    return request({
      url: 'user/sendEmail',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  changePassword(data = {}) {
    return request({
      url: 'user/changePassword',
      method: 'post',
      data: JSON.stringify(data),
    })
  },

  loginByUsername(data = {}) {
    return request({
      url: 'user/login?loading=yes',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  logout(data = {}) {
    data.token = token;
    return request({
      url: 'login/logout',
      method: 'post'
    })
  },
  checkUser(data = {}) {
    /* 登录页的获取用户信息，避免缓存的数据 */
    return request({
      url: 'user/getInfoByToken',
      method: 'post',
      data: JSON.stringify(data),
    })
  },
  /*  */
 
}