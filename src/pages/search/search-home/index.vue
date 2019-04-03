<template>
  <div class="search-home">
    <div class="aside-bar">
      <ul>
        <li :class="{'active':item.id===selectId}"
          v-for="(item,index) in asideData"
          :key="index"
          @click="select_cur_data(item.id)">
          <img :src="item.img_url"
            alt="">
          <span>{{item.cat_name}}</span>
        </li>
      </ul>
    </div>
    <div class="lists-box">
      <ul v-if="seconedLists">
        <li v-for="(item) in seconedLists"
          :key="item.id"
          @click="to_query_cate(item.id,item.cat_name)">
          <img :src="item.img_url"
            alt="">
          <p class="text-line-clamp-1">{{item.cat_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/search";
export default {
  name: "",
  data() {
    return {
      asideData: undefined,
      listsData: undefined,
      seconedLists: undefined,
      selectId: 0
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api
        .getFirstCategory()
        .then(res => {
          this.asideData = res.data;
          this.selectId = res.data[0].id;
          return this.selectId;
        })
        .then(res => {
          this.select_cur_data(res);
        });
    },
    select_cur_data(cur_id) {
      this.selectId = cur_id;
      let query_params = {
        cat_id: cur_id
      };
      api.getSecondCategory(query_params).then(res => {
        this.seconedLists = res.data;
      });
    },
    to_query_cate(cat_id, cat_name) {
      let path_params = {
        path: "/search/search-lists",
        query: {
          cat_id: cat_id,
          page_label: cat_name
        }
      };
      this.$router.push(path_params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.search-home {
  display: flex;
  height: 100%;
  font-size: 12px;
  padding-top: 6px;
  & > div {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
  .aside-bar {
    width: 100px;
    background-color: #f3f3f3;
    height: 100%;
    overflow: auto;
  }
  .lists-box {
    flex: 1;
    overflow: auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.3%;
        text-align: center;
        img {
          width: 70px;
          height: 70px;
        }
        p {
          width: 100%;
          padding: 10px;
        }
      }
    }
  }
}
/*  */
.aside-bar {
  li {
    display: flex;
    height: 80px;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    &.active {
      background-color: #fff;
    }
    img {
      height: 40px;
      width: 40px;
    }
    span {
    }
  }
}
</style>
