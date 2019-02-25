<template>
  <div class="apply-page" v-if="have_token">
    <div class="content">Thanks for applying! Please leave your contact details.</div>
    <div class="contact">
      <input type="text"
        placeholder="Mobile"
        class="text"
        v-model="mobile">
      <span class="submit"
        @click="apply_phone">
        SUBMIT
      </span>
    </div>
    <p class="tips-text" v-if="require_tips">Please fill in your phone number </p>
  </div>
</template>

<script>
import api from "@/api/trial";
import user from "@/api/user";
export default {
  name: "apply",
  data() {
    return {
      mobile: "",
      datas: [],
      require_tips:false,
      have_token : false
    };
  },
  created() {
    // this.init_data();
    this.init_data();
  },
  mounted() {
  },
  methods: {
    init_data() {
      user.getUserInfo().then(res => {
        this.have_token = true;
      });
    },
    apply_phone() {
      let sub_params = { id: this.$route.query.id, phone: this.mobile };
      if((this.mobile+'').length>6){
        api.trial_apply(sub_params).then(res => {
          this.datas = res.code;
          this.$router.replace({
            name: "free_submit",
            query: { id: this.$route.query.id }
          });
        }).catch(res => {
          if (res.code === 3001)
            this.$router.replace({
              name: "free_fail",
              query: { id: this.$route.query.id }
            });
        });
      }else {
        this.require_tips = true;
        setTimeout(()=>{
          this.require_tips = false;
        },2000)
      }
      // if(typeof(this.mobile)===Number && (this.mobile+'').toString()>6){
      // }else {
      //   alert('Please enter the correct phone number');
      // }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.apply-page {
  height: 100%;
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 1);
}

.tips-text {
  color:#d70e19;
  text-align: left;
  padding: 25px 20px;
}

.content {
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  line-height: 25px;
  margin-bottom: 15px;
}
.contact {
  position: relative;
  height: 59px;
  background: #fff;
  .text {
    padding-left: 20px;
    padding-left: 20px;
    border: 0;
    width: 100%;
    height: 100%;
    line-height: 59px;
  }
  .submit {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 74px;
    height: 32px;
    background: #d70e19;
    text-align: center;
    border-radius: 16px;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    line-height: 32px;
  }
}
</style>