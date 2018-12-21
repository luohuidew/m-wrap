<template>
  <div class="wait-group">
    <p class="avator">
      <img v-for="(item,index) in order.group_user"
        :key="index"
        :src="item.photo"
        alt=""
        srcset="">
      <img src="/static/img/icon/emity.png"
        alt=""
        srcset="">
    </p>
    <p class="group-tips">
      Only<span> {{order.group_buy.left_num}} </span>More Time left {{(order.group_buy.left_time) | timeDiff}}
    </p>
    <p class="cor-btn">
      <a href="javascript:;"
        v-if="order.group_buy.id"
        @click="join_group">
        JOIN GROUP
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["order"],
  mounted() {},
  computed: {},
  methods: {
    to_detail(sku_id, group_id) {
      let params = {
        path: "/detail",
        query: {
          sku_id: sku_id,
          group_id: group_id
        }
      };
      this.$router.push(params);
    },
    join_group() {
      let data = {
        group_id: this.order.group_buy.id
      };
      this.$emit("change", data);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.wait-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  p,
  li {
    text-align: center;
  }
}
.avator {
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }
}
.cor-btn {
  padding: 10px 0 10px 0;
  background-color: #fff;
  text-align: center;
  a {
    display: inline-block;
    width: 60%;
    height: 40px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
.group-tips {
  font-size: 12px;
  padding: 10px 0;
  span {
    color: #d70e19;
  }
}
.share-title {
  color: #898989;
  padding: 8px 0;
  font-weight: bold;
}
.share-box {
  display: flex;
  justify-content: center;
  padding-bottom: 18px;
  li {
    padding-right: 16px;
  }
  img {
    height: 34px;
    width: 34px;
  }
}
</style>
