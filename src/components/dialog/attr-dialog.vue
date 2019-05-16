<template>
  <div class="dialog-box">
    <div class="content"
      :class="show_transtion">
      <li class="img-box">
        <!-- <img :src="sku.cover_img"
          alt=""
          srcset=""> -->
        <img :src="new_cur_goods.goods_img_thumb"
          alt=""
          srcset=""
          @click.stop="zoom_img(new_cur_goods)">
      </li>
      <ul class="choice-box">
        <li class="goods-title">
          <i class="close-dialog"
            @click.stop="close_dialog()"><img src="/static/img/icon/关闭.png"
              alt=""
              srcset=""></i>
          <p class="group-price">
            <template v-if="submit_form.purchase_type===2">
              {{new_cur_goods.money_unit}}{{new_cur_goods.group_price}}
            </template>
            <template v-else>
              {{new_cur_goods.money_unit}}{{new_cur_goods.alone_price}}
            </template>
          </p>
          <p class="attr-tips">
            Please select：<span v-for="(item,index) in new_attrList"
              :key="index"> {{item.attr_name}} &nbsp; </span>
          </p>
        </li>
        <li class="attr-blocks">
          <ul>
            <li v-for="(item,index) in new_attrList"
              :key="index">
              <h3>{{item.attr_name}}</h3>
              <ul class="attr-lists">
                <li v-for="(attr,index_attr) in item.attr_value"
                  :key="index_attr"
                  @click.stop="get_cur_goods(index,index_attr,attr.id)"
                  :class="{'active':index_attr===is_selected_index_list[index],'no_select':attr.no_select}">{{attr.attr_value}}</li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="quantity">
          <span class="quant">QUANTITY</span>
          <!-- <span class="quant">QUANTITY:{{have_goods?new_cur_goods.store_num:0}}</span> -->
          <ul class="buy-box"
            v-if="have_goods">
            <li class="count re"
              @click="account(-1)"></li>
            <li class="show-number"
              :disabled="true">{{pay_number}}</li>
            <li class="count"
              @click="account(1)"></li>
          </ul>
        </li>
        <li class="done-btn">
          <template v-if="have_goods">
            <span v-if="only_cart"
              href="javacript:;"
              @click="add_to_cart">Add To Cart</span>
            <span href="javacript:;"
              v-else
              @click="create_order">Done</span>
          </template>
          <template v-else>
            <a href="javacript:;"
              class="no-goods">out of stock</a>
          </template>
        </li>
      </ul>
    </div>
    <!-- <van-popup v-model="show_join_self"
      position="top"
      :overlay="false">
      You have already in the group. Invite your friends join now.
    </van-popup> -->
    <!-- <temp-dialog v-show="show_join_self">
      <p class="can-join">
        sss
      </p>
    </temp-dialog> -->
    <div class="big-img-box"
      v-if="show_big_img"
      @click.stop="show_big_img=false">
      <div class="img-wrapper">
        <img :src="new_cur_goods.goods_img"
          alt=""
          @click.stop="show_big_img=false">
      </div>
      <div class="img-desc">
        {{new_cur_goods.attr_first_value}}
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/product";
import CART from "@/api/cart";
import tempDialog from "@/components/dialog/temp-dialog";
import apiBase from "@/api/base";

export default {
  name: "",
  data() {
    return {
      show_transtion: "",
      pay_number: 1,
      is_selected_index_list: [0, 0, 0],
      cur_attr_id_list: this.curGoods.attr_value_id_list,
      new_cur_goods: undefined,
      new_goods: undefined,
      new_attrList: undefined,
      have_goods: true,
      only_cart: true,
      show_join_self: false,
      show_big_img: false
    };
  },
  props: ["goods", "attrList", "curGoods", "sku"],
  mounted() {
    setTimeout(() => {
      this.show_transtion = "show_transtion";
    }, 0);
  },
  computed: {
    submit_form() {
      return {
        goods_id: this.new_cur_goods.goods_id,
        num: this.pay_number,
        group_id: this.$parent.submit_data
          ? this.$parent.submit_data.group_id
          : undefined,
        purchase_type: this.$parent.submit_data
          ? this.$parent.submit_data.purchase_type
          : undefined
      };
    }
  },
  watch: {
    cur_attr_id_list: {
      handler(cur, old) {
        // console.log(cur,old);
        let temp_all_goods = this.new_goods;
        let temp_cur_list = cur.toString();
        let get_cur = temp_all_goods.filter((item, index) => {
          let temp_str = item.attr_value_id_list.toString();
          // console.log(temp_cur_list, temp_str);
          return temp_cur_list === temp_str;
        });
        // console.log(get_cur);
        if (get_cur.length > 0) {
          this.new_cur_goods = get_cur[get_cur.length - 1];
          this.have_goods = true;
        } else {
          this.have_goods = false;
        }
        this.send_cur_goos();
      },
      deep: true
    },
    pay_number: {
      handler(cur, old) {
        this.send_cur_goos();
      }
    }
  },
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      this.new_cur_goods = JSON.parse(JSON.stringify(this.curGoods));
      this.new_goods = JSON.parse(JSON.stringify(this.goods));
      this.new_attrList = JSON.parse(JSON.stringify(this.attrList));
      this.send_cur_goos();
    },

    zoom_img(cur) {
      this.show_big_img = true;
      console.log(cur);
    },
    send_cur_goos() {
      let data = this.submit_form;
      this.$emit("change", data);
    },
    get_cur_goods(group_index, cur_index, cid) {
      this.$set(this.is_selected_index_list, group_index, cur_index);
      // console.log(group_index,cur_index,cid);
      this.$set(this.cur_attr_id_list, group_index, cid);
    },
    check_order() {},
    create_order() {
      let params = {
        path: "/pay",
        query: {
          goods_id: this.submit_form.goods_id.toString(),
          num: this.submit_form.num + "",
          purchase_type: this.submit_form.purchase_type + "",
          group_id: this.submit_form.group_id
            ? this.submit_form.group_id + ""
            : undefined,
          coupon_id: this.$route.query.user_coupon_id
            ? this.$route.query.user_coupon_id + ""
            : undefined
        }
      };
      let cur_url =
        window.location.origin +
        "/pay?goods_id=" +
        params.query.goods_id +
        "&num=" +
        params.query.num +
        "&purchase_type=" +
        params.query.purchase_type;
      if (params.query.group_id) {
        cur_url += "&group_id=" + params.query.group_id;
      }
      if (params.query.coupon_id) {
        cur_url += "&coupon_id=" + params.query.coupon_id;
      }
      // console.log(cur_url);
      window.location.href = cur_url;
      window.event.returnValue = false;
    },
    add_to_cart() {
      if (!this.$store.state.token) {
        this.checkedLogin();
      } else {
        let to_catr_params = {
          goods_id: this.submit_form.goods_id,
          store_id: this.sku.store_id,
          count: this.pay_number
        };
        CART.addToCart(to_catr_params).then(res => {
          this.$emit("close", null);
          apiBase.visitSaveLog({eventName: 'addCart'}).then(()=>{})
          this.init_cart();
        });
      }
    },
    checkedLogin() {
      let re_path = `${
        this.$route.fullPath
      }&type=keep&goods_id=${this.submit_form.goods_id}&store_id=${
        this.sku.store_id
      }&count=${this.pay_number}`;
      // window.location.href =
      //   window.location.origin +
      //   "/login?redirect=" +
      //   encodeURIComponent(re_path);
      const param = {
        path: "/login?redirect=" + encodeURIComponent(this.$route.fullPath),
        // query: {
        //   redirect: this.$route.fullPath
        // }
      }
      this.$router.push(param)
    },
    init_cart() {
      CART.getCartNum().then(res => {
        this.$store.commit("SET_CATR", res.data.num);
      });
    },
    account(num) {
      let temp_number = parseInt(this.pay_number);
      temp_number += num;
      if (temp_number == 0) {
        temp_number = 1;
      }
      if (temp_number == 11) {
        temp_number = 10;
      }
      this.pay_number = temp_number;
      this.$emit("changeNumber", temp_number);
    },
    close_dialog(data) {
      // this.show_transtion = '';
      // let data = data;
      this.$emit("close", data);
    }
  },
  components: {
    tempDialog
  }
};
</script>

<style lang='scss' scoped>
.dialog-box {
  // position: fixed;
  // left: 0;
  // top: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}
.big-img-box {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  left: 0;
  top: 0;
  .img-wrapper {
    position: absolute;
    // left: 50%;
    width: 100%;
    // height: 100%;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: 100%;
      height: auto;
    }
  }
  .img-desc {
    position: absolute;
    left: 0;
    font-size: 14px;
    bottom: 10px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
}
.content {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  transition: all 0.5s;
  .choice-box {
    background-color: #fff;
    padding: 0 20px;
  }
  .img-box {
    background-color: transparent;
    img {
      background-color: #ffffff;
    }
  }
  // background-color: #fff;
}
.show_transtion {
  transform: translateY(0);
}
.goods-title {
  position: relative;
  padding-left: 120px;
  padding-top: 26px;
  padding-bottom: 30px;
  .close-dialog {
    position: absolute;
    right: 0;
    top: 20px;
    img {
      height: 12px;
      width: 12px;
    }
  }
  .group-price {
    font-size: 20px;
    font-weight: 600;
    color: rgba(216, 12, 24, 1);
    line-height: 18px;
  }
  .attr-tips {
    font-size: 10px;
    font-weight: bold;
    padding-top: 13px;
  }
}
.img-box {
  background-color: transparent;
  img {
    position: absolute;
    // top: -25px;
    left: 20px;
    z-index: 3000;
    transform: translateY(75px);
    height: 100px;
    width: 100px;
    object-fit: cover;
    vertical-align: top;
    position: relative;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  }
}
.done-btn {
  padding: 10px 0 30px 0;
  background-color: #fff;
  text-align: center;
  span {
    display: inline-block;
    width: 250px;
    height: 40px;
    background-color: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
  .no-goods {
    background-color: #f3f3f3;
    color: #c9caca;
  }
}
.attr-blocks {
  h3 {
    padding-bottom: 14px;
  }
  .attr-lists {
    display: flex;
    flex-wrap: wrap;
    max-height: 184px;
    overflow: auto;
    li {
      font-size: 10px;
      font-weight: bold;
      padding: 8px 12px;
      background-color: #f3f3f3;
      margin: 0 10px 10px 0;
      border-radius: 2px;
    }
    .active {
      color: #fff;
      background-color: #d70e19;
    }
    .no_select {
      color: #c9caca;
    }
  }
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 16px 0;
  border-top: 1px solid rgba(233, 233, 233, 1);
  border-bottom: 1px solid rgba(233, 233, 233, 1);
}
.buy-box {
  display: flex;
  // padding-left: 20px;
  li {
    height: 30px;
  }
  .store_num {
    padding: 0 20px;
    line-height: 30px;
  }
  .count {
    width: 30px;
    line-height: 30px;
    font-size: 15px;
    text-align: center;
    color: #989898;
    // background-color: #e9e9e9;
    background: #e9e9e9 url("/static/img/icon/add.png") no-repeat center center;
    background-size: 50% auto;
    cursor: pointer;
  }
  .re {
    background: #e9e9e9 url("/static/img/icon/reduce.png") no-repeat center
      center;
    background-size: 50% auto;
  }
  .show-number {
    padding: 0 4px;
    height: 30px;
    width: 53px;
    line-height: 30px;
    text-align: center;
    margin: 0 4px;
    background-color: #f3f3f3;
    // input {
    // }
  }
}
.quant {
  font-size: 12px;
  font-weight: bold;
  line-height: 30px;
  // padding: 10px 0 10px 0;
}
</style>
