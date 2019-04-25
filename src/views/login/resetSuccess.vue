<template>
 <div class="resend-email-box">
   <div class="box-title">
     <img @click="$router.go(-1)" src="/static/images/icon/login/返回 大@2x.png" alt="">
     <span>Reset Password</span>
   </div>
   <div class="box-desc">
     <p class="title">Success</p>
     <span>Please check {{$route.query.email}} and reset the password</span>
   </div>

   <div class="send-email-box">
      <button @click="$router.go(-1)">
        Resend
      </button>
      <button @click="to_login">
        Log In
      </button>
   </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props: {
   },
   data () {
     return {
       resetEmail:''
     }
   },
   computed: {
   },
   created () {
   },
   methods: {
     to_login(){
       let params = {
         
       };
       this.$router.go(-2);
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.resend-email-box {
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 25px 48px 25px;
}
.box-title {
  display: flex;
  align-content: center;
  padding-bottom: 35px;
  img {
    height: 24px;
    width: 24px;
  }
  span {
    flex:1;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
}
.box-desc {
  font-size: 14px;
  padding-bottom: 20px;
  .title {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
/*  */
.send-email-box {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 64px;
  button {
    display: inline-block;
    height: 40px;
    width: 120px;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    line-height: 40px;
    background-color: #D70E19;   
    border-radius: 20px;    
  }
}
 
</style>
