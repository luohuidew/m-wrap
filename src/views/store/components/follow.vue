<template>
  <div class=""
    @click="toggle_follow(headerData.store_id)">
    <div v-if="curFollow===1"
      class="follow-box bgc-red">
      <span>
        +
      </span>
      <span>
        Follow
      </span>
    </div>
    <div v-else
      class="follow-box following">
      <span>
        Following
      </span>
    </div>
  </div>
</template>

<script>
import api from "@/api/store";
export default {
  name: "",
  props: {
    headerData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      curFollow: this.headerData.is_follow
    };
  },
  computed: {},
  created() {},
  methods: {
    toggle_follow(store_id) {
      let query_params = {
        store_id: store_id
      };
      api.follow(query_params).then(res => {
        this.curFollow =
          this.curFollow === 1 ? (this.curFollow = 2) : (this.curFollow = 1);
      }).catch(res=>{
        // debugger
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.follow-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 24px;
  font-size: 12px;
  color: #ffffff;
  border-radius: 12px;
  &.following {
    color: #4a4a4a;
    background-color: #fff;
    border: 1px solid #cccccc;
  }
}
</style>
