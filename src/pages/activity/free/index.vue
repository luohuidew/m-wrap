<template>
  <div class="free_main">
    <ul class="free_list">
      <li v-for="(item,index) in datas"
        :key="index">
        <div class="free_img">
          <img :src="item.onsale_goods.cover_img">
        </div>
        <div class="free_info">
          <p class="free_tit">{{item.onsale_goods.title}}</p>
          <p class="free_gray">Available:{{item.trial_num}}</p>
          <p class="free_price">
            <b class="free_cur">${{item.trial_price}}</b>
            <s class="free_grays">${{item.onsale_goods.market_price}}</s>
          </p>
          <p class="free_link"
            @click="to_detail(item.id)">Apply for Free
            <img src="/static/img/icon/get now大.png"></p>
        </div>
      </li>
    </ul>
    <div class="free_result">
      <a href="javascript:;"
        @click="to_list">
        <img src="/static/img/icon/list.png"
          class="free_list_icon">
      </a>
    </div>
    <temp-dialog v-if="show_temp"
      @close="close_temp">
      <div class="share-tips"
        slot="tips">
        <div class="tips-img">
          <img src="/static/img/elements/Artboard 2@2x.png"
            alt="">
        </div>
      </div>
    </temp-dialog>
  </div>
</template>
<script>
import tempdialog from "@/components/dialog/temp-dialog";
import api from "@/api/trial";
import detail from "./detail";
export default {
  name: "",
  data() {
    return {
      datas: [],
      show_temp: false
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.trial_list({}).then(res => {
        console.log(res.data);
        this.datas = res.data;
      });
      if (sessionStorage.getItem("share") == "yes") {
        if (window.weget_mobile_type === "iOS") {
          let share_params = {
            type: 102,
            data: {}
          };
          window.webkit.messageHandlers.javaScriptToNative.postMessage(
            share_params
          );
        } else {
          sessionStorage.setItem("share", "yes");
          this.$router.push({ name: "free", query: { type: "share" } });
        }
        this.show_temp = true;
      }
    },
    to_detail(id) {
      this.$router.push({ name: "free_detail", query: { id: id } });
    },
    to_list() {
      this.$router.push({ name: "free_list", query: {} });
    },
    close_temp() {
      this.show_temp = false;
    }
  },
  components: {
    "temp-dialog": tempdialog
  }
};
</script>
<style lang="scss" scoped>
.free_main {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.share-tips {
  text-align: right;
  padding-top: 42px;
  padding-right: 24px;
  .tips-img {
    text-align: right;
    img {
      // display: block;
      // width: 74px;
      width: auto;
      height: 58px;
    }
  }
}
.free_list {
  padding: 10px;
  width: 100%;
  flex: 1;
  overflow: auto;
}
.free_list li {
  margin-bottom: 10px;
  padding: 0;
  height: 173px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.free_list li .free_img {
  width: 173px;
  height: 173px;
}
.free_list li .free_img img {
  width: 173px;
  height: 100%;
  vertical-align: top;
}
.free_info {
  height: 173px;
  overflow: hidden;
  float: right;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.free_tit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 1.2;
  height: 42px;
  font-weight: bold;
}
.free_gray {
  margin: 10px 0;
  font-size: 12px;
  color: #9b9b9b;
}
.free_price {
  font-size: 18px;
}
.free_cur {
  color: #d80c18;
}
.free_grays {
  color: #9b9b9b;
  padding: 0 20px;
}
.free_link {
  display: block;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  line-height: 25px;
  height: 25px;
  text-align: center;
  border-radius: 14px;
  margin-top: 12px;
  position: relative;
  img {
    vertical-align: middle;
    height: 14px;
  }
}
.free_result {
  // position: fixed;
  // bottom: 54px;
  // right: 10px;
  // width: 48px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  background-color: transparent;
  // height: 48px;  
  text-align: right;
  a {
    display: inline-block;
  }
  img {
    height: 48px;
  }
}
</style>
