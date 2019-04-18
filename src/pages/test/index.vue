<template>
  <div class="test">
    app获取token
    <a href="javascript:;"
      @click="get_token">点击获取</a>
  </div>
</template>

<script>
// 五角星J'AIME  Gold Star Hair Clip  5247149551417195
// 驼色毛衣Kiko's thread winter sweater 5471171920733542
// 白色毛衣HANNA'S CLOSET  turtle neck white sweater 5376477507792450
// 浅色牛仔裤KOS  Classic Mom Jeans  5264068769756269
// 驼色宝宝ICELAND COMT wide strap shoulder bag 5350429730702945
// 深色牛仔裤KOS Baggy Mom Jeans 5264198894441395
// 球鞋THE QUEEN OF SHOES   Warrior Debug Low Tops   5488893601843993


// 浅牛仔裤Kiko's irregular washed jeans 5472245016547129
// 深牛仔裤BAGUETTE  High Waisted Blue Jeans  5486207839336027
// 包BAGG  holiday woven bag 5385218861951447
// 上面t恤SPECIAL Bag Print T-Shirt 5418481513368300
// 耳环HANNA'S CLOSET golden cricle stars earrings 5384022624346841
// 下面t恤SPECIAL White rock band print T-shirt 5417774145753140


// 耳环MOI  Baroqueun sun stud earrings  5366996661771585
// 豹纹衬衫MAISON leopard print slik shirt 5411399427387604
// 牛仔裤MAISON light washed denim wide jeans  5411665026135715
// 包REDD Sneak Prints Crossbody Bag  4941954967644968
// 短裤HANNA'S CLOSET denim back zipper shorts  5383212721791454
// 吊带Disco girl leopard v-neck cami  5505003119776885


// 项链AOC  pearl cross necklace   4867254926698259
// 牛仔上衣Y.O.U Denim Off-the-shoulder Top 5027167889273242
// 西服上衣Office Hour 2 button striped suit set 5496658985189357
// 短裤MEET Denim Shorts 5132339416469270
// 帽子DISCOVE Decent Wool hat  5446435530893409
// 包Leather World  simple chain bag  5393847339386639
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    get_token() {
      if (this.$CM.is_weget()) {
      }
      let href_params = {
        type: 103,
        data: {}
      };
      let temp = this.$CM.weget_device_link(href_params);
      alert(temp);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
