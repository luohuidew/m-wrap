<template>
  <div class="test">
    ceshi
    <button @click="test_and">test</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    //  debugger;
    //  alert(JSON.parse(window.weget_mobile_type));
    // this.test_and()
    window.test_and = params => {
      // alert(params);
      alert("hello");
      // return params;
    };
    if (window.weget_mobile_type.is_Android()) {
      let and_token = window.weget_mobile_type.nativeToJavaScript_sendToken();
      // if (and_token) {
      //   setToken(and_token);
      //   if (getToken()) {
      //     window.location.reload();
      //   }
      // }
      // alert(and_token);
    }
    // window.weget_mobile_type.nativeToJavaScript_sendToken();
  },
  computed: {},
  methods: {
    test_and() {
      let share_params = {
        type: 102,
        data: {}
      };
      // window.webkit.messageHandlers.javaScriptToNative.postMessage(
      //   share_params
      // );
      // function nativeToJavaScript(params) {
      //   // alert(params);
      //   alert("hello");
      //   // return params;
      // }
      // console.log(test_and());
       if (window.weget_mobile_type && window.weget_mobile_type.is_Android()) {
          let and_token = window.weget_mobile_type.nativeToJavaScript_sendToken();
          if (and_token) {
            console.log(and_token)
            // setToken(and_token);
            // if (getToken()) {
              // window.location.reload();
            // }
          }else {
            console.log('沒有token')
          }
        }
      // let temp_res = window.weget_mobile_type.nativeToJavaScript(
      //   JSON.stringify(share_params)
      // );
      // let temp_res = window.weget_mobile_type.nativeToJavaScript();
      alert(temp_res);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
