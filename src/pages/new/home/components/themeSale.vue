<template>
  <div class="theme-sale"
    v-if="req_data">
    <ul v-for="(item,index) in req_data"
      :key="index">
      <router-link class="banner-des"
        :to="item.route">
        <img :src="item.image_url"
          alt=""
          srcset="">
      </router-link>
      <li v-for="(goods) in item.product"
        :key="goods.id">
        <goods-card :key="goods.id"
          :sku="goods"></goods-card>
      </li>
    </ul>
  </div>
</template>

<script>
import goodsCard from "@/components/card-list-row";
export default {
  name: "",
  props: {
    themeData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    req_data() {
      return this.themeData;
    }
  },
  methods: {},
  components: {
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
.theme-sale {
}
.banner-des {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
