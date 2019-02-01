<template>
  <div class="wait-group">
    <p class="avator">
      <img v-for="(item,index) in order.group_user"
        :key="index"
        :src="item.photo"
        alt=""
        srcset="">
      <img v-if="order.group_user>3"
        src="/static/img/icon/团购人点点点@2x.png"
        alt=""
        srcset="">
    </p>
    <p class="group-tips">
      <span> OMG! It’s already gone. </span>
    </p>
    <ul class="item-box"
      v-if="recommendedGroup.length>0">
      <h3>Recommend for you!</h3>
      <li v-for="(item,index) in recommendedGroup"
        :key="index">
        <div class="info-box">
          <img :src="item.photo"
            alt=""
            srcset="">
          <span class="user-name">{{item.username}}</span>
        </div>
        <div class="text-des">
          <p>Only<span> {{item.left_num}} </span>More</p>
          <p>Time left {{ item.left_time | timeDiff}}</p>
        </div>
        <div class="timer-box">

          <div class="price-box"
            v-if="item.group_id"
            @click="group_buy(item.group_id)">
            <p>JOIN </p>
            <p>GROUP</p>
          </div>
        </div>
      </li>
    </ul>
    <p class="cor-btn">
      <a href="javascript:;"
        @click="group_buy()">
        GROUP BUY
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
  props: ["order", "recommendedGroup"],
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
    group_buy(group_id) {
      let data = {
        group_id: group_id ? group_id : undefined
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
.item-box {
  margin: 0 10px;
  background-color: #f3f3f3;
  padding: 20px 15px;
  h3 {
    font-size: 12px;
    line-height: 17px;
    color: #d70e19;
    text-align: center;
    padding-bottom: 10px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
    text-align: left;
    &:nth-last-child(1){
      border-bottom: none;
    }
    span,
    img {
      vertical-align: middle;
    }
  }
  .info-box {
    width: 35%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    img {
      height: 34px;
      width: 34px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .user-name {
      width: 100px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 5px 0;
    }
  }
  .text-des {
    font-size: 12px;
    margin: 0;
    padding: 0;
    width: 32%;
    flex:1;
    p {
      text-align: right;
      span {
        color: #d70e19;
      }
    }
  }
  .timer-box {
    display: flex;
    font-size: 12px;
    line-height: 12px;
    // width: 80px;
    span {
      color: #d70e19;
    }
    .price-box {
      width: 100%;
      padding: 2px 10px;
      line-height: 1.5;
      background-color: #d70e19;
      color: #fff;
      font-size: 10px;
      line-height: 14px;
      border-radius: 16px;
      margin-left: 10px;
    }
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
    color: #111;
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
