<template>
  <div class="category-list"
    v-if="req_data">
    <ul>
      <li v-for="(item) in req_data"
        :key="item.id">
        <router-link :to="{ path: '/hot', query: { first_cat_id: item.id }}">
          <img :src="item.img_url"
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
    categoryData: {
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
      return this.categoryData;
    }
  },
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.category-list {
  font-size: 0;
  text-align: center;
  li {
    display: inline-block;
    width: 33%;
    a {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
