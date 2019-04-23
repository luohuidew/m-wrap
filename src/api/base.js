import axios from 'axios';
const service = axios.create({});
export default {
  ins_info(data = {}) {
    return service({
      url: 'https://api.instagram.com/v1/users/self/',
      method: 'get',
      headers: {},
      params: data,
    })
  },
}