<template>
  <div class="pop-apply-coupon">
    <div class="apply-header">
      <p>
        Congrats!<br />
        You Got It!<br />
        Use your coupon NOW!
      </p>
    </div>
    <ul class="apply-coupon">
      <li class="apply-title">
        <img src="/static/img/popballoons/icon/coupon_apply.png"
          alt=""
          srcset="">
        <img v-if="down_load.coupon_status===2" src="/static/img/popballoons/btn/btn-6apply@2x.png"
          alt=""
          srcset=""
          @click="to_sku_detail(down_load.sku_id,down_load.use_coupon_id)">
          <span v-if="down_load.coupon_status===3">Used</span>
          <span v-if="down_load.coupon_status===4">Expires</span>
      </li>
      <li class="apply-end-time"
        v-if="down_load.end_time">
        <p>{{down_load.name}}</p>
        <p>Expires on {{down_load.end_time | dateServerEnglishYMD}}</p>
      </li>
    </ul>
    <div class="apply-desc">
      <img src="/static/img/popballoons/background/googlecopy@3x.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {
      down_load: {},
      id: this.$route.query.id
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      // console.log(this.id);
      api.down_load({ id: this.id }).then(res => {
        this.down_load = res.data;
        console.log(res);
      });
    },
    to_sku_detail(sku_id, coupon_id) {
      let href_params = {
        type: 106,
        data: {
          route:
            "wemall:///public/route?type=6&coupon_id=" +
            coupon_id +
            "?id=" +
            sku_id +
            ""
        }
      };
      // let temp = this.$CM.weget_device_link(href_params);
      // if (temp === "h5") {
      //   }
      if (coupon_id) {
        this.$router.push({
          path: "/detail",
          query: {
            sku_id: sku_id,
            user_coupon_id: coupon_id,
            act_type: "popballoons"
          }
        });
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.pop-apply-coupon {
  padding: 0 20px 0 15px;
}
.apply-header {
  width: 100%;
  height: 180px;
  background: url("/static/img/popballoons/background/coupon_box.png") no-repeat
    center center;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    text-align: center;
  }
}
.apply-coupon {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  margin: 30px 0;
  background: url("/static/img/popballoons/background/background_scroll.png")
    no-repeat center center;
  background-size: 100% auto;
  padding: 40px 35px;
  .apply-title {
    display: flex;
    justify-content: space-between;
    img {
      height: 25px;
      width: auto;
    }
    span {
      display: inline-block;
      padding: 4px 10px;
      background-color: #8f7d7d;
      color: #ccc;
      border-radius: 8px;
      font-size: 14px;
    
    }
  }
  .apply-end-time {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px 0;
    color: #2c2c2c;
  }
}
.apply-desc {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
