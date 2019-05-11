<template>
 <div class="checkout-page">
     <div id="dropin-container"></div>
     <button id="submit-button"> payment </button>
 </div>
</template>

<script>
    import dropin  from "braintree-web-drop-in";
    import api from "@/api/pay";

    export default {
   name:'',
   props: {
   },
   data () {
     return {
         payId: this.$route.query.pay_id
     }
   },
   computed: {
   },
    mounted() {
        this.init_data();
    },
   created () {

   },
   methods: {
       init_data() {
           const _this = this
           _this.toast = this.$toast({
               duration: 0,       // 持续展示 toast
               mask: true,
               forbidClick:true,
               loadingType: "spinner",
               message: 'Loading...',
           });
           var button = document.querySelector('#submit-button');
           api.pay_key().then(res => {
               const  clittoken = res.data;
               dropin.create({
                   authorization: clittoken,
                   container: '#dropin-container',
                   paypal: {
                       flow: 'vault'
                   }
               }, function (createErr, instance) {
                   _this.toast.clear()
                   button.addEventListener('click', function () {
                       instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                           console.log(payload,'哈哈',_this.payId)
                           let params = {
                               nonce: payload.nonce,
                               pay_id: _this.payId
                           };
                           api.pay_paypal(params).then(res => {
                               // this.pay_callback(res);
                           }).catch(err=>{
                               // this.pay_callback(err);
                           });
                           // Submit payload.nonce to your server
                       });
                   });
               });
           });
       },
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.checkout-page {
    padding: 20px;
    margin-top: 10px;
}
#submit-button {
    height: 40px;
    border: 1px solid #aab2bd;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
