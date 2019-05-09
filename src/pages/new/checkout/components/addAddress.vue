<template>
  <div class="my-address">
    <div class="form-content" >
      <h3>Shipping Address</h3>
      <ul class="address-content">
        <li>
            <input type="text" placeholder="First Name" v-model="address.first_name">
        </li>
        <li>
          <input type="text" placeholder="Last Name" v-model="address.last_name">
        </li>
        <li>
          <input type="text" placeholder="Address" v-model="address.address1">
        </li>
        <li>
        <input type="text" placeholder="Apartment, suite, etc.(optional)" v-model="address.address2">
        </li>
        <li>
          <input type="text" placeholder="City" v-model="address.city">
        </li>
        <li @click="goSelectState()" class="state">
            <div class="name">
              <span>State</span>
            </div>
            <span class="state-selecet">
              <span>{{address.state?address.state:''}} hahhaha</span>
              <van-icon name="arrow" class="jiant"/>
            </span>
        </li>
        <li>
         <input type="text" placeholder="Zip Code" v-model="address.zipcode"/>
        </li>
        <li>
          <input type="text" placeholder="Phone Number" v-model="address.tel">
        </li>
      </ul>
      <div class="add-btn" @click="go_back">
        Continue
      </div>
    </div>
    <van-popup v-model="showState" position="bottom" :overlay="false" ref = "vanPpopupStateRef" class="van-popup-state"
               :style="tabHeight"
    >
      <addressState class="state-box" @select="changeState" />
    </van-popup>
  </div>
</template>

<script>
  import address from "@/api/address";
  import addressState from "@/components/address-state";
  export default {
    name: "",
    data() {
      return {
        tabHeight: {
          // overflow: 'scroll'
        },
        showState: false,
        vanTablesHieght: 1,
        address: {
          id: "",
          first_name: "",
          last_name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zipcode: "",
          tel: "",
        },
      };
    },
    created() {
    },
    mounted() {
      let app_header = document.querySelector("#app-header-top");
      let app_banner = document.querySelector("#banner-box");
      let top_number = app_header.offsetHeight;
      let banner_number = app_banner.offsetHeight;

      this.vanTablesHieght = window.innerHeight - top_number - banner_number

    },
    computed: {},
    methods: {
      changeState(data) {
        this.address.state = data;
        this.showState = false;
      },
      goSelectState() {
        this.showState = true;
        // console.log(this.$refs.vanPpopupStateRef)
        this.tabHeight.height = this.vanTablesHieght+'px'
        // this.$refs.vanPpopupStateRef.$el.style.height = this.vanTablesHieght+'px'
      },
      go_back() {
        address.address_save(params).then(res => {
          alert('成功')
        });
      }
    },
    components: {
      addressState
    }
  };
</script>

<style lang='scss' scoped>
  .my-address {
   padding: 15px;
    background-color: #fff;
    .form-content {
      h3 {
        font-size:18px;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-bottom: 10px;
      }
      input[type='text'] {
        height: 50px;
        width: 100%;
        border-radius:4px;
        border:1px solid rgba(225,225,225,1);
        line-height: 50px;
        padding: 0px 10px;
        color:rgba(74,74,74,1);
        display: block;
        margin-bottom: 10px;
      }
      .state {
        height: 50px;
        width: 100%;
        padding: 0px 10px;
        align-items: center;
        border-radius:4px;
        border:1px solid rgba(225,225,225,1);
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        color:rgba(74,74,74,1);
        .name {
          line-height: 50px;

        }
        .state-selecet {
          line-height: 50px;
          span {
            line-height: 50px;
            vertical-align: middle;
          }
          .jiant {
            vertical-align: middle;
            margin-left: 10px;
          }
        }
      }
    }
    .add-btn {
      height:45px;
      background:rgba(0,0,0,1);
      border-radius:30px;
      text-align: center;
      line-height: 45px;
      font-size:14px;
      font-weight:bold;
      color:rgba(255,255,255,1);
    }
    .van-popup-state {
      width: 100%;
      .state-box {
        min-height: 101%;
      }
    }
  }
</style>
