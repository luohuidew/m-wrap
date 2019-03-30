<template>
  <div class="home-cate"
    v-if="cateData">
    <ul>
      <li v-for="(item,index) in listsData"
        :key="index">
        <router-link class="remo-box"
          :to="{path:item.path}">
          <img :src="item.image_url"
            alt="">
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      cateData: this.listsData
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.home-cate {
  padding: 15px 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    & > li {
      width: 25%;
    }
  }
}
/* hezi */
.remo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 57px;
    width: 57px;
  }
  span {
    font-size: 10px;
  }
}
</style>
