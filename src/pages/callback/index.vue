<template>
  <div class="callback-detail">
    <div class="group-box">
      <div class="type-success">
        <p class="buy-alone"
          v-if="order_info">{{order_info.title}}</p>
        <div v-if="type===1"
          class="success-btn gray">
          <a href="javascript:;"
            @click="go_home">GO HOME</a>
        </div>
        <template v-if="type===3">
          <p class="buy-wait-group"><span> </span>{{order_info.sub_title}}</p>
          <!-- <div class="share-btn">
            <a href="javascript:;"
              @click="go_share">SHARE</a>
          </div> -->
        </template>

        <!-- <p>{{order_info.title}}</p> -->
        <p class="buy-cuccess"
          v-if="type===4">
          <span v-for="(item,index) in group_info"
            :key="index">
            <img :src="item"
              alt=""
              srcset="">
          </span>
        </p>
        <div class="share-btn"
          v-if="type!== 1 && type != 2">
          <a href="javascript:;"
            @click="go_share">
            <span v-if="no_auto_back">
              Back to group invitation
            </span>
            <span v-else>
              Back to group invitation in {{left_time}} seconds
            </span>
          </a>
        </div>
      </div>

      <!-- <div class="success-btn gray">
        <a href="javascript:;">OPEN IN APP</a>
      </div> -->

    </div>
    <div class="sale-list-tips">
      You may also like
    </div>
    <div class="sku-box">
      <card class="sku-item"
        v-for="(item,index) in goods_info"
        :key="index"
        :card-data="item"
        @stop="stop_time"></card>
    </div>
    <!-- <share-app></share-app> -->
  </div>
</template>

<script>
import shareApp from "@/components/dialog/share-app";
import card from "@/components/card-column-auto";
import api from "@/api/order";
export default {
  name: "callback",
  data() {
    return {
      goods_info: undefined,
      group_info: undefined,
      order_info: undefined,
      type: 1,
      left_time: 5,
      is_continue: true
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {
    no_auto_back() {
      if (sessionStorage.getItem("timer_goback") !== "yes" && this.type === 3) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    init_data() {
      let params = {
        order_no: this.$route.query.order_no
      };
      api.getRelateProduct(params).then(res => {
        this.goods_info = res.data.product;
        this.group_info = res.data.order.groupInfo;
        this.order_info = res.data.order;
        this.type = res.data.order.type;
        if (!this.no_auto_back) {
          this.run_time();
        }
        if (res.data.order.type === 3) {
          sessionStorage.setItem("success_back", true);
        } else {
          sessionStorage.setItem("success_back", false);
        }
      });
    },
    run_time() {
      var timer = null;
      sessionStorage.setItem("timer_goback", "yes");
      timer = setInterval(() => {
        this.left_time += -1;
        console.log(this.left_time);
        if (this.left_time < 1) {
          clearInterval(timer);
          if (this.is_continue) {
            if (this.type === 3) {
              // if (this.type !== 1 && this.type != 2) {
              this.go_share();
            }
          }
        }
      }, 1000);
    },
    go_home() {
      let href_params = {
        type: 105,
        data: {}
      };
      let temp = this.$CM.weget_device_link(href_params);
      if (temp === "h5") {
        this.$router.push({
          path: "/"
        });
      }
    },
    go_share() {
      let params = {
        path: "/share",
        query: {
          order_no: this.$route.query.order_no
        }
      };
      this.$router.push(params);
      // this.$router.replace(params);
    },
    stop_time(data) {
      this.is_continue = false;
      console.log(444);
    }
  },
  components: {
    card,
    shareApp
  }
};
</script>

<style lang='scss' scoped>
.callback-detail {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 30px;
  background-color: #fff;
  overflow: auto;
}
.type-success {
  padding-bottom: 40px;
}
.group-box {
  // height: 180px;
}
.buy-cuccess {
  text-align: center;
  img {
    height: 63px;
    width: 63px;
    border-radius: 50%;
    margin: 0 11px;
  }
}
.sku-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
}
.sku-item {
  // flex:1;
  width: 50%;
  max-width: 49%;
  .goods-img {
    img {
      height: 170px;
    }
  }
}
.sale-list-tips {
  border-top: 1px solid #e9e9e9;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 7px 0 10px 10px;
}
.buy-alone {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 12px;
}
.buy-wait-group {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  span {
    color: #d70e19;
    font-weight: bold;
  }
}
.success-btn,
.share-btn {
  padding-bottom: 16px;
  text-align: center;
  a {
    display: inline-block;
    // width: 250px;
    padding: 0 14px;
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
.success-btn {
  padding-top: 16px;
  padding-bottom: 0;
  text-align: center;
  a {
    padding: 0 50px;
  }
}
.share-btn {
  padding-bottom: 0px;
  padding-top: 16px;
  a {
    // background-color: #000;
  }
}
</style>
