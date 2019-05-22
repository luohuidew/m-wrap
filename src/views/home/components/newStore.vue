<template>
  <div class="new-store" v-if="req_data">
    <div class="main">
      <img :src="req_data[0].image_url" alt="">
    </div>
    <div class="card-box">
      <ul>
        <li v-for="(good,index) in req_data[0].product" :key="index" class="store-item">
          <goodItem :cardData = good></goodItem>
        </li>
        <li v-for="(good,index) in req_data[0].product" :key="index" class="store-item">
          <goodItem :cardData = good></goodItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import goodItem from "@/components/good-column-auto";

  export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  mounted() {
    setTimeout(()=> {
      console.log(this.listsData)

    },4000)

  },
  computed: {
    req_data() {
      return this.listsData;
    }
  },
  methods: {},
  components: {
    goodItem
  }
};
</script>

<style lang='scss' scoped>
  .main {
    height:375px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .card-box {
    width: 100%;
    overflow: scroll;
    ul {
      width: 100%;
      white-space: nowrap;
      display: block;
      margin: 10px 0px;
      li {
        display: inline-block;
        width: 158px;
        margin-left: 15px;
        &:last-child{
          margin-right: 15px;
        }
      }
    }
  }
</style>
