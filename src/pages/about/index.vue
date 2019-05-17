<template>
  <div class="about-us-page">
    <ul>
      <li>
        <img src="./img/about-us_01.jpg"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="./img/about-us_02.jpg"
          alt=""
          srcset="">
      </li>
      <li class="gif">
        <img src="./img/about-us_03.jpg"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="./img/about-us_04.jpg"
          alt=""
          srcset="">
      </li>
      <li class="gif">
        <img src="./img/about-us_05.jpg"
          alt=""
          srcset="">
      </li>
      <li class="jumpLink">
        <a class="email" href="mailto:business@weget.com">
          <span>CREATE YOUR STORE NOW</span>
          <img src="./img/about-us-link.png" alt="" class="linkImg">
        </a>
      </li>
      <li>
        <img src="./img/about-us_06.jpg"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="./img/about-us_07.jpg"
          alt=""
          srcset="">
      </li>
      <li class="jumpLink">
        <a @click="shopNow">
          <span>SHOP NOW</span>
          <img src="./img/about-us-link.png" alt="" class="linkImg">
        </a>
      </li>
      <li>
        <img src="./img/about-us_08.jpg"
             alt=""
             srcset="">
      </li>
      <li>
        <img src="./img/about-us_09.jpg"
             alt=""
             srcset="">
      </li>
      <li>
        <img src="./img/about-us_10.jpg"
             alt=""
             srcset="">
      </li>
      <li>
        <a class="email" href="mailto:business@weget.com">

          <img src="./img/about-us_11.jpg"
              alt=""
              srcset="">
        </a>
      </li>
    </ul>
    <div class="footer">
      <div class="about_row1">
        <!-- <img class="bgimg" src="/static/img/about/icon bg@2x.png"> -->
        <p>
          <a href="https://www.facebook.com/wegetofficial">
            <img src="/static/img/about/iconF@2x.png">
          </a>
          <a href="https://www.instagram.com/shopweget">
            <img src="/static/img/about/iconO@2x.png">
          </a>
          <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
            <img src="/static/img/about/iconA@2x.png">
          </a>
        </p>
      </div>
      <!--<div class="about_row2">-->
      <!--<img class="bgimg"-->
      <!--src="/static/img/about/底部@2x.png">-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    shopNow(){
      let href_params = {
        "type": 106,
        "data": {
          "route": "wemall-inside://global?type=4"
        }
      };
      let temp = this.$CM.weget_device_link(href_params);
      if (temp === "h5") {
        this.$router.push({path: "/",});
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.about-us-page {
  font-size: 0;
  img {
    width: 100%;
  }
  /*.gif {
    padding: 0 28px;
  }*/
  .jumpLink a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:2px 0;
    span {
      font-size: 10px;
      font-weight: bold;
      margin-right: 10px;
      text-decoration: underline;
    }
    .linkImg {
      width: 10px;
      height: 8px;
    }
  }
  .footer {
    background: #1f1f1f;
    width: 100%;
    display: flex;
    flex-direction: column;
    .bgimg {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    div.about_row1 {
      width: 100%;
      height: 60px;
      background: rgb(33, 33, 33);
      margin: 0;
      padding: 0;
      overflow: hidden;
      position: relative;
      p {
        position: absolute;
        width: 80%;
        height: 22px;
        top: 50%;
        left: 10px;
        transform: translate(0%, -50%);
        text-align: center;
        a {
          float: left;
          margin: 0 15px;
          img {
            width: auto;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
