<template>
  <div id="banner"
    v-if="banner_lists">
    <!-- <el-carousel trigger="click" height="188px">
      <el-carousel-item v-for="(item,index) in banner_lists" :key="index">
        <img :src="item.img_url" alt="" srcset="">
      </el-carousel-item>
    </el-carousel> -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in banner_lists"
        :key="index">
        <img :src="item.img_url"
          alt=""
          srcset=""
          @click="to_path(item.path)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import weget from "@/api/weget";
export default {
  data() {
    return {
      banner_lists: undefined
    };
  },
  created() {
    // debugger;
    let temp = [
      {
        img_url:
          "https://we-get.s3.us-west-1.amazonaws.com/3337964495c34843f03449.gif",
        path: "/activity/popballoons",
        title: "new year"
      },
      {
        img_url:
          "https://we-get.s3.us-west-1.amazonaws.com/10473559045c370afb6da20.gif",
        path: "/login?autoshow=1",
        title: "sing up"
      }
    ];
    this.banner_lists = temp;
    // weget.banner_list().then(res => {
    //   this.banner_lists = res.data;
    // });
  },
  methods: {
    to_path(path) {
      this.$router.push({ path: path });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#banner {
  height: 210px;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-swipe {
  height: 100%;
}
</style>
