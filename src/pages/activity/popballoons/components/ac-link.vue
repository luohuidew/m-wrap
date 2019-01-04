<template>
  <div class="pop-about-us">
    <ul>
      <li class="top-line">
        <a href="https://www.facebook.com/wegetofficial">
          <img src="/static/img/popballoons/icon/GOLD_TEXTURE@2x_53.png"
            alt="FB"
            srcset="">
        </a>
        <a href="https://www.instagram.com/shopweget">
          <img src="/static/img/popballoons/icon/GOLD_TEXTURE@2x_87.png"
            alt="INS"
            srcset="">
        </a>
        <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
          <img src="/static/img/popballoons/icon/GOLD_TEXTURE@2x.png"
            alt="Youtube"
            srcset="">
        </a>
      </li>
      <li>
        <p>
          Weget Group Inc.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.pop-about-us {
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
    margin-top: 20px;
    text-align: center;
    padding: 30px 60px;
    font-size: 0;
    p {
      font-size: 10px;
      color:#ddd;
    }
    img {
      height: 22px ;
      width: auto;
      margin: 0 10px;
    }
  }
}
.top-line {
  border-bottom: 1px solid #575757;
  padding-bottom: 14px;
  margin-bottom: 14px;
}
</style>
