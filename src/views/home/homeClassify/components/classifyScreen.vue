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
        <h3>
          <van-icon name="cross" color="#9B9B9B" size="13" @click="closePopup(1)"/>
          <p>Clothing</p>
          <span>clear</span>
        </h3>
        <ul class="sort-list">
          <li 
            v-for="(item,index) in sortList"
            :key='index'>
            {{item.title}}
          </li>
        </ul>
      </div>
    </van-popup>

    <!-- sort -->
    <van-popup v-model="show_sort"
      position="bottom"
      :overlay="true"
      class="van-radius">
      <div class="show-sort-wraper">
        <h3>
          <van-icon name="cross" color="#9B9B9B" size="13" @click="closePopup(2)"/>
          <p>Sort</p>
          <span></span>
        </h3>
        <ul class="sort-list">
          <li 
            v-for="(item,index) in sortList"
            :key='index'>
            {{item.title}}
          </li>
        </ul>
      </div>
    </van-popup>
    
    <!-- free -->
    <van-popup v-model="show_free"
      position="bottom"
      :overlay="true"
      class="van-radius">
      <div class="show-free-wrapper">
        <h3>
          <van-icon name="cross"  @click="closePopup(3)"/>
          <p>Free shipping</p>
          <span></span>
        </h3>
        <ul class="sort-list">
          <li 
            v-for="(item,index) in sortList"
            :key='index'>
            {{item.title}}
          </li>
        </ul>
      </div>
      
    </van-popup>
  </div>
    
</template>

<script>
import data from './config.js'
export default {
    name: "",
    props: {},
    data(){
      return{ 
        active: 0,
        show_all:false,
        show_sort:false,
        show_free:false,
        sortList:data.sortList,
        freeList:data.freeList,
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
        // console.log(type,'0000')
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
      },
      closePopup(type) {
        // this.show = false
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
    & > ul {
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
    .van-radius {
      border-top-left-radius: 6px!important;
      border-top-right-radius: 6px!important;
    }
    .show-sort-wraper,
    .show-free-wrapper,
    .show-all-wrapper {
      padding: 13px 0 28px;
      h3 {
        padding: 0 30px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
</style>
