<template>
  <div class="search-home">
    <div class="aside-bar">
      <span @click="tianchog"> 點擊</span>
      <table>
        <tr id="openOrgan"
          style="display:none">

        </tr>
      </table>
    </div>
    <div class="lists-box"></div>
  </div>
</template>

<script>
import api from "@/api/search";
export default {
  name: "",
  data() {
    return {
      aside_data: undefined
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.getFirstCategory().then(res => {});
    },
    tianchog() {
      let temp = `<td>hello</td>`;
      let box = document.getElementById("openOrgan");
      box.style.display = "block";
      box.innerHTML = temp;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.search-home {
  display: flex;
  height: 100%;
  & > div {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
  .aside-bar {
    width: 90px;
  }
  .lists-box {
    flex: 1;
  }
}
</style>
