<template>
  <router-link :to="cardData.route" class="theme-card-box" v-if="cardData">
    <img :src="cardData.image_url"
      alt=""
      srcset="">
    <p class="theme-title text-line-clamp-1">
      {{cardData.title}}
    </p>
    <p class="theme-content text-line-clamp-2">
      {{cardData.desc}}      
    </p>
  </router-link>
</template>

<script>
export default {
  name: "",
  props: {
    cardData:{
      type:Object,
      default:undefined
    }
  },
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
.theme-card-box {
  padding: 10px 20px;
  img {
    width: 100%;
    height: 167px;    
    border-radius: 6px;
  }
  .theme-title {
    font-size: 14px;
    color: #000000;
  }
  .theme-content {
    font-size: 12px;
    color: #bbbbbb;
  }
}
</style>
