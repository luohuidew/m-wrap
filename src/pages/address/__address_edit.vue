<template>
  <div class="my-address">
    <h3 @click="show">Add Shipping Address</h3>
    <ul class="address-content">
      <li>
        <p>
            <span>First Name</span>
            <input type="text" v-model="data_edit.first_name">
        </p>
      </li>
      <li>
        <p><span>Last Name</span><input type="text" v-model="data_edit.last_name"></p>
      </li>
      <li>
        <p><span>Address</span><input type="text"
            v-model="data_edit.address1"></p>
      </li>
      <li>
        <p><span>Address Line 2</span><input type="text"
            v-model="data_edit.address2"></p>
      </li>
      <li>
        <p><span>City</span><input type="text"
            v-model="data_edit.city"></p>
      </li>
      <li>
        <p><span>State</span><input type="text"
            v-model="data_edit.state"></p>
      </li>
      <li>
        <p><span>Zip Code</span><input type="text"
            v-model="data_edit.zipcode"></p>
      </li>
      <li>
        <p><span>Phone Number</span><input type="text"
            v-model="data_edit.tel"></p>
      </li>
      <li class="switch-btn">
        <p>
          <span>Set as default address</span>
          <van-switch active-color="#D70E19"
           v-model="is_default"/>
        </p>
      </li>
    </ul>
    <div class="add-btn">
      <a href="javascript:;"
        @click="go_back">DONE</a>
    </div>
  </div>
</template>

<script>
import { Switch } from "vant";
import address from "@/api/address";
export default {
  name: "",
  data() {
    return {
        data_edit:{},
        is_default: false,
        address:{},
    };
  },
  created() {
    this.data_edit = this.$route.query.index
  },
  mounted() {},
  computed: {},
  methods: {
    show(){
      console.log(this.data_edit)
    },
    go_back() {
      let params = this.address;
      if (this.address.is_default === false) {
        params.is_default = 1;
      } else {
        params.is_default = 2;
      }
      address.address_save(params).then(res => {
        console.log(res);
        this.$router.go(-1);
      });
    },
    save_address() {
      let params = this.address;
      address.address_save(params).then(res => {
        console.log(res);
        this.is_editor = !this.is_editor;
        this.init_address();
      });
    },
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.my-address {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $bgcolor;
  // padding-bottom: 120px;
  overflow: auto;
  h3 {
    padding: 30px 0 10px 20px;
  }
}
.address-content {
  flex: 1;
  // height:80%;
  li {
    // padding:10px 10px;
    // margin-bottom:10px;
    background-color: #fff;
    margin: 10px;
    height: 45px;
    border-radius: 5px;
    p {
      height: 100%;
      display: flex;      
    }
    span {
      line-height: 45px;
      font-size: 13px;
      padding: 0 20px 0 10px;
      color: #747474;
    }
    input {
      flex:1;
      border: none;
      height: 100%;
      line-height: 45px;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .switch-btn {
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        line-height: 45px;
        font-size: 14px;
        font-weight: bold;
        color: #000;
      }
    }
    background-color: $bgcolor;
    text-align: right;
  }
}
.add-btn {
  padding: 10px 0 10px 0;
  background-color: #fff;
  text-align: center;
  a {
    display: inline-block;
    width: 250px;
    height: 40px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
