<template>
  <div class="goods-card"
    v-if="order"
    @click="to_detail(order)">
    <div class="cover-img">
      <img :src="order.cover_img"
        alt=""
        srcset="">
    </div>
    <div class="goods-desc">
      <p class="text">
        {{order.title}}
      </p>
      <p class="buyer">
        {{order.attr}}
      </p>

      <p class="price">
        <span class="red-price">${{order.group_price}}</span>
        <span class="no-price">${{order.alone_price}}</span>
      </p>
      <p class="detail-btn">
        <a href="javascript:;"><span> Detail </span><i><img src="/static/img/icon/get now大.png"
              alt=""
              srcset=""></i></a>
      </p>
    </div>
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
    to_detail(order) {
      let status = order.group_buy.status;
      let params = {
        //  path:'/detail',
        name: "detail",
        query: {
          sku_id: order.sku_id,
          status: status
        }
      };
      //  console.log(params);
      if (status === 1) {
        params.query.group_id = order.group_buy.id;
      }
      // debugger;
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  font-size: 14px;
  border-top: 2px solid #f3f3f3;
  border-bottom: 6px solid #f3f3f3;
}
.cover-img {
  padding: 10px;
  font-size: 0;
  img {
    width: 140px;
    height: 100%;
  }
}
.goods-desc {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  .text {
    height: 54px;
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .buyer {
    font-size: 12px;
    padding: 10px 0 10px 0;
  }
  .red-price {
    font-size: 18px;
    color: #d80c18;
    font-weight: bold;
  }
  .no-price {
    color: #9b9b9b;
    font-size: 14px;
    text-decoration: line-through;
    padding-left: 12px;
  }
}
.detail-btn {
  display: flex;
  padding-top:14px;
  a {
    // width: 100px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    background-color: #000;
    border-radius: 15px;
    color: #fff;
    padding: 0 30px;
    span {
      font-size: 12px;
      vertical-align: center;
    }
    img {
      height: 12px;
      vertical-align: middle;
    }
  }
}
</style>
