<template>
  <div class="footer-box">
    <ul>
      <li>
        <h4>ABOUT US</h4>
      </li>
      <li>
        <p class="about-desc">
          WeGet brings together designer brands, shops, magazine editors,
          influencers and fashion pioneers from around the globe to promote stores and their products.
        </p>
      </li>
      <li>
        <h4>FOLLOW US</h4>
      </li>
      <li>
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
      </li>
    </ul>
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
.footer-box {
  padding: 15px;
  padding-bottom: 20px;
  color: #ffffff;
  background-color: #1f1f1f;
  h4 {
    font-size: 15px;
    padding-bottom: 12px;
    font-weight: normal;
  }
  .about-desc {
    font-size: 12px;
    line-height: 1.5;
    padding-bottom: 20px;
  }
  img {
    // width: 16px;
    width: auto;
    height: 16px;
    margin-right: 24px;
    
  }
}
</style>
