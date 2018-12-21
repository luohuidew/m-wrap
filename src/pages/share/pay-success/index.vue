<template>
  <div class="share-page">
    <div class="group-box">
    </div>
    <sale></sale>
  </div>
</template>

<script>
import sale from "./sale";
import api from "@/api/share";
import order from "@/api/order";
export default {
  name: "",
  data() {
    return {
      cur_order_no: this.$route.query.order_no
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      let share_token = this.$route.query.share_token;
      let params = {
        device_type: "wap",
        share_token: share_token
      };
      this.$store.state.share_token = share_token;
      api.transform(params).then(res => {
        console.log(res);
        api.group({ order_no: res.data.order_no }).then(res => {
          this.order = res.data.order;
          this.group_user = res.data.order.group_user;
          this.recommended_group = res.data.recommended_group;
          let share = res.share_info;
          for (var key in share) {
            this[key] = share[key];
          }
          // this.pageName = "hello";
        });
        // this.$CM.share_data(share);
      });
      order.order_detail(params).then(res => {
        console.log(res);
      });
    }
  },
  components: {
    sale,
  }
};
</script>

<style lang='scss' scoped>
.group-box {
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    p,
    li {
      text-align: center;
    }
  }
}
</style>
