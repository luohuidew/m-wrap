<template>
  <div class="store-footer">
    <ul>
      <li @click="to_category">
        <img src="/static/demo.png"
          alt=""
          srcset="">
        <p>Product Category</p>
      </li>
      <li @click="to_info">
        <img src="/static/demo.png"
          alt=""
          srcset="">
        <p>Store Info</p>
      </li>
      <li>
        <img src="/static/demo.png"
          alt=""
          srcset="">
        <p>Contact Store</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    footerData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    to_category() {
      let path_params = {
        path: "/store/category",
        query: {
          store_id: this.$route.query.store_id
        }
      };
      this.$router.push(path_params);
    },
    to_info() {
      let path_params = {
        path: "/store/info",
        query: {
          store_id: this.$route.query.store_id
        }
      };
      this.$router.push(path_params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.store-footer {
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      img {
        height: 30px;
        width: 30px;
      }
      p {
        font-size: 10px;
      }
    }
  }
}
</style>
