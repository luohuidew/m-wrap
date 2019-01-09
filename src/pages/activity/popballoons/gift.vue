<template>
  <div id="activity-detail">
    <div class="detail-header">
      <img src="/static/img/popballoons/icon/MYRECORDS.png"
        alt>
    </div>
    <ul class="detail-info">
      <li v-for="(item,index) of tableData"
        :key="index">
        <div class="detail_box success"
          v-if="item.status===3">
          <div class="middle">
            <div class="info-img">
              <img :src="item.image">
            </div>
            <div class="info-text">
              <p>{{item.name}}</p>
              <p>{{item.lamp_num}} balloons</p>
              <p>End time：{{item.etime | dateServer}}</p>
              <p v-if="item.coupon_status==2"
                @click="to_coupon(item.id)"
                class="btn-jump">
                <img src="/static/img/popballoons/btn/btn-1MYCOUPON@2x.png"
                  alt>
              </p>
              <p v-else class="btn-jump">
                 Used !
              </p>
            </div>
          </div>
        </div>
        <div v-if="item.status===2"
          class="detail_box fail">
          <div class="middle">
            <div class="info-img">
              <img :src="item.image">
            </div>
            <div class="info-text">
              <p>{{item.name}}</p>
              <p>{{item.lamp_num}} balloons</p>
              <p>End time：{{item.etime | dateServer}}</p>
              <p class="btn-jump">
                <span>Times up!</span>
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="norecord"
        v-if="is_no">
        <img src="/static/img/popballoons/icon/Norecord@2x.png"
          alt>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {
      tableData: [],
      is_no: false
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.user_detail().then(res => {
        console.log(res);
        this.tableData = res.data;
        let temp_flag = this.tableData.some((item, index) => {
          return item.status === 2 || item.status === 3;
        });
        this.is_no = !temp_flag || res.data.length === 0;
        console.log(temp_flag);
        console.log(this.tableData);
      });
    },
    to_coupon(id) {
      console.log(id);
      this.$router.push({
        path: "/activity/popballoons/popballoons-download",
        query: {
          id: id
        }
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
#activity-detail {
  display: flex;
  min-height: calc(100% - 188px);
  flex-direction: column;
  width: 100%;
  flex: 1;
  // min-height: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 20px;
  z-index: 10;
  font-size: 0;
  // background: url("/static/img/christmas/icon/通用背景.jpg") no-repeat top
  //   center;
  // background-size: 100% 100%;
  .detail-header {
    text-align: center;
    padding-top: 14px;
    img {
      height: 28px;
      width: auto;
    }
  }
  .detail-info {
    flex: 1;
    min-height: calc(100% - 188px);
    overflow: auto;
    font-size: 12px;
    color: #16352f;
    // padding: 30px 0px;
    margin: 0 auto;
    li {
      margin-top: 30px;
      .success {
        background: url("/static/img/popballoons/coupon_box.png") no-repeat top
          center;
      }
      .fail {
        background: url("/static/img/popballoons/coupon_box.png") no-repeat top
          center;
      }
      .detail_box {
        background-size: 100% 100%;
        width: 302px;
        height: 132px;
        position: relative;
        margin: 0 auto;
        padding: 12px;
        .middle {
          display: flex;
          position: absolute;
          align-items: center;
          height: 119px;
          width: 90%;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          padding: 10px 0;
          .info-img {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            width: 100px;
            text-align: center;
            margin-left: 12px;
            img {
              height: 80%;
              width: auto;
            }
          }
          .info-text {
            flex: 1;
            margin-left: 10px;
            font-size: 12px;
            line-height: 14px;
            height: 100%;
            .btn-jump {
              margin-top: 10px;
              img {
                width: 95px;
                height: auto;
              }
            }
            p {
              padding-top: 5px;
              // position: relative;
            }
          }
        }
      }
    }
  }
  .norecord {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 86px;
    img {
      width: 117px;
    }
  }
}
</style>
