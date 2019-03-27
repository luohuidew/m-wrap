<template>
  <div class="right-content">
    <div class="good-type">
      <ul>
        <li v-for="(item, index) in 8">
          <img src="@/assets/img/elements/goods001.png"
            alt="">
          <p>Bodycon</p>
        </li>
      </ul>
    </div>
    <div class="store">
      <div class="line">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h3>Hot Stores</h3>
      <ul class="s-good">
        <li v-for="(item, index) in 4">
          <div class="good">
            <img class="img"
              src="@/assets/img/elements/goods001.png"
              alt="">
            <div class="title">
              <p class="name">Amour</p>
              <p class="des">InfuencerStore</p>
            </div>
          </div>
          <div class="produc">
            <p class="price">222</p>
            <p class="des">InfuencerStore</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
// import Category from "@/api/Category";
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "",
  data() {
    return {
      slideData: []
    };
  },
  created() {
    this.slideData = [
      {
        text: "Rectangle",
        imgpath: "@/assets/img/icon/goback.png"
      },
      {
        text: "Rectangle",
        imgpath: "@/assets/img/icon/goback.png"
      }
    ];
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      // coupon.coupon({ status: 2 }).then(res => {
      //   this.coupon_list = res.data;
      //   this.is_checked = this.$store.state.order_detail.is_selected_couponid;
      // });
    }
  },
  components: {
    Scroll
  }
};
</script>

<style lang='scss' scoped>
.right-content {
  padding-bottom: 30px;
}
.good-type {
  li {
    text-align: center;
    width: 70px;
    float: left;
    margin: 15px 0px 0px 15px;
    img {
      width: 70px;
      height: 70px;
    }
    p {
      line-height: 30px;
      font-size: 10px;
      color: #4a4a4a;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.store {
  width: 245px;
  margin: 0px auto;
  padding: 0px 0px 25px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 7px;
  margin-top: 15px;
  overflow: hidden;
  .line {
    ul {
      width: 100%;
      margin-left: -12px;
      white-space: nowrap;
      li:nth-of-type(1n) {
        display: inline-block;
        width: 27px;
        height: 20px;
        background: rgba(201, 202, 202, 1);
        border-radius: 0px 0px 100px 100px;
      }
      li:nth-of-type(2n) {
        display: inline-block;
        width: 27px;
        height: 20px;
        background: rgba(233, 233, 233, 1);
        border-radius: 0px 0px 100px 100px;
      }
    }
  }
  h3 {
    margin-top: 18px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }
  .s-good {
    padding: 0px 10px;
    li {
      height: 70px;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .good {
        height: 40px;
        display: flex;
        align-content: center;
        .img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: inline-block;
        }
        .title {
          margin-left: 5px;
          display: inline-block;
          .name {
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            font-size: 12px;
            margin-top: 6px;
          }
          .des {
            color: #f5576c;
            font-size: 10px;
            margin-top: 2px;
            -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
            -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
            background-image: linear-gradient(
              42deg,
              rgba(114, 135, 241, 1) 0%,
              rgba(223, 96, 185, 1) 100%
            );
          }
        }
      }
      .produc {
        font-size: 10px;
        text-align: right;
        .price {
          margin-top: 6px;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        .des {
          margin-top: 2px;
          color: rgba(155, 155, 155, 1);
        }
      }
    }
  }
}
</style>
