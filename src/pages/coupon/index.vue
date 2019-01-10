<template>
  <div class="coupon">
    <!-- <div class="get-coupon">
      <input type="text"
        placeholder="Enter coupon code">
      <span>Apply</span>
    </div> -->
    <ul class="coupon-list">
      <template v-if="coupon_list.length">

        <li :class="index===is_checked?'active':''"
          class="coupon-item"
          v-for="(item,index) in coupon_list"
          :key="index"
          @click="choice_cur(index,item)">
          <p class="coupon-title"> {{item.name}}</p>
          <p class="coupon-desc">{{item.desc}}</p>
          <p class="coupon-time">Expires on {{item.end_time | dateServer}} </p>
        </li>
      </template>
    </ul>
    <div class="done-btn">
      <a href="javascript:;"
        @click="go_back(cur_coupon)">Done</a>
    </div>
  </div>
</template>

<script>
import coupon from "@/api/coupon";
export default {
  name: "",
  data() {
    return {
      coupon_list: [],
      is_checked: -1,
      cur_coupon: undefined
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    go_back(item) {
      this.$store.state.order_detail.coupon = item;
      console.log(this.$store);
      this.$router.go(-1);
    },
    init_data() {
      coupon.coupon({ status: 2 }).then(res => {
        this.coupon_list = res.data;
      });
    },
    choice_cur(index, item) {
      this.is_checked = index;
      this.cur_coupon = item;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.coupon {
  background-color: #f3f3f3;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
.get-coupon {
  // padding:0 12px;
  margin: 0 12px 22px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  // background-color: #000;
  input {
    flex: 1;
    height: 100%;
    border: none;
    padding: 20px;
  }
  span {
    height: 100%;
    line-height: 40px;
    color: #fff;
    background-color: #000;
    width: 84px;
    text-align: center;
    font-size: 14px;
  }
  // width:335px;
  // margin:40px auto 0;
}
.coupon-list {
  flex: 1;
  overflow: auto;
  font-family: "AvertaStd-Bold";
  padding: 0 10px;
  .coupon-title {
    font-size: 24px;
    font-weight: bold;
    color: rgba(215, 14, 25, 1);
    line-height: 17px;
    padding-bottom: 6px;
  }
  .coupon-desc {
    font-size: 12px;
    font-weight: bold;
    color: rgba(215, 14, 25, 1);
    line-height: 16px;
    min-height: 16px;
  }
  .coupon-time {
    padding-top: 11px;
    font-size: 10px;
    font-weight: 300;
    color: rgba(137, 137, 137, 1);
    line-height: 12px;
  }
}
.coupon-item {
  height: 87px;
  background: #fff url("/static/img/icon/coupon_no.png") 304px center no-repeat;
  padding: 15px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 14px;
  cursor: pointer;
  & > p {
    padding-right: 90px;
  }
}
.active {
  background: #fff url("/static/img/icon/coupon_yes.png") 304px center no-repeat;
}
.done-btn {
  text-align: center;
  background-color: #fff;
  padding: 10px 0;
  a {
    display: inline-block;
    width: 250px;
    height: 40px;
    background: #d70e19;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
}
// .coupon-item {
//   height: 120px;
//   display: flex;
//   justify-content: center;
//   .left-coupon {
//     height: 100%;
//     width: 250px;
//     background: #f3f3f3 url("/static/img/icon/优惠券2.png") no-repeat center
//       left;
//     background-size: 100% 100%;
//     padding: 20px 10px 10px 30px;
//     p {
//       font-size: 10px;
//       // font-weight: 300;
//       color: rgba(0, 0, 0, 1);
//       line-height: 10px;
//     }
//     .coupon-title {
//       font-size: 28px;
//       min-height: 60px;
//       font-weight: bold;
//       color: rgba(215, 14, 25, 1);
//       line-height: 28px;
//     }
//   }
//   .right-coupon {
//     height: 100%;
//     width: 95px;
//     background: #f3f3f3 url("/static/img/icon/优惠券1.png") no-repeat center
//       left;
//     background-size: 100% 100%;
//     display: flex;
//     flex-direction: column;
//     align-content: center;
//     justify-content: center;
//     padding: 0 20px 0 10px;
//     .out-time {
//       margin-bottom: 10px;
//       font-size: 12px;
//       color: rgba(0, 0, 0, 1);
//     }
//     a {
//       display: inline-block;
//       // padding:8px 14px;
//       font-size: 10px;
//       height: 22px;
//       width: 60px;
//       text-align: center;
//       background-color: #000;
//       color: #fff;
//       border-radius: 11px;
//       line-height: 22px;
//     }
//     .right-white {
//       vertical-align: top;
//       display: inline-block;
//       height: 100%;
//       width: 10px;
//       background: url("/static/img/icon/get now大.png") no-repeat center center;
//       background-size: 100% auto;
//     }
//   }
// }
</style>
