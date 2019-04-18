<template>
  <div class="about-us-page">
    <ul>
      <li>
        <img src="/static/images/elements/about/about-us_01.jpg"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="/static/images/elements/about/about-us_02.jpg"
          alt=""
          srcset="">
      </li>
      <li class="gif">
        <img src="/static/images/elements/about/about-us_03.gif"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="/static/images/elements/about/about-us_04.jpg"
          alt=""
          srcset="">
      </li>
      <li class="gif">
        <img src="/static/images/elements/about/about-us_05.gif"
          alt=""
          srcset="">
      </li>
      <li>
        <img src="/static/images/elements/about/about-us_06.jpg"
          alt=""
          srcset="">
      </li>      
      <li>
        <img src="/static/images/elements/about/about-us_07.jpg"
          alt=""
          srcset="">
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
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.about-us-page {
  font-size: 0;
  img {
    width: 100%;
  }
  .gif {
    padding: 0 28px;
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
