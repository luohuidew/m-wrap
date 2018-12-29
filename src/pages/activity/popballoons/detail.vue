<template>
  <div class="christmas-detail">
    <div class="christmas-header">
      <img src="/static/img/christmas/icon/Completelightswithin48houstogetthis.png"
        alt=""
        srcset="">
      <span class="lap_number">{{req_data.lamp_num}}</span>
    </div>
    <div class="christmas-content">
      <img :src="req_data.detail_image"
        alt="">
    </div>
    <div class="christmas-btn">
      <span @click="to_lists">
        <img src="/static/img/christmas/icon/Stillthinking@2x.png"
          alt="">
      </span>
      <span @click="to_during">
        <img src="/static/img/christmas/icon/Iwantit@2x.png"
          alt=""></span>
    </div>
    <!-- <fb-ms-share v-show="is_fb_show"
      @close="close_href">
      <template>       
        <span slot="btn-top"
          @click="share_type(1)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x_38.png"
            alt="Facebook">
        </span>
        <span slot="btn-buttom"
          @click="share_type(2)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x.png"
            alt="Messenger">
        </span>
      </template>
    </fb-ms-share> -->
  </div>
</template>

<script>
import fbMsShare from "./components/fb-ms-share";
import api from "@/api/christmas";
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
            this.$router.replace({ name: "christmas-during" });
          })
          .catch(res => {
            this.$router.replace({ name: "christmas" });
          });
      }
    },
    to_lists() {
      this.$router.go(-1);
    },
    share_type(type) {
      let params;
      if (type === 1) {
        params = {
          type: 107,
          data: this.share_info
        };
      } else {
        params = {
          //108 分享内容到Messenger
          type: 108,
          data: this.share_info
        };
      }
      window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
    },
    close_href() {
      let params = {
        path: "/activity/christmas-during"
        // query: this.share_params
      };
      this.$router.replace(params);
    }
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
  background: url("/static/img/christmas/icon/通用背景.jpg") no-repeat top
    center;
  background-size: 100% 100%;
}
.christmas-header {
  position: relative;
  width: 320px;
  max-width: 100%;
  position: relative;
  padding: 20px 0px 30px 0px;
  margin: 0 auto;
  img {
    position: relative;
    margin: 0 auto;
    height: auto;
    width: 100%;
  }
  .lap_number {
    position: absolute;
    left: 45%;
    top: 53.5%;
    font-size: 18px;
    color: #d5832f;
    font-weight: bold;
  }
}

.christmas-content {
  // flex: 1;
  // overflow: auto;
  text-align: center;
  img {
    width: 180px;
    height: auto;
  }
}
.christmas-btn {
  // height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 50px;
  span {
    // background-color: #f90;
    color: #fff;
    padding: 10px 0px;
  }
  img {
    height: 50px;
  }
}
</style>
