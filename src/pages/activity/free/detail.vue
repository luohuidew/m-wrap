

<template>
  <div class="page"
    v-if="datas">

    <div class="all-content">
      <div class="banner">
        <img :src="datas.cover_img">
      </div>
      <div class="time">
        <p class="center">
          <img src="/static/img/icon/timer_end.png">
          <b>Ends in {{run_time | timeDiff}}</b></p>
        <!-- <b>Ends in {{datas.remain_time | timeDiff}}</b></p> -->
      </div>
      <div class="main">
        <div class="content">
          <b>{{datas.title}}</b>
        </div>
        <ul class="table">
          <li>
            <p class="text">Original Price</p>
            <p class="num"><b>${{datas.market_price}}</b></p>
          </li>
          <li class="border">
            <p class="text">Available</p>
            <p class="num"><b>{{datas.trial_num}}</b></p>
          </li>
          <li>
            <p class="text">Applicants</p>
            <p class="num"><b>{{datas.applicants}}</b></p>
          </li>
        </ul>
        <div class="details">
          <h2>Details</h2>
          <p>{{datas.trial_desc}}</p>
        </div>
        <div class="rule">
          <h2>
            <span>Rule</span>
            <!-- <img src="../../../../static/img/icon/right_icon.png"
            alt=""> -->
          </h2>
          <ol>
            <li v-for="(item,index) in rule"
              :key="index">
              <span class="rule_index">{{item.index}}</span>
              <span class="rule_content">{{item.content}}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="free_detail_fiex">
      <p class="price">
        <span class="color">${{datas.trial_price}}</span>
        <span class="market">${{datas.market_price}}</span>
      </p>
      <button class="btns"
        @click="to_apply">Apply for Free</button>
    </div>
  </div>
</template>

<script>
let timer;
import api from "@/api/trial";

export default {
  name: "",
  data() {
    return {
      datas: undefined,
      end_time: "",
      run_time: 0,
      rule: [
        {
          index: 1,
          content: "Limited time to apply for qualified users."
        },
        {
          index: 2,
          content: "Only qualified users may apply and can only apply once."
        },
        {
          index: 3,
          content:
            "Free samples are limited, winners will be announced automatically by the system."
        },
        {
          index: 4,
          content:
            "All the qualified users must fill in correct contact information, if you win the free samples our customers service will contact you within three business days to confirm your information. If you filled in fraudulent information,we will cancel your qualification for free samples."
        }
      ]
    };
  },
  prop: ["datas"],
  created() {
    this.init_data({});
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      let list_params = {
        id: this.$route.query.id
      };
      let _this = this;
      api.trial_read(list_params).then(res => {
        this.datas = res.data;
        let sess_cover_img = res.data.cover_img;
        sessionStorage.setItem("cur_img", sess_cover_img);
        console.log(this.datas);
        this.run_time = res.data.remain_time;
        timer = setInterval(() => {
          // console.log(this.run_time);
          this.run_time -= 1;
          if (this.run_time < 0) {
            this.run_time = 0;
            window.clearInterval(timer);
          }
        }, 1000);
      });
    },
    to_apply() {
      // let path_params = {
      //   name: "free_apply",
      //   query: {
      //     id: this.$route.query.id
      //   }
      // };
      // this.$router.push(path_params);
      window.location.href =
        window.location.origin +
        "/activity/free-apply?id=" +
        this.$route.query.id;
      // if (this.$store.state.token) {
      // } else {
      //   let redirect_params = {
      //     path: "/login",
      //     query: {
      //       redirect: window.location.href
      //     }
      //   };
      //   this.$router.push(redirect_params);
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .all-content {
    flex: 1;
    overflow: auto;
  }
  .free_detail_fiex {
    height: 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    .price {
      padding-left: 20px;
      line-height: 50px;
      .color {
        width: 32px;
        height: 18px;
        font-size: 26px;
        font-weight: bold;
        color: rgba(216, 12, 24, 1);
      }
      .market {
        font-size: 14px;
        color: rgba(137, 137, 137, 1);
        margin-left: 13px;
      }
    }
    .btns {
      width: 194px;
      height: 50px;
      background: #d70e19;
      font-size: 16px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
      border: 1px solid #d70e19;
    }
  }
}
.banner {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}
.time {
  width: 100%;
  height: 40px;
  background: #000;
  margin-top: -5px;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.center {
  width: 70%;
  margin: 0 auto;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    left: 20px;
  }
}
.main {
  background: #fff;
  .content {
    font-size: 16px;
    padding: 12px 21px;
  }
  .table {
    border: 1px solid rgba(233, 233, 233, 1);
    display: flex;
    li {
      text-align: center;
      padding: 21px 0;
      width: 33.3%;
      .text {
        padding-bottom: 12px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(201, 202, 202, 1);
        line-height: 16px;
      }
      .num {
        font-size: 16px;
        font-weight: 600;
        color: rgba(137, 137, 137, 1);
      }
    }
    .border {
      border-left: 1px solid rgba(233, 233, 233, 1);
      border-right: 1px solid rgba(233, 233, 233, 1);
    }
  }
  .details {
    padding: 20px;
    border-bottom: 1px solid rgba(233, 233, 233, 1);
    h2 {
      font-size: 18px;
      font-size: 24px;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 30px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
      line-height: 16px;
    }
  }
  .rule {
    padding: 13px 0 17px 20px;
    h2 {
      display: flex;
      padding-right: 61px;
      justify-content: space-between;
      img {
        height: 10px;
        vertical-align: middle;
        margin-top: 5px;
      }
    }
    ol {
      padding-top: 9px;
      li {
        // list-style-position: inside;
        // list-style-type: decimal;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
        .rule_index {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>