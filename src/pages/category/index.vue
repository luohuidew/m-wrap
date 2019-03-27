<template>
  <div class="wrap">
    <header>
      <div class="back"><img src="@/assets/img/icon/goback.png"
          alt=""></div>
      <div class="menu">
        <ul>
          <li v-for="(item,index) in  navLists"
            :key="index"
            :class="{'active':item===curtype}"
            @click="curtype=item">{{item}}</li>
          <!-- <li class="active"
            @click="type = 'Category'">Category</li>
          <li @click="type = 'Store'">Store</li>
          <li @click="type = 'Brand'"> Brand</li> -->
        </ul>
      </div>
    </header>
    <keep-alive>
      <component class="search-content" :is='curtype'></component>
    </keep-alive>
  </div>
</template>

<script>
// import apiCoupon from "@/api/coupon";
import Category from "./component/Category";
import Store from "./component/Store";
import Brand from "./component/Brand";
// import Brands from "./component/Brands";

export default {
  name: "",
  data() {
    return {
      curtype: "Store",
      navLists: ["Category", "Store", "Brand"]
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  components: {
    Category,
    Store,
    Brand
  },
  methods: {
    init_data() {
      // coupon.coupon({ status: 2 }).then(res => {
      //   this.coupon_list = res.data;
      //   this.is_checked = this.$store.state.order_detail.is_selected_couponid;
      // });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./css/index.scss";
.search-content {
  height: calc(100% - 44px);
}
</style>
