<template>
  <div class="home-classify-page">
    <classifyHead @parentId="updateId" :classId="classId"/>
    <classifyScreen @getChild="getAll" :childData="childList"/>
    <van-list v-model="loading"
              :immediate-check="false"
              :finished="finished"
              :finished-text="''"
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
  </div>
</template>

<script>
import api from "@/api/classify";
import classifyHead from "./components/classifyHead";
import classifyScreen from './components/classifyScreen';
import goodItem from "@/components/good-column-auto";
export default {
    name: "",
    props:{
      type:Array,
    },
    data(){
      return{
        classId: this.$route.query.id,
        parentId:undefined,
        // categoryId:undefined,
        skuList:[],
        loading: false,
        finished: false,
        show:false,
        childList:[]
      }
    },
    watch: {},
    computed: {},
    created() {
      this.init_skuList()
    },
    methods: {
      updateId(data){
        this.parentId = data.id;
        this.init_skuList();
      },
      getAll(data){   //获取子类列表
        if(data == "click") {
          let params = {
            parent_id: this.parentId,
          }
          api.getCateChlid(params).then(res => {
          // console.log(res.data);
            this.childList = res.data;
            this.childList.forEach((item) => {
              item.open=false
              item.chlid.forEach((chid)=>{
                chid.open = false
              })
            })
            // console.log(this.childList,'====')
          })
        }else {
          if(data[0] == "sort") {
            this.sort = data[1];
          }
          if(data[0] == "free") {
            this.free = data[1];
          }
          if(data[0] == "categoryId") {
            this.parentId = data[1];
          }
        }
        this.init_skuList();
        
      },
      init_skuList(){   // 商品搜索列表
        let params = {
          categoryId: this.parentId || this.classId,
          sort:this.sort,
          free:this.free,
          pageSize:12
        };
        api.getSkuList(params).then(res => {
          this.skuList = res.data.data;
        });
      },
      closePopup() {
        this.show = false
      },

    },
    components: {
      classifyHead,
      classifyScreen,
      goodItem
    },
    mounted(){

    }
}
</script>
<style lang='scss' scoped>
  .home-classify-page{
    border: 1px solid red;
    height: 100%;
  }
  .vant-list{
    border: 1px solid #000;

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

