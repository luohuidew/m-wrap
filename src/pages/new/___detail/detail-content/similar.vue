<template>
 <div class='page'>
      <div class="title-box">
         <p class="tips">Similar Products</p>
         <p class="more"></p>
     </div>
     <div class="show-list">
         <ul>
            <li v-for="(item,index) in show_lists" :key="index">
                <goods-card-column></goods-card-column>
            </li>        
         </ul>
       <!-- <van-swipe :autoplay="3000" :show-indicators="false">
        </van-swipe> -->
     </div>
 </div>
</template>

<script>
import goodsCardColumn from "@/components/card-column-auto.vue";
export default {
  name: "",
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
  components: {
    goodsCardColumn
  }
};
</script>

<style lang='scss' scoped>
.page {
  padding: 20px 0 10px 20px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.title-box {
  padding-right:20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 24px;
    // font-weight: bold;
  }
  .more {
    padding-right: 24px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}

.show-list {
  width: 100%;
//   height: 175px;
  overflow-x: auto;
  overflow-y: hidden;
  ul {
    white-space: nowrap;
    display: inline-block;
    li {
      width: 145px;
    //   height: 175px;
      // background-color: blueviolet;
      display: inline-block;
      vertical-align: middle;
      // padding-left: 10px;
      &:nth-child(1) {
        padding-left: 0;
      }
      img {
        width: 100%;
        height: 100%;
        //   object-fit: contain;
      }
    }
  }
}
</style>
