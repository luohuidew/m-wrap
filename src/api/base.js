import axios from 'axios';
const service = axios.create({});
import request from '@/utils/request'
import store from '@/store';
let token = store.state.token;
import { GO_LANG } from "@/utils/config"
import { getUserShareId ,GetQueryString} from "@/utils/auth"

export default {
  ins_info(data = {}) {
    return service({
      url: 'https://api.instagram.com/v1/users/self/',
      method: 'get',
      headers: {},
      params: data,
    })
  },
  visitSaveLog(data = {}) {
    data.platform = 'wap'
    data.pageUrl = window.location.href
    data.createTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss")
    data.uid = getUserShareId()
    data.magic = GetQueryString('magic') || undefined
    data.token = token
    return request({
      url: `${GO_LANG}middleware/public/common/v1/visit/saveLog`,
      method: 'post',
      data: JSON.stringify(data),
    })
  },
}
