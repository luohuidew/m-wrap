<template>
  <div class="address-state-lists">
    <ul class="state-block">
      <li v-for="(item,index) in stateLists"
        :key="index">
        <h4>{{item.initial}}</h4>
        <ul class="state-items">
          <li v-for="(list) in item.state"
            :key="list.id"
            @click="go_back(list)">
            {{list.state_title}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/address";
export default {
  name: "",
  props: {},
  data() {
    return {
      stateLists: []
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      api.address_state().then(res => {
        this.stateLists = res.data;
      });
    },
    go_back(citem) {
      let href_params = {
        path: "/add_address",
        query: {
          cur_index: this.$route.query.cur_index,
          state_title: citem.state_title,
          state: citem.state
        }
      };
      this.$router.replace(href_params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.address-state-lists {
  padding: 20px 30px;
  padding-top: 0;
}
.state-block {
  h4 {
    font-size: 18px;
    padding: 10px 0;
  }
}
.state-items {
  li {
    height: 48px;
    border-bottom: 1px solid #e9e9e9;
    line-height: 48px;
    font-size: 14px;
    &:hover {
    }
  }
}
</style>
