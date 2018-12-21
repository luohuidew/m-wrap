<template>
  <div class="page">
    <div class="main">
      <ul>
        <li v-for="(item,index) in datas"
          :key="index"
          class="list">
          <p class="time">Promotion end time: {{item.end_time | dateServer}}</p>
          <div class="content">
            <div class="img">
              <img :src="item.onsale_goods.cover_img">
            </div>
            <div class="desc">
              <p class="tit">{{item.onsale_goods.title}}</p>
              <p class="ava">Available：{{item.trial_num}}</p>
            </div>
            <div class="price">
              <p class="now">${{item.onsale_goods.trial_price}}</p>
              <p class="market">${{item.onsale_goods.market_price}}</p>
            </div>
          </div>
          <div class="winner">
            <span class="win">Winner：</span>
            <span class="gray">
              <span v-for="(item1,index1) in item.winner_user"
                :key="index1">
                <span v-if="index1<item.winner_user.length-1">
                  {{ item1 }} , &nbsp;&nbsp;
                </span>
                <span v-else>
                  {{ item1 }}
                </span>
              </span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/trial";
import { getToken } from "@/utils/auth";
export default {
  name: "list",
  data() {
    return {
      datas: [],
      winner_user: [],
      user: ""
    };
  },
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      api.trial_winner({}).then(res => {
        console.log(res.data);
        this.datas = res.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  background: #f3f3f3;
  font-family: AvertaStd-Light;
  .list {
    width: 100%;
    margin-bottom: 10px;
    background: #fff;
    padding: 14px 10px;
    .time {
      padding: 10px 0 5px;
      font-size: 14px;
      border-bottom: 2px solid #e9e9e9;
    }
    .content {
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      border-bottom: 2px solid #e9e9e9;
      .img {
        width: 80px;
        height: 80px;
        img {
          height: 100%;
        }
      }
      .desc {
        font-size: 14px;
        font-weight: 300;
        .tit {
          overflow: hidden;
          width: 200px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          line-height: 15px;
        }
        .ava {
          color: rgba(137, 137, 137, 1);
          padding-top: 15px;
        }
      }
      .price {
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        .market {
          color: #898989;
          padding-top: 5px;
        }
      }
    }
    .winner {
      padding: 10px 0;
      font-size: 14px;
      line-height: 20px;
      .win {
        font-family: AvertaStd-Semibold;
        font-weight: 600;
      }
    }
  }
}
</style>