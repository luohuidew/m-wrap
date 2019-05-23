<template>
    <ul class="classify-screen-page">
        <li 
          v-for="(item,index) in skuList" 
          :key="index">
          <span>{{item.title}}</span>
          <img 
            v-if="item.src"
            :src=item.src
            alt="">
        </li>
    </ul>
</template>

<script>
export default {
    name: "",
     props: {
        skuList:{
            type:Array,
            default:undefined
        }
    },
    data(){
      return{ 
      active: 0,
      }
    },
    watch: {},
    computed: {},
    created() {},
    methods: {},
    components: {},
    mounted(){
    }
}
</script>>

<style  lang='scss' scoped>  
   .classify-screen-page {
      padding: 15px;
      display: flex;  
      position: -webkit-sticky;
      position: sticky;
      top: -1px;     
      background: #fff;  
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
</style>
