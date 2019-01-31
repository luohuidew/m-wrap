

<template>
  <div class="detail-pay-btn">
    <div class="fee-per"
      @click.stop="to_fee">
      <p>ONE TIME shipping fee PER day</p>
      <i></i>
    </div>
    <a class="like-btn"
      href="javascript:;"
      @click="like_heart(sku.is_like)">
      <span class="heart"
        :class="is_like===2?'active':''">
      </span>
      <span>LIKE</span>
      <!-- <span>{{sku.like_num}}LIKE</span> -->
    </a>
    <template v-if="detail_status.status==1">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(2,cur_group_id)">
        <div class="avator">
          <img :src="groupMainUser.photo"
            alt="">
        </div>
        <div class="group-info">
          <span class="user-info">Join {{groupMainUser.username}}`s group</span>
          <span class="left-time">Time left {{groupMainUser.left_time | timeDiff}}</span>
        </div>
      </a>
    </template>
    <template v-else-if="detail_status.status==2">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(2)">
        <div class="group-info">
          <span class="user-info">OPEN A GROUP <span class="status-price">{{data_price.money_unit}}{{data_price.group_price}}</span> </span>
        </div>
      </a>
    </template>
    <template v-else-if="c_query.act_type">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(1)">
        <div class="group-info">
          <span class="user-info">APPLY THE GIFT FOR FREE</span>

        </div>
      </a>
    </template>
    <template v-else>
      <a class="direct-buy buy-btn"
        href="javascript:;"
        @click="alone_buy()">
        <span class="price">{{data_price.money_unit}}{{data_price.alone_price}}</span>
        <span class="price-des">ORIGINAL PRICE</span>
      </a>
      <a class="group-buy buy-btn"
        href="javascript:;"
        @click="group_buy()">
        <!-- <a class="group-buy buy-btn"
        href="javascript:;"
        @click="close_tips(2)"> -->
        <span class="price">{{data_price.money_unit}}{{data_price.group_price}}</span>
        <span class="price-des">START GROUP</span>
      </a>
    </template>
    <attr-dialog v-if="show_dialog"
      @close="close_emity"
      :sku="sku"
      :goods="goods"
      :attr-list="attrList"
      :cur-goods="curGoods"></attr-dialog>
    <temp-dialog v-if="show_dialog_tips"
      @close="close_tips(0)">
      <template slot="tips">
        <div class="tips-group">
          <h3>Group buy Save <span>{{data_price.money_unit}}{{Number((data_price.alone_price-data_price.group_price)*100/100).toFixed(2)}}</span></h3>
          <p class="buy">
            <span class="buy-alone"
              @click.stop="close_tips(1)">BUY IT NOW</span>
            <span class="buy-group"
              @click.stop="group_buy()">OPEN A GROUP</span>
            <!-- <span class="buy-group"
              @click.stop="close_tips(2)">OPEN A GROUP</span> -->
          </p>
        </div>
      </template>
    </temp-dialog>
    <temp-dialog v-if="show_dialog_tips_group"
      @close="close_tips(0)">
      <template slot="tips">
        <div class="open-group-box">
          <p class="close-icon">
            <img src="/static/img/icon/关闭@2x.png"
              alt=""
              srcset="">
          </p>
          <h3>Join {{recommend_group.username}}' group</h3>
          <p class="need-persion">{{recommend_group.left_num}} Person Needed Time Left {{recommend_group.left_time|timeDiff}}</p>
          <div class="group-info">
            <img :src="recommend_group.photo"
              alt="">
            <img src="/static/img/icon/emity.png"
              alt="">
          </div>
          <div class="btn-box">
            <a class="group"
              href="javascript:;"
              @click="close_tips(2,recommend_group.group_id)">JOIN GROUP</a>
            <p>
              <span class="line"></span>
              <span class="or">OR</span>
              <span class="line"></span>
            </p>
            <a class="open"
              href="javascript:;">START MY GROUP</a>
          </div>
        </div>
      </template>
    </temp-dialog>
  </div>
</template>

<script>
import attrDialog from "@/components/dialog/attr-dialog";
import tempDialog from "@/components/dialog/temp-dialog";
import api from "@/api/product";
import { getToken } from "@/utils/auth";
export default {
  name: "",
  data() {
    return {
      // data_price:this.goods
      show_dialog: false,
      show_dialog_tips: false,
      show_dialog_tips_group: false,
      cur_type: 1,
      cur_group_id: undefined,
      cur_goods_id: undefined,
      cur_paynumber: 0,
      is_like: this.sku.is_like,
      is_group: false,
      c_query: this.$route.query,
      /* 开团提示的弹框的额内容 */
      recommend_group: undefined
    };
  },
  computed: {
    data_price() {
      if (this.curGoods) {
        return this.curGoods;
      } else {
        return {
          money_unit: "wait inventory"
        };
      }
    },
    submit_data() {
      return {
        purchase_type: this.cur_type,
        group_id: this.cur_group_id
      };
    },
    detail_status() {
      return {
        status: this.$route.query.status,
        group_id: this.$route.query.group_id
          ? this.$route.query.group_id
          : undefined
      };
    }
  },
  props: ["goods", "sku", "attrList", "curGoods", "groupMainUser"],
  components: {
    attrDialog,
    tempDialog
  },
  watch: {
    // "cur_group_id":{
    //   handler(cur,old){
    //     this.close_tips(2,cur);
    //   },
    //   deep:true
    // }
  },
  mounted() {
    this.init_data();
  },
  methods: {
    init_data() {
      if (this.$route.query.group_id) {
        this.is_group = true;
        this.cur_group_id = this.$route.query.group_id;
      }
    },
    to_fee() {
      this.$router.push({ path: "/nopostal" });
    },
    to_create(data) {
      // console.log(data);
      // let params = {"goods_id":"3959183990396578","num":"1","purchase_type":"1","token":"bd127566ee70183947afcde581b953768e641e82578aa4c8b9a61a0eb2ec1e7d"};
      // console.log(params);
      // api.confirm_order(params).then(res=>{
      //   console.log(res);
      // });
      let params = {
        sku_id: this.$route.query.sku_id
      };
      // api.like(params).then(res => {
      //   this.is_like = res.data;
      //   if (this.is_like === 1) {
      //     this.sku.like_num += -1;
      //   } else {
      //     this.sku.like_num += 1;
      //   }
      // });
      // api
      //   .confirm_order(data)
      //   .then(res => {
      //     // console.log(res, "检测订单res");
      //     // if (params.query.num) {
      //     //   this.$router.push(params);
      //     // }
      //     alert(JSON.stringify(res));
      //   })
    },
    get_cur_goods(data) {
      // console.log(data);
    },
    close_emity() {
      this.show_dialog = false;
    },
    group_buy() {
      let params = {
        sku_id: this.$route.query.sku_id
      };
      this.show_dialog_tips = false;
      api.getRandGroup(params).then(res => {
        if (res.data.total === 0) {
          this.close_tips(2);
        } else {
          this.recommend_group = res.data.group;
          this.show_dialog_tips_group = true;
          window.group_timer = setInterval(() => {
            // console.log(this.cur_index);
            this.recommend_group.left_time -= 1;
            if (this.recommend_group.left_time < 0) {
              this.recommend_group.left_time = 0;
            }
            console.log(this.recommend_group.left_time);
          }, 1000);
        }
      });
    },
    alone_buy() {
      this.show_dialog_tips = true;
    },
    /* 关闭弹窗，并决定是否是团购 */
    close_tips(type, group_id) {
      console.log(type, group_id);
      // if (type === 1) {
      //   // this.go_pay(1);
      // } else if (type === 2) {
      // }
      if (type !== 0) {
        this.$set(this,'cur_type',type);
        this.$set(this,'cur_group_id',group_id);
        // this.cur_group_id = group_id;
        if (!getToken()) {
          let redirect_params = {
            path: "/login",
            query: {
              redirect: window.location.href
            }
          };
          this.$router.push(redirect_params);
        } else {
          this.show_dialog = true;
        }
      }

      this.show_dialog_tips = false;
      this.show_dialog_tips_group = false;
      window.clearInterval(group_timer);
    },
    like_heart(cur_like) {
      console.log(666);
      let params = {
        sku_id: this.$route.query.sku_id
      };
      api.like(params).then(res => {
        this.is_like = res.data;
        if (this.is_like === 1) {
          this.sku.like_num += -1;
        } else {
          this.sku.like_num += 1;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.detail-pay-btn {
  position: relative;
  font-size: 18px;
  display: flex;
  .fee-per {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #efefef;
    transform: translateY(-100%);
    i {
      width: 50px;
      height: 100%;
      background: #efefef url("/static/img/icon/返回 小右.png") no-repeat center
        right;
      background-size: 14px auto;
    }
    p {
      padding-left: 30px;
      font-size: 12px;
      line-height: 30px;
      background: #efefef url("/static/img/icon/user_order_shipped_icon@2x.png")
        no-repeat center left;
      background-size: 18px auto;
    }
  }
  .buy-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 140px;
    flex: 1;
    height: 50px;
    color: #fff;
    span {
      display: block;
    }
    .price {
      font-size: 18px;
      font-weight: bold;
    }
    .price-des {
      font-size: 10px;
    }
  }
  .group-status-buy {
    display: flex;
    flex: 1;
    // justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    background-color: #d70e19;
    color: #fff;
    .group-info {
      padding-left: 10px;
      span {
        display: block;
      }
      .user-info {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;
        font-weight: bold;
        line-height: 24px;
      }
      .left-time {
        font-size: 10px;
      }
      .status-price {
        display: inline;
        font-size: 20px;
        padding-left: 12px;
      }
    }
    img {
      height: 38px;
      width: 38px;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .like-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 120px;
    color: #000;
    font-size: 14px;
    .heart {
      width: 40px;
      height: 40px;
      background: url("/static/img/icon/收藏前.png") no-repeat center center;
      background-size: auto 70%;
    }
    .heart.active {
      width: 40px;
      height: 40px;
      background: url("/static/img/icon/收藏后.png") no-repeat center center;
      background-size: auto 70%;
    }
  }
  .direct-buy {
    background-color: #000;
  }
  .group-buy {
    background-color: #d70e19;
  }
}
/* 内置弹框的样式 */
.tips-group {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 294px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 50px 15px 26px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 20px;
    font-family: "PingFangSC-Semibold";
    font-weight: 600;
    span {
      color: #d70e19;
    }
  }
  .buy {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      width: 125px;
      height: 40px;
      background: rgba(0, 0, 0, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      color: #fff;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
    }
    .buy-group {
      background-color: #d70e19;
    }
  }
}
.open-group-box {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  text-align: center;
  padding: 20px 20px 40px 20px;
  .close-icon {
    text-align: right;
    img {
      height: 10px;
    }
  }
  h3 {
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    padding: 10px 0 6px 0;
  }
  .need-persion {
    font-size: 12px;
    line-height: 15px;
    color: #898989;
  }
  .group-info {
    padding: 20px 0 30px 0;
    img {
      width: 60px;
      width: 60px;
      border-radius: 50%;
      // border:1px solid #C9CACA;
      margin: 0 10px;
    }
  }
  .btn-box {
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      .line {
        width: 65px;
        height: 1px;
        background-color: #c9caca;
      }
      .or {
        width: auto;
        font-size: 12px;
        line-height: 16px;
        padding: 0 10px;
      }
    }
    a {
      display: inline-block;
      height: 40px;
      width: 255px;
      border-radius: 20px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      line-height: 40px;
    }
    .group {
      background-color: #d70e19;
    }
    .open {
      background-color: #c9caca;
    }
  }
}
</style>
