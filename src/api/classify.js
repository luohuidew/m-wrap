import request from '@/utils/request'
import store from '@/store'
let token  = store.state.token;
export default {
    getCateList(data={}) {   // 获取分类列表
        data.token= token;
        return request({
          url: 'Category/getCateList',
          method: 'post',
          data: JSON.stringify(data),
        })
    },
    getSkuList(data={}) {   // 商品搜索列表
        data.token= token;
        return request({
          url: 'search/getSkuList',
          method: 'post',
          data: JSON.stringify(data),
        })
    },
    getCateChlid(data={}) {   // 获取分类下子集列表
        data.token= token;
        return request({
          url: 'Category/getCateChlid',
          method: 'post',
          data: JSON.stringify(data),
        })
    }
}