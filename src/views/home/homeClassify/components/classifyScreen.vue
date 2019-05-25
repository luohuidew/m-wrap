<template>
  <div class="classify-screen-page">
    <!-- <ul>
      <li @click="showAll()" v-if="this.threeName || this.twoName">
        <span v-show="!this.threeName || this.threeName" class="mr5">{{this.twoName}} </span>
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

      <li @click="showPopup(2)">
        <span>Sort</span>
        <img
          src="/static/images/icon/cart/分类 copy 2.png"
          alt="">
      </li>
       <li @click="showPopup(3)">
        <span>Free shipping</span>
      </li>
    </ul> -->
  </div>

</template>

<script>
import data from './config.js';
import api from "@/api/classify";
export default {
    name: "",
    // props: ['childData'],
    data(){
      return{
        // show_all:false,
        // show_sort:false,
        // show_free:false,
        // active:"",
        // active1:"",
        // actives:"",
        // listShow:"",
        // maxH:undefined,
        // twoName:'',
        // threeName:'',
        // innerChange:undefined,
        // par:{
        //   sort:undefined,
        //   free:undefined,
        //   categoryId:undefined
        // },
        // sortList:data.sortList,
        // freeList:data.freeList,
        // screenLists:[
        //   {
        //     type:1,
        //     title:'All',
        //     src:"/static/images/icon/cart/分类 copy 2.png"
        //   },
        //   {
        //     type:2,
        //     title:"Sort",
        //     src:"/static/images/icon/cart/分类 copy 2.png"
        //   },
        //   {
        //     type:3,
        //     title:"Free shipping",
        //   }
        // ],

      }
    },
    watch: {},
    computed: {
      // listData() {
      //   return this.childData
      // },
    },
    created() {

    },
    methods: {
      // twoShow(itemId,name){
      //   this.actives = itemId.id;
      //   this.par.categoryId = itemId.id;
      //   this.twoName = name;
      //   console.log(this.twoName)
      // },
      // SlectThree(item,e) {
      //   this.actives = item.id;
      //   this.par.categoryId = item.id;
      //   // this.twoName = e.target.parentElement.previousElementSibling.firstElementChild.lastElementChild
      //   this.twoName = e.target.parentElement.previousElementSibling.lastElementChild.firstElementChild.innerHTML;
      //   this.threeName = e.currentTarget.innerText;
      //   console.log(this.twoName,this.threeName)

      // },
      // allBtn(){
      //   this.show_all = false;
      //   this.$emit('getChild', ["categoryId",this.par.categoryId]);
      // },
      // clearId(){
      //   this.actives = '';
      //   this.par.categoryId = '';
      //   this.twoName = false;
      // },
      // sortSelect(type){
      //   this.active = type;
      //   this.par.sort = type;
      // },
      // sortBtn(){
      //   this.show_sort = false;
      //   this.$emit('getChild', ["sort",this.par.sort])
      // },
      // freeSelect(type){
      //   this.active1 = type;
      //   this.par.free = type;
      // },
      // freeBtn(){
      //   this.show_free = false;
      //   this.$emit('getChild', ["free",this.par.free])
      // },
      // childShow(item){
      //   item.open = !item.open
      //   this.$forceUpdate();
      // },
      // showPopup(type){
      //   if(type == 2) {
      //     this.show_sort = true;
      //   }else if (type == 3){
      //     this.show_free = true;
      //   }
      // },
      // showAll(){
      //   this.$emit('getChild','click');
      //   this.show_all = true;
      // },
      // closePopup(type) {
      //   switch (type) {
      //     case 1:
      //       return this.show_all = false;
      //     case 2:
      //       return this.show_sort = false;
      //     case 3:
      //       return this.show_free = false;
      //     default:
      //       return "this is default";
      //   }
      // }
    },
    components: {},
    mounted(){
      // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      // this.maxH = (h - 88) + 'px';
      // console.log(this.maxH)
    }
}
</script>>

<style  lang='scss' scoped>
  .classify-screen-page {
    width: 100%;
    overflow: hidden;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    background: #fff;
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
    // & > ul {
    //   width: 100%;
    //   overflow: scroll;
    //   overflow-scrolling: touch;
    //   padding: 15px;
    //   white-space: nowrap;
    //   li {
    //     margin-right:10px;
    //     display: inline-flex;
    //     align-items: center;
    //     justify-content: center;
    //     font-size: 12px;
    //     font-weight: bold;
    //     padding: 0 15px;
    //     height: 32px;
    //     box-sizing: border-box;
    //     border:1px solid #E1E1E1;
    //     border-radius: 18px;
    //     &:last-child{
    //       margin-right: 0px;
    //     }
    //     img {
    //         width: 18px;
    //         height: 10px;
    //         margin-left: 3px;
    //     }
    //     span {
    //       text-align: center;
    //       white-space: nowrap;
    //     }
    //   }
    // }
    .van-height {
      // height: 100%;
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
</style>
