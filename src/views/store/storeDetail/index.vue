<template>
  <div class="store-detail-page"
    v-if="storeData">
    <div class="store-detail-content">
      <storeHeader :headerData="storeData.store_info" />
      <div class="tab-box">
        <ul>
          <li @click="initSelect=0">
            <span class="tab-item"
              :class="{'active':initSelect===0}">
              Home
            </span>
          </li>
          <li @click="initSelect=1">
            <span class="tab-item"
              :class="{'active':initSelect===1}">
              Products({{storeData.store_info.total_num}})
            </span>
          </li>
        </ul>
      </div>
      <div class="content-lists">
        <storeHomeList :homeData="storeData"
          v-show="initSelect===0" />
        <keep-alive>
          <storeProductList v-show="initSelect===1" />
        </keep-alive>
      </div>
    </div>
    <storeFooter :footerData="storeData" class="store-detail-footer" />
  </div>
</template>

<script>
import storeFooter from "./components/storeFooter";
import storeHeader from "./components/storeHeader";
import storeHomeList from "./components/storeHomeList";
import storeProductList from "./components/storeProductList";
import api from "@/api/store";
export default {
  name: "",
  props: {},
  data() {
    return {
      storeData: undefined,
      initSelect: 0
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      let req_params = {
        store_id: this.$route.query.store_id
      };
      api.store_info(req_params).then(res => {
        this.storeData = res.data;
        this.$parent.store_info = res.data.store_info;
        // if(res.data.store_id){
        // }
      });
    }
  },
  components: {
    storeFooter,
    storeHeader,
    storeHomeList,
    storeProductList
  }
};
</script>

<style lang='scss' scoped>
.store-detail-page {
  height: 100%;
  .store-detail-content {
    height: calc(100% - 55px);
    overflow: auto;
    .tab-box {
      height: 48px;
      line-height: 48px;
      ul {
        height: 100%;
        display: flex;
        li {
          width: 50%;
          height: 100%;
          text-align: center;
        }
      }
      .tab-item {
        display: inline-block;
        height: 100%;
        border-bottom: 2px solid transparent;
        font-size: 14px;
        font-weight: bold;
        transition: all 0.5;
        &.active {
          border-color: #000000;
        }
      }
    }
  }
  .store-detail-footer {
    height: 55px;
  }
}
</style>
