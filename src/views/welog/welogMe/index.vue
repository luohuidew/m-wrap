<template>
  <div class="fixed-content">
    <van-list v-model="loading"
      :finished="finished"
      :finished-text="''"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <div class="waterfall-box">
        <ul class="pick-lists"
          slot="default">
          <li v-for="(item,index) in welogList1.data"
            :key="index">
            <autoCard :datas="item"></autoCard>
          </li>

        </ul>
        <ul class="pick-lists"
          slot="default">
          <li v-for="(item,index) in welogList2.data"
            :key="index">
            <autoCard :datas="item"></autoCard>
          </li>

        </ul>
      </div>
    </van-list>
  </div>
</template>

<script>
import autoCard from "@/views/welog/components/welog-card";
import api from "@/api/welog";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "",
  props: {
    listData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      selectId: this.listData.extend.selectId,
      goodsListsData: this.listData.data,
      welogList1: {
        height: 0,
        data: []
      },
      welogList2: {
        height: 0,
        data: []
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    get_more_data() {
      let params = {
        // cat_id: this.curCateId,
        id: this.selectId,
        type:2
      };
      api.welogIndexMore(params).then(res => {
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }
        res.data.data.forEach(item => {
          this.selectId = res.data.extend.selectId;
          this.loading = false;
          this.goodsListsData.push(item);
          let temp_height = Number(this.UrlSearch(item.cover_img).height);
          item.height = temp_height;
          if (this.welogList1.height <= this.welogList2.height) {
            this.welogList1.data.push(item);
            this.welogList1.height += temp_height;
            // console.log(1);
          } else {
            this.welogList2.data.push(item);
            this.welogList2.height += temp_height;
            // console.log(2);
          }
        });
      });
    },
    UrlSearch(url) {
      var name, value;
      var str = url; //取得整个地址栏
      var num = str.indexOf("?");
      str = str.substr(num + 1);
      // console.log(str);
      if (num === -1) {
        return {
          height: "750",
          width: "750"
        };
      }
      //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      var obj = {};
      if (arr.length === 0) {
        obj.height = "750";
        obj.width = "750";
      } else {
        for (var i = 0; i < arr.length; i++) {
          var temp = arr[i].split("=");
          obj[temp[0]] = temp[1];
          // console.log(temp);
        }
      }
      var ra = obj.width / 750;
      obj.height = Math.ceil(obj.height / ra);
      // console.log(obj);
      return obj;
    }
  },
  components: {
    autoCard,
    vueWaterfallEasy
  }
};
</script>

<style lang='scss' scoped>
/*  */
.waterfall-box {
  display: flex;
  padding: 0 5px;
  // height: 100%;
}
.pick-lists {
  width: 50%;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // padding: 0 15px;
  // padding-top: 10px;
  // background-color: #f3f3f3;
  /* 保留高度 */
  // min-height:50vh;
  & > li {
    // width: calc(50% - 5px);
    margin-bottom: 10px;
    &:nth-child(2n-1) {
      // margin-right: 5px;
    }
    &:nth-child(2n) {
    }
  }
}
</style>
