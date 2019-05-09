<template>
  <div class="coupons">
    <ul class="coupon-list">
      <template v-if="coupon_list.length">
        <li class="coupon-item"
          v-for="(item,index) in coupon_list"
          :key="index"
          :class="item.id===is_checked?'active':''"
          @click="choice_cur(index,item)">
          <p class="coupon-title"> {{item.name}}</p>
          <p class="coupon-desc">{{item.desc}}</p>
          <p class="coupon-time">Expires on {{item.end_time | dateServer}} </p>
        </li>
      </template>
      <template v-else>
        <div class="no-coupon">
          <img src="/static/images/icon/normal/wemall_noData_coupon_icon@3x.png"
            alt=""
            srcset="">
          <p>It is empty here ...</p>
        </div>
      </template>
    </ul>
    <div class="done-btn">
      <a href="javascript:;"
        @click="go_back">Done</a>
    </div>
  </div>
</template>

<script>
import coupon from "@/api/coupon";
export default {
  name: "",
  data() {
    return {
      coupon_list:this.couponData,
      is_checked: -1,
      cur_coupon: {}
    };
  },
  props: {
    couponData: {
      default: function () {
        return []
      }
    }
  },
  created() {
    if (this.coupon_list.length>0) {
    } else {
      this.init_data();
    }
  },
  mounted() {},
  computed: {},
  methods: {
    go_back() {
      const obj = {
        id: this.cur_coupon.id
      }
      this.$emit('closeVant',obj)
    },
    init_data() {
      coupon.coupon({ status: 2 }).then(res => {
        this.coupon_list = res.data;
      });
    },
    choice_cur(index, item) {
      this.is_checked = item.id;
      this.cur_coupon = item;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.coupons {
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
  .no-coupon {
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    justify-content: center;
    img {
      width: 90px;
      height: auto;
    }
    p {
      padding-top: 20px;
      font-size: 16px;
      color: #9b9b9b;
    }
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

</style>
