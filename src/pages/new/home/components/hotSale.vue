<template>
  <div class="hot-sale" v-if="req_data">
    <ul>
      <li v-for="(item) in req_data"
        :key="item.id">
        <router-link :to="item.route">
          <img :src="item.image_url"
            alt=""
            srcset="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    req_data() {
      return this.hotData;
    }
  },
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.hot-sale {
  font-size: 0;
  text-align: center;
  padding:10px;
  li {
    display: inline-block;
    width: 50%;
    padding: 0 5px;
  }
  a {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
