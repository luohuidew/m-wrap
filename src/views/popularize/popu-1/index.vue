<template>
  <div class="article-detail">
    <div class="btn-wrap">
      <p class="button" @click="toShare">SHARE</p>
      <p class="button check" @click="checkStatus">CHECK STATUS</p>
    </div>
      <div class="over-btn">
          <router-link :to="{path: '/about'}" class="btn">PRODUCT LIST</router-link>
          <router-link :to="{path: '/'}" class="btn">HOME PAGET</router-link>
      </div>
    <van-popup v-model="showShareBox">
        <div class="share-box">
            <h3 class="title">SHARE YOUR LINK</h3>
            <input type="text" id="successinput" class="succee-input" readonly="readonly" v-model="link"/>
            <div class="copy" @click="copyLink"
                 data-clipboard-target="#successinput"
                 :data-clipboard-text="link"
            >
                {{link}}
            </div>
            <div class="icon-box">
                <ShareFb :changeUrl="link">
                    <div class="icon" slot="icon">
                        <img src="./img/facebook.png" alt="">
                        <p>Facebook</p>
                    </div>
                </ShareFb>

                <div class="icon"></div>
            </div>
        </div>
    </van-popup>
  </div>
</template>

<script>
// import footerAbout from "../components/footer-about"
import ShareFb from "@/components/share-fb-other"
import data from "./config";
import clipboard from 'clipboard';
import {getToken} from '@/utils/auth';


export default {
  name: "ac-13",
  data() {
    return {
      copyBtn: null,
      showShareBox: false,
      item_data: data,
      link: 'https://m.weget.com/login/index'
    };
  },
  created() {
      if (window.location.origin.indexOf("https") === -1) {
          this.link = "wap.middleware.weget.com/login/index";
      }
  },
  mounted() {
  },
  computed: {},
  methods: {
    copyLink() {
          let coyd = new clipboard('.copy');
          coyd.on('success', ()=> {
              this.$toast('Copy Success');
              coyd.destroy()
          });
      },
    toShare() {
        let href_params = {
            type: 102,
            data: {}
        };
        let temp = this.$CM.weget_device_link(href_params);
        if (temp === "h5") {
            if (getToken()){
                this.showShareBox = true;
            } else {
                console.log(this.$route)
                this.$router.push({path:'/login', query:{redirect: this.$route.fullPath}})
            }

        }
    },
    checkStatus() {
        this.$router.push({
            path: "/popularize/popu-1/check",
        });
    },
  },
  components: {
    ShareFb
  }
};
</script>

<style lang='scss' scoped>
.article-detail {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100%;
  background: url("./img/share.gif") no-repeat;
  background-size: cover;
  background-position: center;
    .succee-input {
        display: none;
    }
    .over-btn {
       position: absolute;
        top: 20px;
        right: 0px;
        .btn{
            height: 26px;
            width: 75px;
            border-radius: 13px 0px 0px 13px;
            background:rgba(0,0,0,0.9);
            color: #fff;
            font-size: 8px;
            line-height: 26px;
            display: block;
            margin-top: 10px;
            text-align: center;
            &:last-child{
                background:rgba(199,84,109,0.9);
            }
        }
    }
  .btn-wrap {
    position: absolute;
    bottom: 50px ;
    width: 100%;
    text-align: center;
    .button {
      border-radius: 5px;
      color: #fff;
      font-size:15px;
      font-weight:bold;
      line-height: 37px;
      width: 193px;
      margin: 0px auto;
      background-color: #000000;
      &.check {
        margin-top: 18px;
        background:rgba(199,84,109,1);
      }
    }
  }
    & /deep/ .van-popup {
        background-color: rgba(255,255,255,0);
    }
   .share-box {
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 5px;
        width: 292px;
        padding: 30px;
        background-color: #fff;
       text-align: center;
        .title {
            font-size:15px;
            font-weight:bold;
        }
        .copy {
            cursor: pointer;
            width: 191px;
            height: 43px;
            line-height: 43px;
            padding-left: 30px;
            background: url('./img/copy.png') no-repeat 10px center;
            background-size: 17px auto;
            overflow: hidden;
            background-color: rgba(247,247,247,1);
            font-size: 14px;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px auto;
        }
        .icon-box {
            text-align: center;
            .icon {
                display: inline-block;
                img {
                    width: 38px;
                }
                p{
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
