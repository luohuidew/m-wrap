<template>
  <div class="braintree-paypal-button"></div>
</template>

<script>
import braintree from "braintree-web";
import paypal from "paypal-checkout";

export default {
  name: "BraintreePaypalButton",
  data() {
    return {
      current_global: {}
    };
  },
  props: {
    env: {
      required: true,
      type: String
    },
    // https://developers.braintreepayments.com/guides/paypal/vault/javascript/v3
    token: {
      default: null,
      type: String
    },
    // https://developer.paypal.com/docs/checkout/how-to/customize-button/#supported-locales
    locale: {
      default: "en_US",
      type: String
    },
    // https://developer.paypal.com/docs/checkout/how-to/customize-button/
    styles: {
      type: Object,
      default() {
        return {
          // branding: true, // optional
          // layout: "vertical",
          size: "medium", // small | medium | large | responsive
          shape: "pill", // pill | rect
          color: "blue" // gold | blue | silve | black
        };
      }
    }
  },
  watch: {
    token(cur) {
      this.initButton(cur);
    }
  },
  mounted() {
    this.initButton(this.token);
  },
  methods: {
    initButton(token) {
      const vm = this;
      braintree.client.create(
        {
          authorization: token
        },
        (clientError, clientInstance) => {
          if (clientError) {
            vm.$emit("error", clientError);
            return;
          }
          braintree.paypalCheckout.create(
            {
              client: clientInstance
            },
            (paypalCheckoutErr, paypalCheckoutInstance) => {
              vm.current_global.paypalCheckoutInstance = paypalCheckoutInstance;
              if (paypalCheckoutErr) {
                vm.$emit("error", paypalCheckoutErr);
                return;
              }

              const environment = vm.env;
              const locale = vm.locale;
              const styles = vm.styles;
              // debugger;
              console.log(paypal);
              // vm.payment();
              paypal.Button.render(
                {
                  env: environment,
                  locale,
                  style: styles,
                  payment() {
                    // console.log('提交订单');
                    return paypalCheckoutInstance.createPayment({
                      flow: "vault"
                    });
                  },
                  onAuthorize(data) {
                    console.log(this);
                    return paypalCheckoutInstance.tokenizePayment(
                      data,
                      (error, payload) => {
                        if (error) {
                          vm.$emit("error", error);
                          return;
                        }
                        vm.$emit("authorized", payload.nonce);
                      }
                    );
                  },
                  onCancel() {
                    vm.$emit("canceled");
                  },
                  onError(error) {
                    vm.$emit("error", error);
                  }
                },
                vm.$el
              );
            }
          );
        }
      );
    }
  }
};
</script>

<style scoped>
.braintree-paypal-button {
  /* width: 200px; */
  height: 50px;
}
</style>
