
<template>
  <div id="accept">
    <form v-show="btn_type===0"
      id="paymentForm">
      <button type="button"
        class="AcceptUI"
        data-billingAddressOptions='{"show":false, "required":false}'
        data-apiLoginID="87YXn3mP"
        data-clientKey="35N55mdG9ra8aVL44v477MV5SHBWt38FF5mRfPCZPcd82NV4c566kwB95zVX86UE"
        data-acceptUIFormBtnTxt="Submit"
        data-acceptUIFormHeaderTxt="Card Information"
        data-responseHandler="responseHandler">{{btn_text}}
      </button>
    </form>
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
      btn_type: 0,
    };
  },
  mounted() {
    this.init_data();
  },
  props: ["order", "orderBtn", "orderNo"],
  computed: {},
  methods: {
    create_order() {
      let order_params = this.order;
      if (order_params) {
        api.create_order(order_params).then(res => {
          console.log(res);
          com_params.append("order_no", res.data.order_no);
        });
      } else {
        com_params.append("order_no", this.orderNo);
      }
    },
    init_data() {
      let window = window;
      let acceptjs = document.createElement("script");
      acceptjs.src = "https://js.authorize.net/v3/AcceptUI.js";
      document.body.appendChild(acceptjs);
      this.responseHandler();
    },
    responseHandler() {
      let that = this;
      return (window.responseHandler = response => {
        console.log(response);
        com_params.append("dataDescriptor", response.opaqueData.dataDescriptor);
        com_params.append("dataValue", response.opaqueData.dataValue);
        that.btn_type = 1;
        api.pay_order(com_params).then(res => {
          console.log(res);
          // com_params = new FormData();
          // let params = {
          //   path: "/callback",
          //   query: { order_no: res.data.order_no}
          // };
          // this.$router.push(params);
          window.location.href =
            window.location.origin + "/callback?order_no=" + res.data.order_no;
          // this.$router.push({path:'/user/orders/list'});
        });
        // debugger;
        if (response.messages.resultCode === "Error") {
          // console.log();
          console.log(response);
          // var i = 0;
          // while (i < response.messages.message.length) {
          //   console.log(
          //     response.messages.message[i].code +
          //       ": " +
          //       response.messages.message[i].text
          //   );
          //   i = i + 1;
          // }
        } else {
          // this.paymentFormUpdate(response.opaqueData);
        }
      });
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
