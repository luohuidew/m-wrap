<template>
  <div class="classify-screen-page">
    <ul>
      <li 
        v-for="(item,index) in screenLists" 
        :key="index"
        @click="showPopup(item.type)"
        >
        <span>{{item.title}}</span>
        <img 
          v-if="item.src"
          :src=item.src
          alt="">
      </li>
    </ul>
    <!-- all  -->
    <van-popup v-model="show_all"
      position="bottom"
      :overlay="true">
      <div class="show-all-wrapper">
           all
      </div>
    </van-popup>
    <!-- sort -->
    <van-popup v-model="show_sort"
      position="bottom"
      :overlay="true">
      <div class="show-sort-wraper">
        <h3>
          <img src="" alt="">
          <p>Sort</p>
          <span></span>
        </h3>
      </div>
    </van-popup>
    <!-- free -->
    <van-popup v-model="show_free"
      position="bottom"
      :overlay="true">
      gsgsgsgs
      <!-- <shipping-dialog v-if="all_data"
        :shipping-data="all_data.shipment"
        @close="show_shipping=false"></shipping-dialog> -->
    </van-popup>
  </div>
    
</template>

<script>
export default {
    name: "",
    props: {},
    data(){
      return{ 
      active: 0,
      show_all:false,
      show_sort:false,
      show_free:false,
        screenLists:[
          {
            type:1,
            title:'All',
            src:"/static/images/icon/cart/分类 copy 2.png"
          },
          {
            type:2,
            title:"Sort",
            src:"/static/images/icon/cart/分类 copy 2.png"
          },
          {
            type:3,
            title:"Free shipping",
          }
        ],
      }
    },
    watch: {},
    computed: {},
    created() {},
    methods: {
      showPopup(type){
        console.log(type,'0000')
        switch (type) {
        case 1:
          return this.show_all = true;
        case 2:
          return this.show_sort = true;
        case 3:
          return this.show_free = true;
        default:
          return "this is default";
      }
      }
    },
    components: {},
    mounted(){
    }
}
</script>>

<style  lang='scss' scoped>  
  .classify-screen-page { 
    position: -webkit-sticky;
    position: sticky;
    top: -1px;     
    background: #fff; 
    ul {
      padding: 15px;
      display: flex;  
      li {
        margin-left:10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        padding: 10px 15px;
        box-sizing: border-box;
        border:1px solid #E1E1E1;
        border-radius: 18px;
        &:nth-child(1){
          margin-left: 0;
        }
        img {
            width: 18px;
            height: 10px;
            margin-left: 3px;
        }
        span {
          text-align: center;
        }
      }
    } 
  }
</style>
