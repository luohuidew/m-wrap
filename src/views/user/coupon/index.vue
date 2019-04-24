<template>
  <div class="my-coupon-page">
    <van-tabs v-model="active"
      animated
      sticky>
      <van-tab v-for="(item) in numeLists"
        :key="item.status"
        :title="item.title">
        <div slot="title">
          <span class="title-icon">{{item.title}}</span>
        </div>
      </van-tab>
    </van-tabs>
    <ul class="coupon-lists"
      v-if="couponData.length">
      <li v-for="(item) in couponData"
        :key="item.id">
        <couponCard :data="item"
          v-if="item.status===active+2" />
      </li>
    </ul>
    <!-- <div v-if="couponData.some()"
      class="emity-box">
      <img src="/static/images/icon/normal/wemall_noData_coupon_icon@3x.png"
        alt="">
      <p></p>
    </div> -->
  </div>
</template>

<script>
import couponCard from "./components/couponCard";
import COUPON from "@/api/coupon";
export default {
  name: "",
  props: {},
  data() {
    return {
      active: 0,
      numeLists: [
        {
          title: "Available",
          status: 2
        },
        {
          title: "Used",
          status: 3
        },
        {
          title: "Expired",
          status: 4
        },       
      ],
      couponData: []
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data(params = {}) {
      COUPON.coupon().then(res => {
        // console.log(res);
        this.couponData = res.data;
        // if (this.coupon_lists.length === 0) {
        //   setTimeout(()=>{
        //   this.$router.go(-1);
        //   },3000)
        // }
      });
    }
  },
  components: {
    couponCard
  }
};
</script>

<style lang='scss' scoped>
.my-coupon-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color: #f3f3f3;
}
/*  */
.coupon-lists {
  flex: 1;
  overflow: auto;
  padding: 0 20px 20px 20px;
}
</style>
