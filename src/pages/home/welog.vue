<template>
 <div id="welog">
     <ul class="tab-log">
         <li v-for="(item,index) in route_list_toggle" :key="index">
            <router-link :to="item.path">{{item.text}}</router-link>
         </li>
     </ul>
     <div class="log-content">
      <router-view></router-view>
     </div>
     <!-- <div class="start-video">
       Start your Welog
     </div> -->
 </div>
</template>

<script>
export default {
  data() {
    return {
      route_list_toggle: [
        {
          path: "/home/welog/recommends",
          name: "recommends",
          text: "Recommends"
        },
        {
          path: "/home/welog/aboutme",
          name: "aboutme",
          text: "All About Me"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss">
$color: #d70e19;
#welog {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tab-log {
  font-size: 0;
  li {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
  a {
    font-size: 14px;
    font-weight: 700;
    color: #000;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    height: 50px;
  }
  .active-route {
    border-bottom: 2px solid $color;
  }
}
.log-content {
  flex: 1;
  overflow: auto;
  background-color: #f3f3f3;
}
.start-video {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -20px);
  // width: 235px;
  // height: 57px;
  // background: rgba(215, 14, 25, 1);
  white-space: nowrap;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 37px;
  background: $color url(../../assets/img/icon/start_video.png) no-repeat 22px
    center;
  padding: 20px 22px 17px 55px;
  color: #fff;
  font-size: 20px;
}
</style>
