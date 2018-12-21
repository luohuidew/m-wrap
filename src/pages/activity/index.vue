<template>
  <div class="activity">
    <div class="page-content">
      <!-- <div class="success_user">
        <ul>
          <li></li>
        </ul>
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import api from "@/api/activity";
export default {
  data() {
    return {
      activity_lists:[]
    };
  },
  created(){
    // this.get_user_activity_lists()
  },
  methods: {
    get_user_activity_lists() {
      api.activity_list().then(res => {
        console.log(res);
        // this.activity_lists = res.data;
        // this.activity_lists = res.data;
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.activity {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.page-content {
  width: 100%;
  flex: 1;
  overflow: auto;
  // overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  & > div {
    width: 100%;
    /* 用来进行scroll-view 的触发不至于撑不开元素 */
    min-height: 101%;
    // overflow-x: hidden;
  }
}
</style>
