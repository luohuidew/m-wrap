<template>
  <div class="my-order-page">
    <van-tabs v-model="active"
      animated
      sticky>
      <van-tab v-for="(item) in numeLists"
        :key="item.label"
        :title="item.title">
        <div slot="title">
          <span class="title-icon">{{item.title}}</span>
        </div>
      </van-tab>
    </van-tabs>
    <ul class="order-lists"
      v-if="orderData.length">
      <li v-for="(item) in orderData"
        :key="item.id">
        <orderCard :data="item"
          v-if="active===0||item.status===active" />
      </li>
    </ul>
    <!-- <div v-if="orderData.some()"
      class="emity-box">
      <img src="/static/images/icon/normal/wemall_noData_coupon_icon@3x.png"
        alt="">
      <p></p>
    </div> -->
  </div>
</template>

<script>
import orderCard from "./components/orderCard";
import ORDER from "@/api/order";
export default {
  name: "",
  props: {},
  data() {
    return {
      active: 0,
      numeLists: [
        {
          title: "All",
          label: 0
        },
        {
          title: "Pay",
          label: 1
        },
        {
          title: "Processing",
          label: 2
        },
        {
          title: "Shipped",
          label: 3
        }
      ],
      orderData: []
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data(params = {}) {
      ORDER.order_query().then(res => {
        // console.log(res);
        this.orderData = res.data;
        // if (this.order_lists.length === 0) {
        //   setTimeout(()=>{
        //   this.$router.go(-1);
        //   },3000)
        // }
      });
    }
  },
  components: {
    orderCard
  }
};
</script>

<style lang='scss' scoped>
.my-order-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/*  */
.order-lists {
  flex: 1;
  overflow: auto;
}
</style>
