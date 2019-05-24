<template>
  <div class="home-classify-page">
    <classifyHead @parentId="updateId" :classId="classId"/>
    <classifyScreen @getChild="getAll" :childData="childList"/>
    <van-list v-model="loading"
      :finished="finished"
      finished-text="No more data"
      :loading-text="'Loading...'"
      @load="init_skuList"
      >
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
      // this.init_data();
    },
    methods: {
      updateId(data){
        this.parentId = data.id;
        this.init_skuList();
      },
      getAll(){   //获取子类列表
        let params = {
          parent_id: this.parentId,
        }
        api.getCateChlid(params).then(res => {
          console.log(res.data);
          this.childList = res.data;
          this.childList.forEach((item) => {
            item.open=false
            item.chlid.forEach((chid)=>{
              chid.open = false
            })
          })
          console.log(this.childList,'====')
        })
      },
      init_skuList(){   // 商品搜索列表
        let params = {
          categoryId: this.parentId || this.classId,
        };
        api.getSkuList(params).then(res => {
          this.skuList = res.data.data;
        });
        // api.getSkuList(params).then(res => {
        //   if (!res.data.data.length) {
        //     this.finished = true;
        //     this.loading = false;
        //   }
        //   res.data.data.forEach(item => {
        //     // this.selectId = res.data.extend.selectId;
        //     this.loading = false;
        //     this.skuList.push(item);
        //   });
        // });
        // console.log(_this.skuList,_this.skuList.length);
      },
      get_more_data(){
        // console.log(123)
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

