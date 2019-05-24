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
      :overlay="true"
      :style="{height:maxH}"
    >
      <div class="show-all-wrapper">
        <h3>
          <van-icon name="cross" color="#9B9B9B" size="13" @click="closePopup(1)"/>
          <p>Clothing</p>
          <span>clear</span>
        </h3>
        <ul class="all-list">
          <li 
            v-for="(item,index) in childData"
            :key='index'
            @click="childShow()">
            <p>
              <van-icon name="plus" color="#9B9B9B" size='12' v-if="item.chlid.length > 0"/>
              <label v-else class="hidden"></label>
              <span> {{item.cat_name}}</span>
            </p>
            <ol :class="{active : listShow == item.id}">
              <li 
                v-for="(items,index) in item.chlid"
                :key='index'>
                <span>{{items.cat_name}}</span>
                <van-icon name="success" :class="{active : actives == item.id}"/>
              </li>
            </ol>
          </li>
        </ul>
        <p class="select-btn" @click="allBtn">
          <span>View results</span>
        </p>
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
            :key='index'
            @click="sortSelect(item.type)">
            <span>{{item.title}}</span>
            <van-icon name="success" :class="{active : active == item.type}"/>
          </li>
        </ul>
        <p class="select-btn" @click="sortBtn">
          <span>View results</span>
        </p>
      </div>
    </van-popup>
    
    <!-- free -->
    <van-popup v-model="show_free"
      position="bottom"
      :overlay="true"
      class="van-radius">
      <div class="show-free-wrapper">
        <h3>
          <van-icon name="cross"  color="#9B9B9B" size="13" @click="closePopup(3)"/>
          <p>Free shipping</p>
          <span></span>
        </h3>
        <ul class="sort-list">
          <li 
            v-for="(item,index) in freeList"
            :key='index'
            @click="freeSelect(item.type)"
            >
            <span>{{item.title}}</span>
            <van-icon name="success" :class="{active : active1 == item.type}"/>
          </li>
        </ul>
        <p class="select-btn" @click="freeBtn">
          <span>View results</span>
        </p>
      </div>
      
    </van-popup>
  </div>
    
</template>

<script>
import data from './config.js'
import api from "@/api/classify";
export default {
    name: "",
    props: ['childData'],
    data(){
      return{
        show_all:false,
        show_sort:false,
        show_free:false,
        active:"",
        active1:"",
        actives:"",
        listShow:"",
        maxH:undefined,
        par:{
          sort:undefined,
          free:undefined,
        },
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
    created() {
      
    },
    methods: {
      allBtn(){

      },
      sortSelect(type){
        this.active = type;
        this.par.sort = type;
      },
      sortBtn(){
        this.show_sort = false;
        this.$emit('getChild', ["sort",this.par.sort])
      },
      freeSelect(type){
        this.active1 = type;
        this.par.free = type;
      },
      freeBtn(){
        this.show_free = false;
        this.$emit('getChild', ["free",this.par.free])
      },
      childShow(id){
        
      },
      showPopup(type){
        // this.$parent.init_nit_skuList();
        if(type == 1) {
          this.$emit('getChild','click');
          this.show_all = true;
        } else if(type == 2) {
          this.show_sort = true;
        }else if (type == 3){
          this.show_free = true;
        }
      },
      closePopup(type) {
        switch (type) {
          case 1:
            return this.show_all = false;
          case 2:
            return this.show_sort = false;
          case 3:
            return this.show_free = false;
          default:
            return "this is default";
        }
      }
    },
    components: {},
    mounted(){
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.maxH = (h - 88) + 'px';
      // console.log(this.maxH)
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
        }
        span {
          font-weight: normal;
          color: #9B9B9B;
        }
      }
      .all-list {
        & > li {
          line-height: 38px;
          border-bottom: none;
          display: flex;
          flex-direction: column;
          // align-items:  center;
          font-size: 13px;
          p {
            padding: 0 30px;
            // margin-left:12px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #E1E1E1;
            .hidden {
              display: inline-block;
              width:15px;
            }
            span {
              margin-left: 10px;
            }
          }
          ol {
            display: flex;
            flex-direction: column;
            display: none;
            li {
              line-height: 38px;
              padding: 0 70px;
              border-bottom: 1px solid #E1E1E1;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
          // .listShow {
          //   display: block;
          // }
        }
        
      }
      .sort-list {
        li {
          padding: 0 30px;
          line-height: 38px;
          border-bottom: 1px solid #E1E1E1;
          display: flex;
          justify-content: space-between;
          align-items:  center;
          font-size: 13px;
          .van-icon {
            display: none;
          }
          .active {
            display: block;
          }
        }
      }
      .select-btn {
        padding: 0 15px;
        text-align: center;
        margin-top: 37px;
        span {
          display: inline-block;
          width: 100%;
          line-height: 46px;
          background: #000000;
          border-radius: 23px;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          
        }
      }
    }
  }
</style>
