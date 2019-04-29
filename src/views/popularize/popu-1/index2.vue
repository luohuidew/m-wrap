<template>
  <div class="article-detail">
      <img src="./img/share.gif" alt="">
    <div class="btn-wrap">
      <p class="button" @click="toShare">SHARE</p><br>
      <p class="button" @click="toShare2">原生messenger</p><br>
      <p class="button" @click="toShare4">网页facebook</p><br>
        <div id="fb-root"></div><br>
        <div class="fb-share-button" data-href="https://m.weget.com" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fm.weget.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share666</a></div>
        <br> <p class="button check" @click="checkStatus">CHECK STATUS</p>
    </div>
      <div class="over-btn">
          <router-link :to="{path: '/hot?list_type=13'}" class="btn">PRODUCT LIST</router-link>
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
import api from "@/api/trial";
import share from "@/api/share";


export default {
  name: "ac-13",
  data() {
    return {
      copyBtn: null,
      showShareBox: false,
      item_data: data,
      link: 'https://m.weget.com/login/index?share_user_id='
    };
  },
  created() {
      this.getUserId()
      if (window.location.origin.indexOf("https") === -1) {
          this.link = "wap.middleware.weget.com/login/index?share_user_id=";
      }
  },
  mounted() {
  },
  computed: {},
  methods: {
    getUserId() {
      if (getToken()){
          api.getUserInfo().then(res => {
             this.link +=  res.data.id
              this.shareinfo(res.data.id)
          });
      }

    },
      shareinfo(userid) {
        let share_params = {
            share_type: "8",
            share_user_id:  userid,
        }
          share.getShareInfo(share_params).then(res => {
              this.sharDatas = res.data
              // this.$store.state.share_token = share_token;
          });

      },
    copyLink() {
          let coyd = new clipboard('.copy');
          coyd.on('success', ()=> {
              this.$toast('Copy Success');
              coyd.destroy()
          });
      },
    toShare() {
        // 原来的
        if (getToken()){
            let href_params = {
                type: 102,
                data: this.sharDatas
            };
            let temp = this.$CM.weget_device_link(href_params);
            if (temp === "h5") {
                this.showShareBox = true;
            }
        } else {
            this.$router.push({path:'/login', query:{redirect: this.$route.fullPath}})
        }
    },
      toShare2() {
          var link = "https://m.weget.com/login/index"
          const url = 'fb-messenger://share?link=' + encodeURIComponent(link) + '&app_id=' + encodeURIComponent(884670545062683)
          // this.openApp(url, (val) => {
          //     if(val === 0) { // 没有检测到App
          //         // 打开网页版faceBook
          //         this.toShare4()
          //     }
          // })
          location.href= url
      },
      toShare4() {
          var link = "https://m.weget.com/login/index"
          var re = location.href
         var url = 'https://www.facebook.com/dialog/share?app_id=2372409919453080&display=popup&href='+ encodeURIComponent(link) +'&redirect_uri='+ encodeURIComponent(re)
          window.open(url)
      },
    checkStatus() {
        this.$router.push({
            path: "/popularize/popu-1/check",
        });
    },
      openApp(openUrl, callback) {
          //检查app是否打开
          function checkOpen(cb){
              var _clickTime = +(new Date());
              function check(elsTime) {
                  if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
                      cb(1);
                  } else {
                      cb(0);
                  }
              }
              //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
              var _count = 0, intHandle;
              intHandle = setInterval(function(){
                  _count++;
                  var elsTime = +(new Date()) - _clickTime;
                  if (_count>=100 || elsTime > 3000 ) {
                      clearInterval(intHandle);
                      check(elsTime);
                  }
              }, 20);
          }

          //在iframe 中打开APP
          var ifr = document.createElement('iframe');
          ifr.src = openUrl;
          ifr.style.display = 'none';

          if (callback) {
              checkOpen(function(opened){
                  callback && callback(opened);
              });
          }

          document.body.appendChild(ifr);
          setTimeout(function() {
              document.body.removeChild(ifr);
          }, 2000);

      }
  },
  components: {
    ShareFb
  }
};
</script>

<style lang='scss' scoped>
.article-detail {
  width: 375px;
  height:646px;
    overflow: auto;
  position: relative;
  background-size: cover;
  background-position: center top;
    img {
        width: 100%;
    }
    .succee-input {
        display: none;
    }
    .over-btn {
       position: fixed;
        top: 150px;
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
    bottom: 80px ;
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
