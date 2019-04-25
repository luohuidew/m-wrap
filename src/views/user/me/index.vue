<template>
  <div class="user-info">
    <user-card></user-card>
    <!-- <div  v-if="activitie_info" class="banner-sale">
      <a :href="activitie_info.route_url">
           <img :src="activitie_info.img_url"
        alt=""
        srcset=""> 
      </a>
     
    </div>    -->
    <premium v-if="goods_info.length" :goods_info=goods_info></premium>
  </div>
</template>

<script>
import userCard from "./user-card.vue";
// import bannerSale from "./me/banner-sale.vue";
import premium from "./premium.vue";
import { getToken } from "@/utils/auth";
import api from "@/api/user";
export default {
  name: "",
  data() {
    return {
      activitie_info: undefined,
      goods_info:[]
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.PersonalCenter({}).then(res => {
        console.log(res);
        this.$store.state.user = res.data.user_info;
        // setToken(res.data.token);
        this.activitie_info = res.data.activitie_info;
        this.goods_info = res.data.goods_info;
      });
    }
  },
  components: {
    userCard,
    // bannerSale,
    premium
  }
};
</script>

<style lang="scss" scoped>
.banner-sale {
  width: 100%;
  // height: 130px;
  margin-bottom: 23px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover；;
  }
}
</style>


