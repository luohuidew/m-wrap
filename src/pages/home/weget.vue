<template>
  <div id="weget"
    v-scroll="get_more_data">
    <banner></banner>
    <!-- <activity></activity> -->
    <!-- <show></show> -->
    <!-- <final></final> -->
    <!-- <new-arrival></new-arrival> -->
    <sale ref="lists"></sale>
    <share-app :token="share_token"></share-app>
  </div>
</template>

<script>
import shareApp from "@/components/dialog/share-app";
import banner from "@/components/banner";
import activity from "./weget/activity.vue";
import show from "./weget/show.vue";
import final from "./weget/final.vue";
import newArrival from "./weget/new.vue";
import sale from "./weget/sale.vue";
export default {
  name: "",
  data() {
    return {
      c_selected: undefined,
      share_token:''
    };
  },
  methods: {
    get_more_data(data) {
      console.log(this.$refs.lists);
      this.height_change = data;
      if (this.$route.meta.type === "list") {
        let c_lists = this.$refs.lists;
        if (c_lists.selectId) {
          this.c_selected = c_lists.selectId;
          let change_params = {
            id: c_lists.selectId,
            limit: 4
          };
          console.log(change_params);
          c_lists.init_data(change_params);
        }
      }
      // console.log(this.$children);
      console.log(data);
    }
  },
  components: {
    banner,
    activity,
    show,
    final,
    newArrival,
    sale,
    shareApp
  }
};
</script>

<style lang="scss" scope>
#weget {
  height: 100%;
  overflow: auto;
}
.weget-title {
  margin-bottom: 20px;
}
.main-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 42px;
}
.min-title {
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}
</style>
