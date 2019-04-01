<template>
  <div class="store-cate-page"
    v-if="storeData">
    <div class="header-top">
      <topHeader>
        <span slot>hello</span>
      </topHeader>
    </div>
    <div class="cate-lists">

      <van-collapse @change="get_first_cate"
        v-model="activeNames">
        <van-collapse-item v-for="(cate_first) in  storeData"
          :title="cate_first.cat_name"
          :name="cate_first.id"
          :key="cate_first.id">
          <ul>
            <li class="seconed-cate"
              v-for="(item) in cate_first.children"
              :key="item.id">{{item.cat_name}}</li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import topHeader from "@/components/topHeader";
import api from "@/api/store";
export default {
  name: "",
  props: {},
  data() {
    return {
      storeData: undefined,
      activeNames: []
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
      api.getStoreCateList(req_params).then(res => {
        this.storeData = res.data;
        // if(res.data.store_id){
        // }
      });
    },
    get_first_cate(data) {
      console.log(data);
    }
  },
  components: {
    topHeader
  }
};
</script>

<style lang='scss' scoped>
.store-cate-page {
  height: 100%;
  & /deep/ .van-collapse-item__content {
    padding: 0;
  }
  .header-top {
    height: 55px;
  }
}
/*  */
.cate-lists {
  height: calc(100% - 55px);
  overflow: auto;
}
.seconed-cate {
  background-color: #f8f8f8;
  color: #000000;
  padding: 18px 40px;
  color: #000000;
  border-bottom: 1px solid #f3f3f3;
}
</style>
