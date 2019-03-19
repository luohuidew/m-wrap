
<template>
  <div id="accept">
    <form v-show="btn_type===0"
      id="paymentForm">
      <button type="button"
        class="AcceptUI"
        data-billingAddressOptions='{"show":false, "required":false}'
        data-apiLoginID="5CMZa8dphY89"
        data-clientKey="3N5ZK9drwKYgtZP34n5Z25uLy6t63FnRtzdXhWs28XVM4bp4u3NrbK8Gh3BSjZzd"
        data-acceptUIFormBtnTxt="Submit"
        data-acceptUIFormHeaderTxt="Card Information"
        data-responseHandler="responseHandler"
       >{{btn_text}}
      </button>
    </form >
    <div class="loading"
      v-show="btn_type===1">
      <span class="loadingUI">Payments <span class="load-text l1"></span><span class="load-text l2"></span><span class="load-text l3"></span></span>
    </div>
  </div>
</template>

<script>
let com_params = new FormData();
import api from "@/api/pay";
export default {
  name: "",
  data() {
    return {
      btn_text: this.orderBtn ? this.orderBtn : "PAYMENT",
      btn_type: 0
    };
  },
  mounted() {
    this.init_data();
    this.create_order();
  },
  props: ["order", "orderBtn", "order_summary_id"],
  computed: {},
  methods: {
    init_data() {
      let window = window;
      let acceptjs = document.createElement("script");
      acceptjs.src = "https://jstest.authorize.net/v3/AcceptUI.js";
      document.body.appendChild(acceptjs);
      this.responseHandler();
    },
    responseHandler() {
      let that = this;
      return (window.responseHandler = response => {
        // console.log(response);
        com_params.append("dataDescriptor", response.opaqueData.dataDescriptor);
        com_params.append("dataValue", response.opaqueData.dataValue);
        that.btn_type = 1;
        // console.log(com_params);

        api.pay_accept(com_params).then(res => {
          window.location.href = window.location.origin + "/callback?order_no=" + res.data.order_no;
        }).catch((err)=>{
          console.log(err)
          window.location.href = window.location.origin + "/callback?error=" + '支付失败';
        });
        // debugger;
        if (response.messages.resultCode === "Error") {
          // console.log();
          console.log(response);
          window.location.href = window.location.origin + "/callback?error=" + '支付失败';
        } else {
          // this.paymentFormUpdate(response.opaqueData);
        }
      });
    },
    create_order() {
      com_params.append("pay_id", this.order_summary_id);
    },
    paymentFormUpdate(opaqueData) {
      document.getElementById("dataDescriptor").value =
        opaqueData.dataDescriptor;
      document.getElementById("dataValue").value = opaqueData.dataValue;
      console.log(opaqueData);
      // If using your own form to collect the sensitive data from the customer,
      // blank out the fields before submitting them to your server.
      // document.getElementById("cardNumber").value = "";
      // document.getElementById("expMonth").value = "";
      // document.getElementById("expYear").value = "";
      // document.getElementById("cardCode").value = "";

      // document.getElementById("paymentForm").submit();
    }
  },
  components: {}
};
</script>

<style lang='scss'>
#accept {
  height: 100%;
  // width: 100%;
  width: 250px;
  border-radius: 20px;
  overflow: hidden;
}
body #AcceptUIContainer {
  left: 10px;
  // margin-left: 0;
  // max-width: 100vh;
  iframe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // height: 100%;
  }
}
.AcceptUI {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: #d80c18;
  // border-radius: 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #df3e47;
  }
}
#paymentForm {
  height: 100%;
  width: 100%;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  // line-height: 30px;
  background-color: #c9caca;
  color: #fff;
  border: none;
  margin: 0 auto;
  // padding: 10px 72px;
  border-radius: 20px;
}

.loadingUI {
  height: 100%;
  display: flex;
  align-items: center;
}

.load-text {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 4px;
}
@keyframes load {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
}
.l1 {
  animation: load 1.2s 0s infinite;
}
.l2 {
  animation: load 1.2s 0.3s infinite;
}
.l3 {
  animation: load 1.2s 0.6s infinite;
}
</style>
