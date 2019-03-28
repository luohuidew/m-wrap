<template>
  <section class="card-page">
    <div class="coupon-title">
      {{couponData.name}}
    </div>
    <div class="coupon-desc">
      {{couponData.desc}}
    </div>
    <div class="coupon-expired-time">
     Expires on {{couponData.end_time | dateServerEnglishYMD}}
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      couponData: this.data
    };
  },
  computed: {},
  created() {},
  methods: {
    to_detail(coupon_no) {
      let path_params = {
        path: "/user/detail",
        query: {
          coupon_no: coupon_no
        }
      };
      this.$router.push(path_params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$base_color: #d70e19;
.card-page {
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px #cccccc;
  margin-top: 16px;
}
/*  */
.coupon-title {
  font-size: 24px;
  font-weight: bold;
  color: $base_color;
}
.coupon-desc {
  font-size: 12px;
  font-weight: bold;
  color: $base_color;
}
.coupon-expired-time {
  padding-top: 10px;
  font-size: 10px;
  color: #898989;
}
</style>
