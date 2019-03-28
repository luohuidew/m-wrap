<template>
  <div class="new-store" v-if="req_data">
    <h2>NEW STORES</h2>
    <div class="scroll-wrapper">
      <ul>
        <li v-for="(item) in req_data"
          :key="item.id">
          <router-link :to="item.route">
            <img :src="item.cover_img"
              alt=""
              srcset="">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    storeData: {
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
      return this.storeData;
    }
  },
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.new-store {
  padding: 10px 0;
  h2 {
    font-size: 26px;
    padding: 10px 0;
    text-align: center;
  }
  .scroll-wrapper {
    width: 100%;
    overflow: auto;
    overflow-y: hidden;
  }
  ul {
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 0;
    li {
      display: inline-block;
    }
    img {
      height: 175px;
      width: auto;
      margin: 0 5px;
    }
  }
}
</style>
