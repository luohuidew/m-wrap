<template>
  <ul class="cate-box"
    v-if="cateData">
    <li v-for="(item,index) in cateData"
      :key="index"
      @click="to_query_list(item.cat_id,item.name)">
      <img src="/static/demo.png"
        alt=""
        srcset="">
      <!-- <img :src="item.img_url"
        alt=""
        srcset=""> -->
      <p class="text-line-clamp-1">{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    cateData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    to_query_list(cat_id, label) {
      let query_params = {
        path: "/search/search-lists",
        query: {
          cat_id: cat_id,
          page_label: label
        }
      };
      this.$router.push(query_params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.cate-box {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 5px;
  padding-bottom: 0;
  border-bottom: 10px solid #f3f3f3;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    width: 25%;
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    p {
      font-size: 10px;
      padding-top: 8px;
      margin-bottom: 20px;
    }
  }
}
</style>
