<template>
  <div class="store-footer" v-if="footerData">
    <ul>
      <li @click="to_category">
        <img src="/static/images/icon/store/店铺导航1@3x.png"
          alt=""
          srcset="">
        <p>Product Category</p>
      </li>
      <li @click="to_info">
        <img src="/static/images/icon/store/店铺导航2@3x.png"
          alt=""
          srcset="">
        <p>Store Info</p>
      </li>
      <li>
        <a :href="`mailto:${footerData.store_info.email}`">
          <img src="/static/images/icon/store/店铺导航3@3x.png"
            alt=""
            srcset="">
          <p>Contact Store</p>
        </a>
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
    padding: 0 12px;
    li {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      a {
        text-align: center;
      }
      img {
        height: 30px;
        width: 30px;
        margin-bottom: 4px;
      }
      p {
        font-size: 10px;
      }
    }
  }
}
</style>
