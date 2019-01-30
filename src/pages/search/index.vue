<template>
  <div class="search-page">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      search_text: ""
    };
  },
  mounted() {},
  computed: {},
  methods: {
    
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.search-page {
  height: 100%;
}

</style>
