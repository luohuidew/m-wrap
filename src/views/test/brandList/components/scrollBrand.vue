<template>
  <div class="scroll-brand-box">
    <cube-index-list :data="cityData">
      <cube-index-list-group v-for="(group, index) in cityData"
        :key="index"
        :group="group">
        <cube-index-list-item v-for="(item, index) in group.items"
          :key="index"
          :item="item"
          @select="selectItem">
          <div class="custom-item">
            <img :src="item.brand_logo"
              alt=""
              srcset="">
          </div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import SEARCH from "@/api/search";
// let scroll = new BScroll(".wrapper");
export default {
  name: "",
  props: {},
  data() {
    return {
      // title: "Current City: BEIJING",
      cityData: []
    };
  },
  methods: {
    initData() {
      SEARCH.getSecondCategory({ cat_id: 1002 }).then(res => {
        // this.cityData = res.data;
        // let temp_data = [];
        // res.data.forEach((item,index) => {
        //   temp_data[]
        // });
        this.cityData = res.data.map(item => {
          return { name: item.letter.toUpperCase(), items: item.brand };
        });
      });
    },
    selectItem(item) {
      console.log(item);
    },
    clickTitle(title) {
      console.log(title);
    }
  },
  computed: {},
  created() {
    this.initData();
  },
  components: {}
};
</script>

<style lang='scss'>
.scroll-brand-box {
  width: 285px;
  height: 100%;
  .cube-index-list-group {
    & > ul {
      display: flex;
      flex-wrap: wrap;
      & > li {
        margin-right: 8px;
        margin-bottom: 14px;
      }
    }
  } /*  */

  /*  */
  .cube-index-list-content {
    background-color: #fff;
    color: #f90;
  }
  /*  */
  .cube-index-list-anchor {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 14px;
    // background: none;
  }
  /* 自定义的样式 */
  .custom-item {
    width: 112px;
    height: 47px;
    border: 1px solid #f3f3f3;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
