<template>
  <div class="order-summary-box">
    <div class="title" @click="toogleOderSummary">
      <div class="des">
        <img src="/static/images/icon/footer/cart-black@3x.png" alt="">
        <span>Show order summary</span>
        <van-icon name="arrow-down" class="arrow" :class="{'closed': !this.statusOderSummary}" />
      </div>
      <div class="price">{{ resSummary.all_total }}</div>
    </div>
    <section  ref="sectionsref">
      <good-review :store_goods= "resSummary.store_goods"></good-review>
      <div class="total-des">
        <p>
          <span>Subtotal</span>
          <span class="price">{{ resSummary.total }}</span>
        </p>
        <p>
          <span class="">Shipping</span>
          <span class="price">{{ resSummary.ship_total }}</span>
        </p>
        <p>
          <span class="">Promo Code</span>
          <span class="price">{{ resSummary.code_discount }}</span>
        </p>
        <p>
          <span class="">Weget Coupon</span>
          <span class="price">{{ resSummary.coupon_discount }}</span>
        </p>
        <div class="all-total">
          Total: <span> {{ resSummary.all_total }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import goodReview from "./goodReview";

  export default {
  name: "",
  props: {
    resSummary: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data() {
    return {
      statusOderSummary: true
    };
  },
  computed: {},
  created() {
  },
  methods: {
    toogleOderSummary() {
      this.statusOderSummary = !this.statusOderSummary
      if (this.statusOderSummary) {
        this.$refs.sectionsref.style.height=this.$refs.sectionsref.scrollHeight+'px'
      } else {
        this.$refs.sectionsref.style.height=0+'px'
      }
    }
  },
  components: {
    goodReview
  }
};
</script>

<style lang='scss' scoped>
.order-summary-box {
  background:rgba(250,250,250,1);
  .title {
    padding: 0px 15px;
    height: 57px;
    display: flex;
    border-bottom: 1px solid #E1E1E1;
    align-items: center;
    justify-content: space-between;
    .des {
      img {
        height: 24px;
        width: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px ;

      }
      span{
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,1);
        vertical-align: middle;
        margin-right: 4px ;

      }
      .arrow{
        transition: .5s;
        transform: translateY(5px);
        &.closed {
          transform: rotate(-90deg) translateX(-5px);
        }
      }
    }
    .price {
      font-size:18px;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
  }
  section {
    /*&.closed {*/
      /*padding-bottom: 0px;*/
    /*}*/
    box-sizing: content-box;
    transition:all 0.5s;
    overflow: hidden;
    padding:0px  15px;
    border-bottom:1px solid rgba(231,231,231,1);
    .total-des {
      margin-top: 10px;
      p {
        display: flex;
        justify-content: space-between;
        font-size:12px;
        font-weight:400;
        color:rgba(74,74,74,1);
        margin-bottom: 12px;
      }
      .all-total {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: right;
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:14px;
        span {
          font-size:18px;
          font-weight:bold;
        }
      }
    }
  }
}
</style>
