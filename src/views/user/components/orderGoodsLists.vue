<template>
  <ul class="order-goods-lists">
    <li v-for="(item,index) in orderDataLists"
      :key="index">
      <div class="cover-img-box">
        <img :src="item.cover_img"
          alt=""
          srcset="">
      </div>
      <div class="goods-desc-box">
        <p class="title text-line-clamp-2">
          {{item.title}}
        </p>
        <p class="attr">{{item.attr_str}}</p>
        <p class="price">
          <span>{{item.price}}</span>
          <span>x {{item.num}}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    orderDataLists:{
      type:Array,
      default:undefined
    }
  },
  data() {
    return {

    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.order-goods-lists {
  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .cover-img-box {
    height: 80px;
    width: 80px;
    margin-right: 20px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 6px;
    }
  }
  .goods-desc-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    font-size: 12px;

    .title {
    }
    .attr {
      color: #9b9b9b;
    }
    .price {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
