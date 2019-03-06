<template>
  <div class="cart-guide">
    <h2>猜你喜欢</h2>
    <ul>
      <li v-for="(item,index) in req_data"
        :key="index">
        <sale-list :card-data="item"
          class="sku-item"></sale-list>
      </li>
    </ul>
  </div>
</template>

<script>
import saleList from "@/components/card-column-auto";
export default {
  name: "",
  data() {
    return {
      req_data: [
        {
          id: 1794,
          sku_id: 4821668026942782,
          title: "Yves Saint Laurent Touche Éclat Cushion Compact Foundation",
          cover_img:
            "https://we-get.s3.us-west-1.amazonaws.com/12647675945c4ff49ad9641.jpg",
          market_price: "48.00",
          alone_price: "48.00",
          group_price: "45.60",
          money_unit: "$",
          mask_icon: "",
          mask_info: {
            mask_type: 3,
            mask_title: "",
            mask_bg_image:
              "https://we-get.s3.us-west-1.amazonaws.com/226232435c4a86adc48d6.png"
          },
          show_tag: [],
          bought_user: [
            {
              username: "亚飞 贺",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/18298179705c6d131a7cfb3.png"
            },
            {
              username: "Abel He",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/18695443665be641a384f25.jpg"
            },
            {
              username: "a bbb",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg"
            },
            {
              username: "ronejomerrell",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/EVmn34Nn_bigger.jpg"
            },
            {
              username: "Jason_Reyes15",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/vmLIdaek_bigger.jpg"
            },
            {
              username: "侯剑波",
              photo:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=120929372255549&height=50&width=50&ext=1553228304&hash=AeTrm0HqwBNbCHLF"
            },
            {
              username: "lesantos0245",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/ses3do0o_bigger.jpg"
            },
            {
              username: "David Qiu",
              photo:
                "https://lh6.googleusercontent.com/-ixiJXkTKwn4/AAAAAAAAAAI/AAAAAAAAAIY/_qOdCa7siaA/s200/photo.jpg"
            },
            {
              username: "KSheler13",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/H7P6d2lM_bigger.jpg"
            },
            {
              username: "hun jjs",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg"
            }
          ],
          bought_num: 57,
          group_buy_info: {
            group_id: 3929,
            username: "ronejomerrell",
            photo:
              "https://we-get.s3.us-west-1.amazonaws.com/EVmn34Nn_bigger.jpg",
            left_num: 1,
            left_time: 49671,
            sku_id: 4821668026942782
          }
        },
        {
          id: 1793,
          sku_id: 4821680334575430,
          title: "Clé De Peau Beauté Correcting Cream Veil \n",
          cover_img:
            "https://we-get.s3.us-west-1.amazonaws.com/3699154085c4fd0f47f0c5.jpg",
          market_price: "80.00",
          alone_price: "80.00",
          group_price: "76.00",
          money_unit: "$",
          mask_icon: "",
          mask_info: {
            mask_type: 3,
            mask_title: "5% \nOFF",
            mask_bg_image:
              "https://we-get.s3.us-west-1.amazonaws.com/226232435c4a86adc48d6.png"
          },
          show_tag: [
            {
              mask_title: "hot",
              mask_type: 1,
              scale: 2.5,
              mask_bg_image:
                "https://we-get.s3.us-west-1.amazonaws.com/8899838845c4ab6432535b.png"
            },
            {
              mask_title: "new",
              mask_type: 2,
              scale: 2.5,
              mask_bg_image:
                "https://we-get.s3.us-west-1.amazonaws.com/9858559305c4ab6a12a1d6.png"
            },
            {
              mask_title: "discount",
              mask_type: 3,
              scale: 1,
              mask_bg_image:
                "https://we-get.s3.us-west-1.amazonaws.com/weget_discount_tag_5.png"
            }
          ],
          bought_user: [
            {
              username: "Abel He",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/18695443665be641a384f25.jpg"
            },
            {
              username: "a bbb",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg"
            },
            {
              username: "亚飞 贺",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/18298179705c6d131a7cfb3.png"
            },
            {
              username: "DavCarraretto",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/GZDnfR0v_bigger.jpg"
            },
            {
              username: "dale_bachman",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/4ar6CQla_bigger.jpg"
            },
            {
              username: "joncaasi",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/default_profile_bigger.png"
            },
            {
              username: "hun jjs",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg"
            },
            {
              username: "norathexploraaa",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/RW7kZJAP_bigger.jpg"
            },
            {
              username: "stevieelisehurd",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/mpuTXuJz_bigger.jpg"
            },
            {
              username: "theaurabella",
              photo:
                "https://we-get.s3.us-west-1.amazonaws.com/xscoWij6_bigger.jpg"
            }
          ],
          bought_num: 159,
          group_buy_info: {
            group_id: 3890,
            username: "DavCarraretto",
            photo:
              "https://we-get.s3.us-west-1.amazonaws.com/GZDnfR0v_bigger.jpg",
            left_num: 1,
            left_time: 54242,
            sku_id: 4821680334575430
          }
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.cart-guide {
  padding: 10px;
  background-color: #f3f3f3;
  h2 {
    font-size: 18px;
    padding: 10px 5px 10px;
  }
  li {
    display: inline-block;
    width: 50%;
    padding: 5px;
  }
}
.sku-item {
}
</style>
