<template>
  <div class="store-cate-page"
    v-if="storeData">
    <div class="header-top">
      <topHeader>
        <span slot>{{decodeURIComponent($route.query.page_label)}}</span>
      </topHeader>
    </div>
    <div class="cate-lists">

      <van-collapse @change="get_first_cate"
        v-model="activeNames" accordion>
        <van-collapse-item v-for="(cate_first) in  storeData"
          :title="cate_first.cat_name"
          :name="cate_first.id"
          :key="cate_first.id">
          <ul v-if="cate_first.children.length">
            <li class="seconed-cate"
              v-for="(item) in cate_first.children"
              :key="item.id"
              @click="to_store_list(item.id)">{{item.cat_name}}</li>
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
      let temp_flag_lists = this.storeData.filter(item=>{
        return item.id == data;
      })
      // debugger
      if(!temp_flag_lists[0].children.length){
        this.to_store_list(data);
      }
      // console.log(data);
    },
    to_store_list(cate_id) {
      let query_params = {
        path: "/store/list",
        query: {
          cate_id: cate_id,
          store_id: this.$route.query.store_id
        }
      };
      this.$router.push(query_params);
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
  & >>> .van-collapse-item__content {
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
