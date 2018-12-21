<template>
 <div>
   <ul>
     <li  v-for="(item,index) in tab_list" :key="index">
        <router-link :to="{path:item.path}">{{item.text}}</router-link>
     </li>
   </ul>
  <div class="content">
    <router-view></router-view>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      tab_list: [
        {
          text: "Grabbing",
          path: "/activity/limited/grabbing"
        },
        {
          text: "Coming soon",
          path: "/activity/limited/coming"
        },
        {
          text: "Notice",
          path: "/activity/limited/notice"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$color:#D80C18;
ul {
  font-size: 0;
}
li {
  display: inline-block;
  width: 33.3%;
  text-align: center;
}
a {
  min-width:100px;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  // height: 40px;
}
.active-route {
  border-bottom: 2px solid $color;
}
</style>
