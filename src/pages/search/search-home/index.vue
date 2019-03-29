<template>
  <div class="search-home">
    <div class="aside-bar">
      <ul>
        <li :class="{'active':index===selectIndex}"
          v-for="(item,index) in asideData"
          :key="index"
          @click="selct_cur_data(index)">
          <img :src="item.img_url"
            alt="">
          <span>{{item.cat_name}}</span>
        </li>
      </ul>
    </div>
    <div class="lists-box">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/search";
export default {
  name: "",
  data() {
    return {
      asideData: undefined,
      listsData: undefined,
      selectIndex: 0
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.getFirstCategory().then(res => {
        this.asideData = res.data;
      });
    },
    selct_cur_data(cur_index) {
      this.selectIndex = cur_index;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.search-home {
  display: flex;
  height: 100%;
  font-size: 12px;
  & > div {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
  .aside-bar {
    width: 100px;
  }
  .lists-box {
    flex: 1;
  }
}
/*  */
.aside-bar {
  li {
    display: flex;
    height: 80px;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    &.active {
      background-color: #fff;
    }
    img {
      height: 40px;
      width: 40px;
    }
    span {}
  }
}
</style>
