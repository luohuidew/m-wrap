<template>
  <div id="scroll-cate"
    v-if="listData">
    <van-tabs v-model="active"
      sticky
      ellipsis
      :background="'#000000'"
      :line-height="0"
      :offset-top="offsetTop"
      @scroll="get_scroll_num">
      <van-tab class="scroll-tab"
        v-for="(item,index) in listData"
        :key="item.cat_id"
        :title="item.cat_id">
        <span :class="{'scroll-title':true,'active':active===index}"
          slot="title">
          <img :src="item.img_url"
            alt="">
          <p class="icon-text text-line-clamp-1">{{item.name}}</p>
        </span>
        <scrollCateItem :style="tabHeight"  :curCateId="item.cat_id" ></scrollCateItem>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import scrollCateItem from "./scrollCateItem";
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
      tabHeight: {
        overflow: 'scroll'
      },
      active: 0,
      offsetTop: 0,

      curCateId: this.listData[0].cat_id
    };
  },
  watch: {
    active() {
      this.tabHeight.height = this.vanTablesHieght+'px'
    },
  },
  computed: {},
  created() {
    // this.init_data();
  },
  mounted() {
    let app_header = document.querySelector("#app-header-top");
    let app_banner = document.querySelector("#banner-box");
    let top_number = app_header.offsetHeight;
    let banner_number = app_banner.offsetHeight;
    this.offsetTop = top_number + banner_number;
    // 关闭顶部滚动信息方法
    // let that = this;
    // document
    //   .querySelector(".close-banner")
    //   .addEventListener("click", function() {
    //     // debugger
    //     top_number = app_header.offsetHeight;
    //     // banner_number = app_banner.offsetHeight;
    //     that.offsetTop = top_number;
    //   });

    let home_footer = document.querySelector(".home-footer");
    let van_tabs = document.querySelector("#scroll-cate .van-tabs__wrap");
    let footer_number = home_footer.offsetHeight;
    let van_tabs_number = van_tabs.offsetHeight;
    let bannerHeight = top_number + banner_number + van_tabs_number + footer_number;
    this.vanTablesHieght = window.innerHeight - bannerHeight
  },
  methods: {
    init_data(params) {
      GOODS.get_lists(params).then(res => {
        this.goodsListsData = res.data.data;
        this.selectId = res.data.extend.selectId;
      });
      // GOODS.get_lists();
    },

    toggle_data(index, title) {
      // console.log(index, title);
      this.curCateId = title;
      let params = {
        cat_id: title
      };
      this.init_data(params);
    },
    get_scroll_num(data) {
    }
  },
  components: {
    scrollCateItem
  }
};
</script>

<style lang='scss' scoped>
#scroll-cate {
  & >>> .van-tabs--line {
    padding-top: 48px;
  }
  & >>> .van-tabs--line .van-tabs__wrap {
    height: 48px;
  }
  & >>> .van-tab {
    background-color: #000000;
  }
  .icon-text {
    text-align: center;
    color: #ffffff;
    font-size: 10px;
    padding: 0 5px;
    height: 10px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 10px;
  }
}
.scroll-title {
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
  height: 48px;
  align-items: center;
  img {
    height: 26px;
    width: auto;
  }
  &.active {
    background-color: #d70e19;
  }
}
</style>
