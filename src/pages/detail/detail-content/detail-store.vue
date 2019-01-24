<template>
  <div class="store-box"
    v-if="item.store_id">
    <div class="store-title" @click.stop="to_store(item.store_id)">
      <p>
        <img :src="item.logo"
          alt="">
      </p>
      <p class="store-desc">
        <span>{{item.name}}</span>
        <span class="desc-min">{{item.desc}}</span>
      </p>
      <p class="store-btn">
        <a href="javascript:;"
          @click="to_store(item.store_id)">STORE</a>
      </p>
    </div>
    <ul class="store-account">
      <li>
        <span>{{item.comment_rate}}</span>
        <span>Positive Feedback</span>
      </li>
      <li>
        <span>{{item.bought_count}}</span>
        <span>Bought</span>
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
  props: ["item"],
  mounted() {},
  computed: {},
  methods: {
    to_store(cid) {
      let params = {
        path: "/store",
        query: {
          store_id: cid
        }
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.store-box {
  padding: 20px;
  border-top: 10px solid #f8f8f8;
  border-bottom: 10px solid #f8f8f8;
  .store-title {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #f3f3f3;
    & > p {
      display: flex;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
    }
    .store-desc {
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      padding: 0 40px 0 10px;
      .desc-min {
        height: 26px;
        // display: -webkit-box;
        font-size: 12px;
        padding-top: 10px;
        color: #9b9b9b;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .store-btn {
      width: 60px;
      display: flex;
      a {
        width: 100%;
        font-size: 12px;
        border: 1px solid #f3f3f3;
        color: #9b9b9b;
        text-align: center;
        height: 30px;
        line-height: 30px;
        // padding: 8px 0;
        border-radius: 13px;
      }
    }
  }
  .store-account {
    padding-top: 18px;
    display: flex;
    justify-content: center;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        border-right: 1px solid #f3f3f3;
      }
      span {
        font-size: 14px;
        &:nth-child(2) {
          padding-top: 10px;
          font-size: 12px;
          color: #9b9b9b;
        }
      }
    }
  }
}
</style>
