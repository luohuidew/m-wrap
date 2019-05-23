<template>
    <div class="home-classify-page">
      <classifyHead :lists="classifyLists" @parentId="updateId"/>
      <classifyScreen/>
      <!--  加载列表-->
      <div class="scrollBox">
        <span>111</span>
       <span>333</span>
       <span>222336663</span>
       <span>000300033</span>
       <span>3999933</span>
       <span>88883888833</span>
       <span>5555333</span>
       <span>121355555333</span>
      </div>
      
    </div>
</template>

<script>
import api from "@/api/classify";
import classifyHead from "./components/classifyHead";
import classifyScreen from './components/classifyScreen';
export default {
    name: "",
    data(){
      return{
        classifyLists:[],
        parentId:'',
        skuList:[]
      }
    },
    watch: {},
    computed: {},
    created() {
      this.init_data();
    },
    methods: {
      updateId(data){
        this.parentId = data.id;
        this.init_skuList();
      },
      init_data() {   // 获取分类列表
        let _this = this;
        api.getCateList().then(res => {
          _this.classifyLists = res.data;
        });
      }, 
      init_skuList(){   //商品搜索列表
        let _this = this;
        let params = {
          categoryId: this.parentId
        };
        api.getSkuList(params).then(res => {
          _this.skuList = res.data.data
        });
        console.log(_this.skuList,_this.skuList.length);
      },
      
    },
    components: {
      classifyHead,
      classifyScreen,
    },
    mounted(){
      
    }
}
</script>
<style>
.scrollBox {
    height: 2000px;
    display: flex;
    flex-direction: column;
    background: #ccc;
   justify-content: space-between;
    overflow: scroll;
}
</style>

