<template>
 <div id="banner">
     <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in banner_lists" :key="index">
            <img :src="item.img_url" alt="" srcset="">    
        </van-swipe-item>        
    </van-swipe>
 </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  data() {
    return {
      banner_lists: [
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/11686629425bc475d079756.jpg",
          title: ""
        },
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/11686629425bc475d079756.jpg",
          title: ""
        },
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/11686629425bc475d079756.jpg",
          title: ""
        },
        {
          img_url: "https://we-get.s3.us-west-1.amazonaws.com/11686629425bc475d079756.jpg",
          title: ""
        }
      ]
    };
  },
  components: {
    'van-swipe':Swipe,
    'van-swipe-item':SwipeItem
    
  }
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
