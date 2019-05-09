<template>
  <div class="review-box">
    <ul class="checkout-lists-box">
      <li class="checkout-lists"
        v-for="(item, index) in store_goods"
        :key="index">
        <p class="total-store">
          <img src="/static/images/icon/cart/store@3x.png"
            alt=""
            srcset="">
          <span>{{item.store_name}}</span>

        </p>
        <ul class="checkout-box">
          <li class="checkout-item" v-for="(item, index) in item.goods_data"
              :key="index">
            <div class="cover-img-box">
              <img :src="item.cover_img"
                   alt=""
                   srcset="">
            </div>
            <div class="title-box">
              <div class= "des">
                <p class="goods-title">
                  {{item.title}}
                </p>
                <div class="attr-select">
                  {{item.attr_str}}
                </div>
              </div>
              <div class="card-count">
                <div>
                  <span class="price">{{item.price}}</span>
                  <br>
                  <span class="account-change">
                    x {{item.num}}
                </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "",
  props: {
    store_goods: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    setTimeout(()=> {
      console.log(999998, this.store_goods)

    },5000)
  },
  methods: {},
  components: {

  }
};
</script>

<style lang='scss' scoped>
.review-box {
  h2 {
    padding-top: 20px;
  }
}
.checkout-lists-box {
  padding-bottom: 10px;
}
.checkout-lists {
  border-bottom: 1px solid #E1E1E1;
  .total-store {
    padding-bottom: 18px;
    padding-top: 20px;
    img {
      width: 18px;
      height: 18px;
      -o-object-fit: contain;
      object-fit: contain;
      vertical-align: middle;
    }
    span {
      font-size: 14px;
      padding-left: 5px;
      font-weight: bold;
    }
  }
}
.checkout-box {
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
  .checkout-item {
    display: flex;
    padding: 10px 0;
  }
  .cover-img-box {
    height: 80px;
    width: 80px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }
  .title-box {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    .des {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .goods-title {
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        line-height: 1.4;
        text-overflow: ellipsis;
      }
      .attr-select {
        color: #9b9b9b;
        margin-top: 5px;
        font-size:14px;
        font-weight:400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:rgba(155,155,155,1);
      }
    }
    .card-count {
      text-align: right;
      display: flex;
      align-items: center;
      .price {
        font-size: 14px;
        font-weight: bold;
        color: #000000;
      }
      .account-change {
        font-size:14px;
        font-weight:400;
        color:rgba(155,155,155,1);
      }
    }
  }
}

</style>
