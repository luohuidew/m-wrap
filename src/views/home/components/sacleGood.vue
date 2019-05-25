<template>
  <section class="wrap">
    <div class="title">
      <h2>NEW ARRIVALS</h2>
      <router-link to="/search/search-lists">
        <span>SHOP ALL</span>
      </router-link>
    </div>
    <Swiper :datas='listsData'>
      <template slot="default" slot-scope="{item}">
        <GoodItem :cardData = item></GoodItem>
      </template>
    </Swiper>
  </section>
</template>

<script>
import Swiper from "@/components/Swiper";
import GoodItem from "@/components/good-column-auto";

export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    to_store(store_id) {
      let href_params = {
        path: "/store",
        query: {
          store_id: store_id
        }
      };
      this.$router.push(href_params);
    },
    to_sku_detail(sku_id) {
      let href_params = {
        path: "/detail",
        query: {
          sku_id: sku_id
        }
      };
      this.$router.push(href_params);
    }
  },
  components: {
    Swiper,
    GoodItem
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  .title {
    margin-top: 28px;
    text-align: center;
    h2 {
      font-size:20px;
      font-weight:800;
      color:rgba(0,0,0,1);

    }
    span {
      text-decoration: underline;
      font-size:10px;
      font-weight:800;
      color:rgba(155,155,155,1);
    }
  }
}
</style>
