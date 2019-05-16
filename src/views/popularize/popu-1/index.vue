<template>
  <div class="article-detail">
      <img src="./img/share.gif" alt="">
    <div class="btn-wrap">
      <p class="button" @click="toShare">SHARE</p>
      <p class="button check" @click="checkStatus">CHECK STATUS</p>
    </div>
      <div class="over-btn">
          <!--<router-link :to="{path: '/hot?list_type=13'}" class="btn">PRODUCT LIST</router-link>-->
          <a class="btn" @click="homePage" v-if="!isInApp">HOME PAGE </a>
      </div>
    <!--<van-popup v-model="showShareBox" :close-on-click-overlay="false">-->
        <!--<div class="share-box">-->
            <!--<h3 class="title">SHARE YOUR LINK</h3>-->
            <!--<input type="text" id="successinput" class="succee-input" readonly="readonly" v-model="link"/>-->
            <!--<div class="copy" @click="copyLink"-->
                 <!--data-clipboard-target="#successinput"-->
                 <!--:data-clipboard-text="link"-->
            <!--&gt;-->
                <!--{{link}}-->
            <!--</div>-->
            <!--<div class="icon-box">-->
                <!--<ShareFb :changeUrl="link" class="marginLeft">-->
                    <!--<div class="icon" slot="icon">-->
                        <!--<img src="./img/facebook.png" alt="">-->
                        <!--<p>Facebook</p>-->
                    <!--</div>-->
                <!--</ShareFb>-->
                <!--<ShareMes :changeUrl="link">-->
                    <!--<div class="icon" slot="icon">-->
                        <!--<img src="./img/messenger.png" alt="">-->
                        <!--<p>Messenger</p>-->
                    <!--</div>-->
                <!--</ShareMes>-->
            <!--</div>-->
        <!--</div>-->
    <!--</van-popup>-->
    <van-popup v-model="UserBox" :close-on-click-overlay="false">
        <van-icon name="close" />
          <div class="share-box">
              <van-icon name="cross" @click="goBuy" style = "right:10px;top:30px;position: absolute"/>
              <h4 class="title">
                  You’re already a member of WeGet.
              </h4>
              <div class="icon-box">
                    <!--<div class="btn" @click="toShare">SHARE</div>-->
                    <div class="btn buy" @click="goBuy">SHOP NOW</div>
              </div>
          </div>
    </van-popup>
    <van-popup v-model="NewUserBox" :close-on-click-overlay="false">
          <div class="share-box">
              <van-icon name="cross" @click="goBuy" style = "right:10px;top:10px;position: absolute"/>

              <h4 class="title">
                  Thank you for signing up with WeGet! Enjoy $30 worth of coupons on us!
              </h4>
              <div class="icon-box">
                  <!--<div class="btn" @click="toShare">SHARE</div>-->
                  <div class="btn buy" @click="goBuy">SHOP NOW</div>
              </div>
          </div>
      </van-popup>


  </div>
</template>

<script>
// import footerAbout from "../components/footer-about"
import ShareFb from "@/components/share-fb-other"
import ShareMes from "@/components/share-messager-other"
import data from "./config";
import clipboard from 'clipboard';
import {getToken, setToken, setUserShareId} from '@/utils/auth';
import api from "@/api/trial";
import share from "@/api/share";


export default {
  name: "ac-13",
  data() {
    return {
      isInApp: true,
      copyBtn: null,
      showShareBox: false,
       UserBox: false,
      NewUserBox: false,
      item_data: data,
      link: 'https://m.weget.com/popularize/login/index?share_user_id='
    };
  },
  created() {
      this.isInApp = this.$CM.is_weget()
      this.initDialog()
      if (window.location.origin.indexOf("https") === -1) {
          this.link = "http://wap.middleware.weget.com/popularize/login/index?share_user_id=";
      }
  },
  mounted() {
  },
  computed: {},
  methods: {
      homePage() {
          let href_params = {
              type: 105,
              data: {}
          };
          let temp = this.$CM.weget_device_link(href_params);
          if (temp === "h5") {
              this.$router.push({path: '/'})
          }
      },
      goBuy() {
          this.$router.push({path: '/'})
      },
      initDialog() {
          const selefUser = this.$route.query.selefUser
          const UserIsNew = this.$route.query.UserIsNew
          const UserIsOld = this.$route.query.UserIsOld
          if (UserIsNew) {
              this.NewUserBox = true
          }
          if (UserIsOld) {
              this.UserBox = true
          }
          if (sessionStorage.ShareBoxPopularize) {
              this.NewUserBox = false
              this.UserBox = false
          }
      },
    getUserId() {
      if (getToken()){
          api.getUserInfo().then(res => {
              const str = "Shop this summer at WeGet, a stylish online fashion marketplace. Get Mystery Coupons when you Sign up with this link "
              const sharelink = this.link +=  res.data.id
             this.link = str + sharelink
              setUserShareId(res.data.id)
              this.$router.push({path:'/popularize/popu-1/share', query:{url: this.link}})
              // this.shareinfo(res.data.id) // 获取分享数据
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
        if (getToken()){
            this.getUserId()
            // this.$router.push({path:'/popularize/popu-1/share', query:{url: this.link}})
        } else {
            const _this = this
            if (this.$CM.is_weget()) {
                let params = {
                    type: 103,
                    data: {}
                };
                /* 判断登录，选择不同的登录方式 */
                if (localStorage.getItem('device') === 'ios') {
                    let temp_params = params
                    window.webkit.messageHandlers.javaScriptToNative.postMessage(temp_params);
                    /* ios触发登录页面传递给h5 */
                    window.nativeToJavaScript_sendToken = function (res) {
                        let token = res.token;
                        if (token) {
                            setToken(token);
                            _this.getUserId()
                        }
                    };
                } else if (localStorage.getItem('device') === 'android') {
                    /* android环境的判断 */
                    // let temp_params = JSON.stringify(params);
                    let and_token = window.weget_mobile_type.nativeToJavaScript_sendToken();
                    if (and_token) {
                        setToken(and_token);
                        this.getUserId()
                    }
                }
            } else {
                this.$router.push({path:'/login', query:{redirect: this.$route.fullPath}})
            }

        }
    },
      closeUop() {
          this.UserBox = false
          this.NewUserBox = false
          sessionStorage.ShareBoxPopularize=true
      },
    checkStatus() {
        if (getToken()){
            this.$router.push({
                path: "/popularize/popu-1/check",
            });
        } else {
            if ( this.$CM.is_weget) {
                let params = {
                    type: 103,
                    data: {}
                };
                /* 判断登录，选择不同的登录方式 */
                if (localStorage.getItem('device') === 'ios') {
                    let temp_params = params
                    window.webkit.messageHandlers.javaScriptToNative.postMessage(temp_params);
                } else if (localStorage.getItem('device') === 'android') {
                    /* android环境的判断 */
                    // let temp_params = JSON.stringify(params);
                    let and_token = window.weget_mobile_type.nativeToJavaScript_sendToken();
                    if (and_token) {
                        setToken(and_token);
                        window.location.reload();
                    }
                }
            } else {
                this.$router.push({path:'/login', query:{redirect: this.$route.fullPath}})
            }
        }

    },
  },
  components: {
    ShareFb,
      ShareMes
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
    & >>> .van-popup {
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
       h4.title {
           font-size:16px;
           font-weight:bold;
           line-height: 25px;
           margin-bottom: 20px;
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
            .btn {
                display: inline-block;
                width: 60%;
                margin-left: 5%;
                margin-right: 5%;
                font-size:15px;
                font-weight:bold;
                background:rgba(0,0,0,1);
                border-radius: 5px;
                height: 40px;
                line-height: 40px;
                color:rgba(255,255,255,1);
                &.buy {
                    background:rgba(199,84,109,1);

                }
            }
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
            .marginLeft {
                margin-right: 20px;
            }
        }
    }
}
</style>
