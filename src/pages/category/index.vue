<template>
    <div class="wrap">
        <header>
            <div class="back"><img src="@/assets/img/icon/goback.png" alt=""></div>
            <div class="menu">
                <ul>
                    <li class="active" @click="type = 'Category'">Category</li>
                    <li @click="type = 'Store'">Store</li>
                    <li @click="type = 'Store'"> Store</li>
                </ul>
            </div>
        </header>
        <component :is = 'type'></component>
    </div>
</template>

<script>
// import apiCoupon from "@/api/coupon";
import Category from "./component/Category";
import Store from "./component/Store";
// import Brands from "./component/Brands";

export default {
  name: "",
  data() {
    return {
        type: 'Store'
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  components: {
      Category,
      Store
  },
    methods: {
    init_data() {
      // coupon.coupon({ status: 2 }).then(res => {
      //   this.coupon_list = res.data;
      //   this.is_checked = this.$store.state.order_detail.is_selected_couponid;
      // });
    },
  },
};
</script>

<style lang='scss' scoped>
    @import './css/index.scss';
</style>
