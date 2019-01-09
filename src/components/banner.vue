<template>
 <div id="banner">
    <!-- <el-carousel trigger="click" height="188px">
      <el-carousel-item v-for="(item,index) in banner_lists" :key="index">
        <img :src="item.img_url" alt="" srcset="">
      </el-carousel-item>
    </el-carousel> -->
     <van-swipe  :autoplay="3000">
        <van-swipe-item v-for="(item,index) in banner_lists" :key="index">
            <img :src="item.img_url" alt="" srcset="" @click="to_path(item.path)">    
        </van-swipe-item>        
    </van-swipe>
 </div>
</template>

<script>
export default {
  data() {
    return {
      banner_lists: [
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/7828141095bc874ab133e8.gif",
          title: "",
          path:'/login?autoshow=1'
        },       
        // {
        //   img_url: "https://we-get.s3.us-west-1.amazonaws.com/8292970065c1310de446f4.gif",
        //   title: "",
        //   path:'/activity/christmas'
        // },       
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/6763566675c2ef36e78b2f.gif",
          title: "",
          path:'/activity/popballoons'
        },       
      ]
    };
  },
  methods:{
    to_path(path){
      this.$router.push({path:path});
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#banner {
  height: 188px;
  img {
    width: 100%;
    height: auto;
  }
}
.van-swipe {
  height: 100%;
}
</style>
