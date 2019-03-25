<template>
    <div class="type-store">
        <div class="head">
            <div class="nav">
                <img src="@/assets/img/elements/goods001.png" alt="">
                <div class="title">
                    <p class="name">Amour</p>
                    <p class="des">InfuencerStore</p>
                </div>
            </div>
        </div>
        <div class="prduc">
            <span class="num"> Products: 458 </span>
            <span class="btn"> Visit Store </span>
        </div>
        <div class="good-list">
            <ul>
                <li>
                    <img src="@/assets/img/elements/goods001.png" alt="">
                    <p>$28</p>
                </li>
                <li>
                    <img src="@/assets/img/elements/goods001.png" alt="">
                    <p>$28</p>
                </li>
                <li>
                    <img src="@/assets/img/elements/goods001.png" alt="">
                    <p>$28</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: "",
  data() {
    return {
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      // coupon.coupon({ status: 2 }).then(res => {
      //   this.coupon_list = res.data;
      //   this.is_checked = this.$store.state.order_detail.is_selected_couponid;
      // });
    },
  },
  components: {

  }
};
</script>

<style lang='scss' scoped>
    .type-store {
        width: 245px;
        margin: 15px auto;
        border-radius: 7px;
        box-shadow: 0px 0px 2px #ccc;
        .head{
            height: 68px;
            background:rgba(243,243,243,1);
            display: flex;
            align-items: center;
        }
        .nav {
            display: flex;
            width: 100%;
            height: 48px;
            .title{
                display: inline-block;
                height: 48px;
                margin-top: 7px;
                line-height: 20px;
                margin-left: 20px;
                /*background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));*/
                .name {
                    font-size:12px;
                    font-weight:bold;
                    color:rgba(0,0,0,1);
                }
                .des {
                    color: #F5576C;
                    font-size: 10px;
                    -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
                    -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
                    background-image:linear-gradient(42deg,rgba(114,135,241,1) 0%,rgba(223,96,185,1) 100%);
                }
            }
            img{
                margin-left: 10px;
                height: 48px;
                width: 48px;
                border-radius: 50%;
                display:inline-block;
            }

        }
        .prduc{
            height: 40px;
            .num {
                float: left;
                margin-left: 10px;
                line-height: 40px;
                font-size:12px;
                color:rgba(0,0,0,1);
            }
            .btn {
                display: block;
                float: right;
                line-height: 20px;
                padding: 0px 10px ;
                font-size: 10px;
                height: 20px;
                padding-bottom: 10px;
                text-align: center;
                margin: 10px;
                border-radius: 10px;
                border:1px solid rgba(243,243,243,1);
            }
        }
        .good-list {
            ul{
                width: 100%;
                li{
                    float: left;
                    margin-left: 10px;
                    width: 68px;
                    img {
                        width: 68px;
                        height: 68px;
                    }
                    p{
                        font-size:10px;
                        color:rgba(155,155,155,1);
                        line-height: 20px;
                        padding-bottom: 10px;
                        padding-left: 3px;
                    }
                }
                &:after{
                    display: block;
                    clear: both;
                    content: '';
                }
            }
        }
    }
</style>
