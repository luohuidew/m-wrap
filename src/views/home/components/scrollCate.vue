<template>
  <div class="scroll-cate"
    v-if="listData">
    <van-tabs v-model="active"
      sticky
      :line-height="0"
      :offset-top="offsetTop"
      @scroll="get_scroll_num"
      @change="toggle_data">
      <van-tab v-for="(item,index) in listData"
        :key="item.cat_id"
        :title="item.cat_id">
        <span :class="{'scroll-title':true,'active':active===index}"
          slot="title">
          <img :src="item.img_url"
            alt="">
          <p>{{item.name}}</p>
        </span>
        <ul class="pick-lists"
          slot="default"
          v-show="index===active">
          <li v-for="(item,index) in goodsListsData"
            :key="index">
            <autoCard :cardData="item"></autoCard>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import autoCard from "@/components/card-column-auto";
import GOODS from "@/api/goods";
export default {
  name: "",
  props: {
    listData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      active: 0,
      offsetTop: 0,
      goodsListsData: [],
      selectId: 0
    };
  },
  computed: {},
  created() {
    // this.init_data();
  },
  mounted() {
    let top_number = document.querySelector("#app-header-top").offsetHeight;
    this.offsetTop = top_number;
  },
  methods: {
    init_data(params) {
      GOODS.get_lists(params).then(res => {
        this.goodsListsData = res.data.data;
      });
      // GOODS.get_lists();
    },
    get_more_data(params) {
      GOODS.get_lists(params).then(res => {
        res.data.data.forEach(item => {
          this.goodsListsData.push(item);
        });
      });
    },
    toggle_data(index, title) {
      // console.log(index, title);
      let params = {
        cat_id: title
      };
      this.init_data(params);
    },
    get_scroll_num(data) {}
  },
  components: {
    autoCard
  }
};
</script>

<style lang='scss' scoped>
.scroll-title {
  background-color: #000000;
  color: #ffffff;
  img {
    height: 20px;
    width: auto;
  }
  &.active {
    background-color: #d70e19;
  }
}
/*  */
.pick-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > li {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    &:nth-child(2n-1) {
      // margin-right: 5px;
    }
    &:nth-child(2n) {
    }
  }
}
</style>
