<template>
  <div class="home-classify-page" v-scroll>
    <classifyHead @parentId="updateId" :classId="classId"/>
    <ul class="screenList" id = "listFirstCate">
      <li @click="showAll()" v-if="this.threeName || this.twoName"  :class="allActive?'screenListActive':''">
        <span class="mr5">{{this.twoName}} </span>
        <span v-show="this.threeName"> > {{this.threeName}}</span>
        <img
          src="/static/images/icon/cart/分类 copy 2.png"
          alt="">
      </li>
      <li @click="showAll()" v-else>
        <span>All</span>
        <img
          src="/static/images/icon/cart/分类 copy 2.png"
          alt="">
      </li>

      <li @click="showPopup(2)" :class="sortActive?'screenListActive':''">
        <span v-if="this.sortName">{{this.sortName}}</span>
        <span v-else>Sort</span>
        <img
          src="/static/images/icon/cart/分类 copy 2.png"
          alt="">
      </li>

      <li @click="showPopup(3)" :class="freeActive?'screenListActive':''">
        <span>Free shipping</span>
        <!-- <span v-if="this.freeName">{{this.freeName}}</span>
        <span v-else>Postage</span>
        <img
          src="/static/images/icon/cart/分类 copy 2.png"
          alt=""> -->
      </li>
    </ul>
    <van-list v-model="loading"
      :immediate-check="false"
      :finished="finished"
      finished-text="No more data"
      :loading-text="'Loading...'"
      @load="init_skuList">
      <ul class="sku-list">
        <li
          v-for="(good,index) in skuList"
          :key="index"
          class="store-item"
        >
          <goodItem :cardData = good></goodItem>
        </li>
      </ul>
    </van-list>
    <!-- all  -->
    <van-popup v-model="show_all"
      position="bottom"
      :overlay="true"
      :style="{height:maxH}">
      <div class="show-all-wrapper">
        <h3>
          <van-icon name="cross" color="#9B9B9B" size="13" @click="closePopup(1)"/>
          <p>{{popAllName}}</p>
          <span @click="clearId">clear</span>
        </h3>
        <ul class="all-list">
          <li
            v-for="(twoItem,index) in childList"
            :key='index'
            >
            <p>
              <span @click="childShow(twoItem)" class="left-icon">
                <span class="selec-icon-wrapper">
                  <label v-if="twoItem.chlid.length > 0">
                    <img src="/static/images/icon/home/add.png" alt="" class="selcect-img1"  v-if="!twoItem.open">
                    <img src="/static/images/icon/home/line.png" alt="" class="selcect-img2" v-if="twoItem.open">
                  </label>
                  <label class="hidden" v-else></label>
                </span>
              </span>
              <span @click.stop="twoShow(twoItem,twoItem.cat_name)" class="twoShow">
                <span>{{twoItem.cat_name}}</span>
                <van-icon name="success" class="all-selected" v-show="actives == twoItem.id "/>
              </span>
            </p>
            <ol  v-bind:class="twoItem.open == true ? 'open': ''">
              <li
                v-for="(items,index) in twoItem.chlid"
                @click.stop="SlectThree(items,twoItem.cat_name)"
                :key='index'>
                <span>{{items.cat_name}}</span>
                <van-icon name="success" v-show="actives == items.id "/>
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
            @click="sortSelect(item.type,item.title)">
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
            @click="freeSelect(item.type,item.title)"
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
import api from "@/api/classify";
import data from './components/config.js'
import classifyHead from "./components/classifyHead";
import classifyScreen from './components/classifyScreen';
import goodItem from "@/components/good-column-auto";
import { constants } from 'crypto';
let classify_Lists_box_height = 0
let listFirstCate
let bannerOffsetTop
export default {
    name: "",
    props:{
      type:Array,
    },
    data(){
      return{
        popAllName: this.$route.query.name,
        classId: this.$route.query.id,
        parentId:undefined,
        skuList:[],
        loading: false,
        finished: false,
        show:false,
        page:1,
        childList:[],
        show_all:false,
        show_sort:false,
        show_free:false,
        active:"",
        active1:"",
        actives:"",
        listShow:"",
        maxH:undefined,
        _twoName:'',
        twoName:'',
        _threeName:'',
        threeName:'',
        sortName:'',
        _sortName:'',
        allActive:false,
        sortActive:false,
        freeActive:false,
        innerChange:undefined,
        // opens:undefined,
        par:{
          sort:undefined,
          free:undefined,
          categoryId:undefined
        },
        free:0,
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
      this.getSkuListData();
      this.getCate();
    },
    methods: {
      getSkuListData(){
        this.skuList = [];
        this.page = 1;
        this.init_skuList();
      },
      getCate(){
        let params = {
          parent_id: this.classId,
        }
        api.getCateChlid(params).then(res => {
          this.childList.forEach((item) => {
            item.open=false
            item.chlid.forEach((chid)=>{
              chid.open = false
            })
          })
          this.childList = res.data;
        })
      },
      updateId(id, name){
        const obj={
          query: {
            name,
            id
          },
          path: this.$route.path
        }
        this.$router.replace(obj);
        this.popAllName = name;
        this.parentId = id;
        this.classId = id;
        this.clearAllSelectdName();
        this.clearSortSelectdName();
        this.clearFreeSelected();
        this.getSkuListData();
        this.getCate(); 
        
      },
      clearAllSelectdName(){
        this._twoName = '';
        this._threeName = '';
        this.twoName = this._twoName;
        this.threeName = this._threeName;
        this.actives = '';
        this.allActive = false;
      },
      clearSortSelectdName(){
        this.sort = '';
        this._sortName = '';
        this.sortName = this._sortName;
        this.active = '';
        this.sortActive = false;
      },
      clearFreeSelected(){
        this.free = 0;
        this.freeActive = false;
      },
      twoShow(itemId,name){
        this.actives = itemId.id;
        this.parentId = itemId.id;
        this._twoName = name;
        this._threeName = ''
      },
      SlectThree(item,twoItem) {
        this.actives = item.id;
        this.parentId = item.id;
        this._twoName = twoItem;
        this._threeName = item.cat_name;
        console.log(item,'0000')
      },
      allBtn(){
        this.show_all = false;
        this.getSkuListData();
        this.twoName = this._twoName;
        this.threeName = this._threeName;
        if(this.actives == ""){
          this.allActive = false;
        }else {
          this.allActive = true;
        }

      },
      showAll(){    // 请求all子类接口
        this.show_all = true;
      },
      clearId(){
        this.actives = '';
        this.parentId = undefined;
        this.clearAllSelectdName();
        this.getSkuListData();
      },
      sortSelect(type,name){
        this.active = type;
        this.par.sort = type;
        this._sortName = name;
      },
      freeSelect(type,name){
        this.active1 = type;
        this.par.free = type;
        this._freeName = name;
      },
      sortBtn(){
        this.page = 1;
        this.show_sort = false;
        this.sort = this.par.sort;
        this.skuList = [];
        this.sortName = this._sortName;
        this.init_skuList();
        if(this.active === "") {
          this.sortActive = false;
        }else {
          this.sortActive = true;
        }

      },
      freeBtn(){},
      childShow(item){
        this._twoName = item.cat_name;
        item.open = !item.open;
        this.$forceUpdate();
      },
      showPopup(type){
        if(type == 2) {
          this.show_sort = true;
        }else if (type == 3){
          if(this.freeActive){
            this.freeActive = false;
            this.free = 0;
            this.getSkuListData();
          }else {     // 包邮
            this.freeActive = true;
            this.free = 1;
            this.getSkuListData();
          }
        }
      },
      closePopup(type) {
        this.show_sort = false;
        this.show_all = false;
        this.show_free = false;
      },
      init_skuList(){// 商品搜索列表
        let params = {
          categoryId: this.parentId || this.classId,
          sort:this.sort,
          free:this.free,
          pageSize:12,
          page:this.page
        };
        api.getSkuList(params).then(res => {
          const data =  res.data.data;
          if (data.length === 0) {
            this.finished = true;
            this.loading = false
          } else {
            this.skuList = [...this.skuList, ...data]
            this.loading = false
            this.page++;
            this.finished = false;
          }
        });
      }

    },
    components: {
      classifyHead,
      classifyScreen,
      goodItem
    },
  directives: {
    scroll: {
      bind: (el, binding) => {
        // 监听滚动事件
        el.onscroll = (e) => {
          let top =  e.target.scrollTop
          if (top > classify_Lists_box_height){
            listFirstCate.style.top= bannerOffsetTop+ 'px'
            listFirstCate.style.position= 'fixed'
            console.log(222)
          }
          else {
            console.log(33)
            listFirstCate.style.position= 'inherit'
          }
        }
      }
    }
  },
    mounted(){
      let app_header = document.querySelector("#app-header-top");
      let app_banner = document.querySelector("#banner-box");
      classify_Lists_box_height = document.querySelector("#classify-Lists-box").offsetHeight;
      listFirstCate = document.querySelector("#listFirstCate")
      let top_number = app_header.offsetHeight;
      let banner_number = app_banner.offsetHeight;
      bannerOffsetTop = this.offsetTop = top_number + banner_number;
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      this.maxH = (h - this.offsetTop-classify_Lists_box_height) + 'px';

      // let getFirstId = localStorage.getItem(firstId);
      // console.log(getFirstId,'00000')
    }
}
</script>
<style lang='scss' scoped>
  .home-classify-page{
    height: 100%;
    overflow: scroll;
    .screenList {
      width: 100%;
      overflow: scroll;
      overflow-scrolling: touch;
      padding: 15px;
      white-space: nowrap;
      background: #fff;
      li {
        margin-right:10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        padding: 0 15px;
        height: 32px;
        box-sizing: border-box;
        border:1px solid #E1E1E1;
        border-radius: 18px;
        &:last-child{
          margin-right: 0px;
        }
        img {
          width: 18px;
          height: 10px;
          margin-left: 3px;
        }
        span {
          text-align: center;
          white-space: nowrap;
        }
      }
      .screenListActive {
        border-color: #000;
      } 
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
            // margin-left:12px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #E1E1E1;
            /*justify-content: space-between;*/
            .all-selected {
              float: right;
            }
            .hidden {
              display: inline-block;
              width:15px;
            }
            .left-icon{
              width: 20px;
              display: inline-block;
            }
            .twoShow {
              flex: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 38px;
              text-align: right;
              padding-right: 28px;
            }
            span {
              margin-left: 10px;
            }
          }
          ol {
            display: flex;
            flex-direction: column;
            height: 0px;
            overflow: hidden;
            &.open{
              height: auto;
            }
            li {
              line-height: 38px;
              padding: 0 28px 0 78px;
              border-bottom: 1px solid #E1E1E1;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
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
    .show-all-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .all-list {
        flex: 1;
        overflow: auto;
      }
    }
  }
  .mr5  {
    margin-right: 5px;
  }
  .selcect-img1 {
    width: 10px;
    height: 10px;
  }
  .selcect-img2 {
    width: 10px;
    height: 2px;
  }
  .van-radius {
    border-top-left-radius: 6px!important;
    border-top-right-radius: 6px!important;
  }
  .sku-list {
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > li {
      width: 48%;
      margin-bottom: 15px;
    }
  }

</style>

