<template>
  <div class="tree-home-box">
    <!-- 背景图 -->
    <div class="home-bg">
      <!-- <img src="/static/img/popballoons/Popballoonswinyourfavorites_90.png"
        alt=""
        srcset=""> -->
      <div class="pop-gif">
        <img src="https://we-get.s3.us-west-1.amazonaws.com/2338367835c27369446a44.gif"
          alt=""
          srcset="">
      </div>
      <div class="btn-click"
        @click="to_lists">
        <img src="/static/img/popballoons/btn/btn-1START@2x.png"
          alt=""
          srcset="">
      </div>
    </div>
    <scroll v-if="board_lists.length"
      :board-lists="board_lists"></scroll>
  </div>
</template>

<script>
let timer;
import api from "@/api/newyear";
import scroll from "./board-scroll";
export default {
  name: "",
  data() {
    return {
      bg_img_lists: [
        "/static/img/christmas/toggle/x圣诞树动画2_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画3_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画4_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画5_gaitubao_com_399x617.png"
      ],
      cur_index: 0,
      board_lists: []
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.successActivityList().then(res => {
        this.board_lists = res.data.successList;
        this.people = res.data.successNumber;
      });
      timer = setInterval(() => {
        // console.log(this.cur_index);
        this.cur_index += 1;
        if (this.cur_index > 3) {
          this.cur_index = 0;
        }
      }, 1000);
    },
    to_lists() {
      let params = {
        path: "/activity/popballoons/popballoons-lists"
      };
      window.clearInterval(timer);
      this.$router.push(params);
    }
  },
  components: {
    scroll
  }
};
</script>

<style lang='scss' scoped>
.tree-home-box {
  width: 100%;
  // padding-left: 24px;
  position: relative;
  // transform: translateY(-73px);
  z-index: 10;
  text-align: center;
  & > img {
    width: 100%;
    height: auto;
  }
  .home-bg {
    margin: 0 auto;
    width: 100%;
    height: 654px;
    font-size: 0;
    background: url("/static/img/popballoons/background/PopballoonswinGIFTS@2x.png")
      no-repeat top center;
    background-size: auto 100%;
    padding-top: 80px;
    .pop-gif {
      // position: absolute;
      // left:0 ;
      // top: 8%;
      width: 100%;
      height: 470px;
      text-align: center;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

  .btn-click {
    // position: absolute;
    // left: 50%;
    // top: 65%;
    // transform: translateX(-50%);
    text-align: center;
    img {
      height: 40px;
      margin: 10px 0 8px 0;
      width: auto;
    }
  }
}
.banner-board {
  padding: 0 10px;
  // transform: translateY(-42px);
  padding-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
