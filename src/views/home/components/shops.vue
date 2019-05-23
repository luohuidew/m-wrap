<template>
  <div class="shops-wrap" v-if="listsData">
    <h4>POPULAR SHOPS</h4>
    <section>
      <div class="store">
        <div class="imgs">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
        </div>
        <div class="footer">
          <div class="poho">
            <img :src="listsData[0].image_url" alt="">
            <div class="title">
              <h1>Sold by</h1>
              <h2>ENERGY GIRLS</h2>
            </div>
          </div>
          <div class="producs">
            <span>products</span>
            <em>46</em>
          </div>
        </div>
      </div>
      <div class="store">
        <div class="imgs">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
        </div>
        <div class="footer">
          <div class="poho">
            <img :src="listsData[0].image_url" alt="">
            <div class="title">
              <h1>Sold by</h1>
              <h2>ENERGY GIRLS</h2>
            </div>
          </div>
          <div class="producs">
            <span>products</span>
            <em>46</em>
          </div>
        </div>
      </div>
      <div class="store">
        <div class="imgs">
          <img :src="listsData[0].image_url" @click="goDetails" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
          <img :src="listsData[0].image_url" alt="">
        </div>
        <div class="footer">
          <div class="poho">
            <img :src="listsData[0].image_url" alt="">
            <div class="title">
              <h1>Sold by</h1>
              <h2>ENERGY GIRLS</h2>
            </div>
          </div>
          <div class="producs">
            <span>products</span>
            <em>46</em>
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
    goDetails(skuid){

    }
  },
  components: {
    goodItem
  }
};
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
