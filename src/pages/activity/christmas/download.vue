<template>
 <div class="download_page">
    <div class="download_main">
        <div class="download_header">
          <img src="/static/img/christmas/icon/主题@2x_67.png">
        </div>
        <div class="download_woohoo">
          <img src="/static/img/christmas/Woohoo!Couponisalreadyinyourwegetaccount.@2x.png">
        </div>
        <div class="download_coupon">
          <img src="/static/img/christmas/Apply@2x.png">
          <ul class="download_apply">
              <li v-if="down_load.end_time">
                  <span>{{down_load.name}}</span>
                  <span>{{new Date(down_load.end_time*1000).toLocaleDateString()}}</span>
              </li>
          </ul>
        </div>
        <!-- <div class="download_btn">
            <img src="/static/img/christmas/icon/TryAgain@2x_84.png" @click="to_mygift">
        </div> -->
        <div class="download_phone">
          <img src="/static/img/christmas/googlecopy@3x@2x.png" class="mbt30">
          <img src="/static/img/christmas/3stepClick“ME”-”COUPONS”,checkyourcoupons@2x.png">
        </div>
    </div> 
   <div class="download_footer">
       <img src="/static/img/christmas/Hurryupandgetyourspecialdeals!@2x.png">
   </div>
 </div>
</template>

<script>
  import api from "@/api/christmas";
 export default {
   name:'',
   data () {
     return {
       down_load:{},
        id:this.$route.query.id,
     }
   },
   mounted () {
   },
   computed: {
   },
   created() {
    this.init_data();
  },
   methods: {
    init_data() {
      console.log(this.id)
      api.down_load().then(res => {
        this.down_load = res.data
        console.log(res);
      });
    },
     to_groupbuy(){
       let uid = this.down_load.uid
       this.$router.push({
         path:'/activity/christmas-lists',
         query:{
           try:'hash'
         }
        });
     },
     to_mygift(){
        sessionStorage.setItem("temp_status", "5");
        if (sessionStorage.getItem("temp_status") === "5") {
          let params = {
            path: "/activity/christmas-lists"
          };
          this.$router.push(params);
        }
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.download_page{
    height: auto;
    width: 375px;
    min-width: 100%;
    overflow: hidden;
    font-size: 0;
    .download_main {
      width: 100%;
      padding: 0 20px 20px;
      background: url("/static/img/christmas/列表页背景.jpg") no-repeat top center;
      background-size: 100% 100%;
      .download_header,.download_woohoo,.download_coupon,.download_phone{
          width: 100%;
          margin: 0 auto;
          img{
            width: 100%;
          }
      }
      .download_phone{
        margin-top: 30px;
      }
      .download_woohoo{
        margin:20px 0 30px 0;
      }
      .download_coupon{
        position: relative;
        font-size: 12px;
        .download_apply{
          position: absolute;
          width: 85%;
          height: 60px;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          li{
            line-height: 30px;
            color: #16352F;
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .download_btn{
          width: 100%;
          margin: 30px auto;
          display: flex;
          align-items: center;
          text-align: center;
          img{
            height: 40px;
            margin: 0 auto;
            width: auto;
          }
      } 
    }
    .mbt30{
        margin-bottom: 30px;
    }
    .download_footer{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        background:#1A2221;
        img{
            width: 60%;
            margin: 0 auto;
        }
    } 
}


</style>
