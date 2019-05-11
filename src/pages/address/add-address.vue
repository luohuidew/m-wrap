<template>
  <div class="my-address">
    <div class="form-content" v-show="!showState">
      <h3>Add Shipping Address</h3>
      <ul class="address-content">
        <li>
          <p><span>First Name</span><input type="text"
              v-model="address.first_name"></p>
        </li>
        <li>
          <p><span>Last Name</span><input type="text"
              v-model="address.last_name"></p>
        </li>
        <li>
          <p><span>Address</span><input type="text"
              v-model="address.address1"></p>
        </li>
        <li>
          <p><span>Address Line 2</span><input type="text"
              v-model="address.address2"></p>
        </li>
        <li>
          <p><span>City</span><input type="text"
              v-model="address.city">
          </p>
        </li>
        <li @click="goSelectState()">
          <p><span>State</span>
            <span class="state-selecet">
              <span>{{address.state?address.state:''}}</span>
              <img src="/static/images/icon/address/返回 小右@2x.png"
                alt=""
                srcset="">
            </span>
          </p>
        </li>
        <li>
          <p><span>Zip Code</span><input type="text"
              v-model="address.zipcode"></p>
        </li>
        <li>
          <p><span>Phone Number</span><input type="text"
              v-model="address.tel"></p>
        </li>
        <li class="switch-btn">
          <p>
            <span>Set as default address</span>
            <van-switch active-color="#D70E19"
              v-model="is_default" />
          </p>
        </li>
      </ul>
      <div class="add-btn">
        <a href="javascript:;"
          @click="go_back">DONE</a>
      </div>
    </div>
    <addressState class="state-box"
      v-show="showState"
      @select="changeState" />
  </div>
</template>

<script>
import address from "@/api/address";
import addressState from "@/components/address-state";
export default {
  name: "",
  data() {
    return {
      is_selected: 0,
      is_editor: false,
      showState: false,
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
        is_default: 1
      },
      is_default: false,
    };
  },
  created() {
    this.init_address();
  },
  mounted() {},
  computed: {},
  methods: {
    changeState(data) {
      this.address.state = data;
      this.showState = false;
    },
    selected_card(add_id, index) {
      this.is_selected = index;
      let data = add_id;
      this.$emit("change", data);
    },
    init_address() { // 获取编辑数据
      address.address_list().then(res => {
        const address_lists = res.data;
        if (this.$route.query.cur_index !== undefined) {
          let cur_index = this.$route.query.cur_index;
          for (let key in this.address) {
            this.address[key] = address_lists[cur_index][key];
          }
          this.is_default = this.address.is_default === 1 ? false : true;
        }

      });
    },

    goSelectState() {
      this.showState = true;
    },
    go_back() {
      let params = this.address;
      if (this.is_default === false) {
        params.is_default = 1;
      } else {
        params.is_default = 2;
      }
      address.address_save(params).then(res => {
        this.$router.go(-1);
      });
    }
  },
  components: {
    addressState
  }
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.state-box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  overflow: auto;
  z-index: 1000;
}
.my-address {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $bgcolor;
  // padding-bottom: 120px;
  // overflow: auto;
  .van-popup {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    transform: translate(0, 0);
  }
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
    .state-selecet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      color: #000;
      span {
        font-size: 14px;
        font-weight: bold;
      }
      img {
        height: 14px;
      }
    }
    input {
      flex: 1;
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
