<template>
  <div class="christmas-detail">
    <div class="popballoons-header">
      <img src="/static/img/popballoons/icon/Goodtaste!.png"
        alt=""
        srcset="">
      <span class="lap_number">Pop {{req_data.lamp_num}} balloons within
        24 hours to win!</span>
    </div>
    <div class="popballoons-content">
      <img :src="req_data.image"
        alt="">
      <div class="price-box">
        <p>REG</p>
        <p>${{req_data.price}}</p>
      </div>
    </div>
    <div class="pop-description">
      {{req_data.name}}
    </div>
    <div class="popballoons-btn">
      <span @click="to_lists">
        <img src="/static/img/popballoons/btn/btn-3Stillthinking@2x.png"
          alt="">
      </span>
      <span @click="to_during">
        <img src="/static/img/popballoons/btn/btn-3Iwantit@2x.png"
          alt=""></span>
    </div>
  </div>
</template>

<script>
import fbMsShare from "./components/fb-ms-share";
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {
      req_data: {
        lamp_num: "",
        detail_image: ""
      },
      is_fb_show: false,
      can_click: true,
      share_info: this.$store.state.christmas_share_info
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      let params = {
        id: this.$route.query.id
      };
      api.watch_detail(params).then(res => {
        console.log(res);
        this.req_data = res.data;
      });
    },
    to_during() {
      //  alert(8)
      let params = {
        id: this.$route.query.id
      };
      sessionStorage.setItem("temp_status", "1");
      if (this.can_click) {
        this.can_click = false;
        api
          .add_sku(params)
          .then(res => {
            // console.log(res);
            // if (window.weget_mobile_type === "iOS") {
            //   this.is_fb_show = true;
            // } else {
            //   }
            this.$router.replace({ name: "popballoons-during" });
          })
          .catch(res => {
            this.$router.replace({ name: "popballoons" });
          });
      }
    },
    to_lists() {
      this.$router.go(-1);
    },   
  },
  components: {
    fbMsShare
  }
};
</script>

<style lang='scss' scoped>
.christmas-detail {
  // width: 375px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  padding: 0 20px;
  font-size: 0;
}
.popballoons-header {
  position: relative;
  width: 350px;
  max-width: 100%;
  height: 180px;
  position: relative;
  background: url("/static/img/popballoons/background/coupon_box.png") no-repeat
    center center;
  background-size: 100%;
  // padding: 20px 0px 30px 0px;
  margin: 0 auto;
  text-align: center;
  img {
    position: relative;
    margin-top: 32px;
    width: 177px;
    height: 30px;
  }
  .lap_number {
    position: absolute;
    width: 240px;
    left: 50%;
    top: 53.5%;
    transform: translateX(-50%);
    font-size: 23px;
    color: #2c2c2c;
    // font-weight: bold;
  }
}

.popballoons-content {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 50px auto 25px auto;
  text-align: center;
  background: url("/static/img/popballoons/background/sku_bg.png") no-repeat
    center center;
  background-size: 100%;
  // flex: 1;
  // overflow: auto;
  text-align: center;
  .price-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7%;
    right: 12%;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    font-size: 12px;
    background-color: #000;
    color: #e3c388;
  }
  img {
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translateX(-50%);
    height: 66%;
    width: auto;
  }
}
.pop-description {
  margin: 0 auto;
  width: 50%;
  font-size: 20px;
  color: #ECCFA0;
  text-align: center;
}
.popballoons-btn {
  // height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 30px;
  span {
    // background-color: #f90;
    color: #fff;
    padding: 10px 0px;
  }
  img {
    height: 45px;
  }
}
</style>
