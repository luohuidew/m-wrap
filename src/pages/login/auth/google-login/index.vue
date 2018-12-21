<template>
  <div class="g-signin-button"
    ref='signinBtn'>
    <!-- <img src="/static/icon/" alt=""> -->
  </div>
</template>

<script>
export default {
  name: "g-signin-button",
  data() {
    return {};
  },
  props: {
    params: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  mounted() {
    // (function(d, s, id) {
    //   // eslint-disable-line func-names
    //   // debugger;
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://apis.google.com/js/api:client.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "google-jssdk");
    if (!window.gapi) {
      console.error(
        '"https://apis.google.com/js/api:client.js" needs to be included as a <script>.'
      );
      return;
    }

    if (!this.params.client_id) {
      console.error("params.client_id must be specified.");
      return;
    }

    window.gapi.load("auth2", () => {
      const auth2 = window.gapi.auth2.init(this.params);
      auth2.attachClickHandler(
        this.$refs.signinBtn,
        {},
        googleUser => {
          // debugger;
          this.$emit("success", googleUser);
        },
        error => {
          // debugger;
          this.$emit("error", error);
          this.$emit("failure", error); // an alias
        }
      );
    });
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
