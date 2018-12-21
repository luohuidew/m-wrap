<template>
 <div class="show">
     <div class="weget-title">
        <p class="main-title">WELOG</p>
        <p class="min-title">Fail Makeup Celebrities` Choice</p>
     </div>
     <div class="show-list">
         <ul>
            <li v-for="(item,index) in show_lists" :key="index">
                <img :src="item.img_url" alt="" srcset="">    
            </li>        
         </ul>
       <!-- <van-swipe :autoplay="3000" :show-indicators="false">
        </van-swipe> -->
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      show_lists: [
        {
          img_url: "/static/img/log_screen.png",
          title: ""
        },
        {
          img_url: "/static/img/log_screen.png",
          title: ""
        },
        {
          img_url: "/static/img/log_screen.png",
          title: ""
        },
        {
          img_url: "/static/img/log_screen.png",
          title: ""
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.show {
  padding: 10px 0 20px 0;
}
.show-list {
  width: 100%;
  height: 175px;
  overflow-x: auto;
  overflow-y: hidden;
  ul {
    white-space: nowrap;
    display: inline-block;
    li {
      width: 310px;
      height: 175px;
      // background-color: blueviolet;
      display: inline-block;
      vertical-align: middle;
      padding-left: 10px;
      img {
        width: 100%;
        height: 100%;
        //   object-fit: contain;
      }
    }
  }
}
</style>
