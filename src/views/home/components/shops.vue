<template>
  <div class="shops-wrap" v-if="listsData">
    <h4>POPULAR SHOPS</h4>
    <section>
      <div v-for="(storeSingle,index) in listsData" class="store" :key="index">
        <div class="imgs">
          <img v-for="good in storeSingle.product" @click="goDetails(good.route_sku_id)" :key="good.id" :src="good.cover_img" alt="">
        </div>
        <div class="footer">
          <router-link :to="storeSingle.route">
          <div class="poho">
            <img :src="storeSingle.image_url" alt="">
            <div class="title">
              <h1>Sold by</h1>
              <h2>{{storeSingle.name}}</h2>
            </div>
          </div>
          </router-link>
          <div class="producs">
            <span>products</span>
            <em>{{storeSingle.total_num}}</em>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import goodItem from "@/components/good-column-auto";

  export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {


  },
  computed: {

  },
  methods: {
    goDetails(sku_id) {
      let params = {
        path: "/detail",
        query: {
          sku_id: sku_id
        }
      }
      this.$router.push(params);
    }
  },
  components: {
    goodItem
  }
}
</script>

<style lang='scss' scoped>
.shops-wrap {
  margin-bottom: 20px;
  h4{
    font-size:20px;
    font-weight:800;
    text-align: center;
    margin: 20px 0px;
  }
  section {
    /*height: 311px;*/
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-scrolling: touch;
    .store {
      background:rgba(248,248,248,1);
      display: inline-block;
      margin-left: 15px;
      width: 310px;
      border-radius: 5px;
      height: 100%;
      overflow: hidden;
      &:last-child{
        margin-right: 15px;
      }
      .imgs{
        height: 256px;
        font-size: 0px;
        img {
          float: left;
          width: 155px;
          height: 128px;
          overflow: hidden;
          object-fit: cover;
        }
      }
      .footer {
        display: flex;
        padding: 10px 15px;
        justify-content: space-between;
        align-items: center;
        .poho {
          img {
            width:40px;
            height:40px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 15px;
          }
          .title{
            vertical-align: middle;
            display: inline-block;
            h1{
              font-size:12px;
              font-weight:400;
              color:rgba(0,0,0,1);
            }
            h2{
              font-size:12px;
              font-weight:bold;
              color:rgba(0,0,0,1);
            }
          }
        }
        .producs{
          text-align: right;
          span {
            font-size:12px;
            display: block;
          }
          em{
            font-size:12px;
            font-weight:bold;
          }
        }
      }
    }
  }
}
</style>
