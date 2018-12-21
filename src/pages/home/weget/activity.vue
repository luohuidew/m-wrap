<template>
 <div class="activity">
     <ul>
         <li v-for="(item,index) in activity_lists"
          :key="index"
          @click="to_activity(item.href_path)">
             <img :src="item.img_url" :alt="item.title" srcset="">
         </li>
     </ul>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         activity_lists:[
             {
                 title:'New arrival',
                 img_url:'',
                 href_path:'newArrival'
             },
             {
                 title:'limited time',
                 img_url:'',
                 href_path:'limited'
             },
             {
                 title:'$9.9',
                 img_url:'',
                 href_path:'cheap'
             },
             {
                 title:'',
                 img_url:'/static/img/free.png',
                 href_path:'free'
             },
         ]
     }
   },
   components: {

   },
   methods:{
       to_activity(path){
           this.$router.push({name:path});
       }
   }
 }
</script>

<style lang="scss" scoped>
.activity {
    height:294px;
    padding:10px;
    ul {
        display: flex;
        width:100%;
        height:100%;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
            width:49%;
            height:47%;
            background-color: #ccc;
            overflow: hidden;
            img {
                width:100%;
                height:auto;
            }
        }
    }
}
 
</style>
