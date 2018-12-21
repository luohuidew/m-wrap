<template>
  <div id="home">
    <!-- <div class="search_nav">
        <div class="list_btn">
            <img src="@/assets/img/icon/aside_btn.png" alt="" srcset="">
        </div>
        <div class="home_title">
            <img src="@/assets/img/icon/home_logo.png" alt="" srcset="">
        </div>
        <div class="search_btn">
            <img src="@/assets/img/icon/search_btn.png" alt="" srcset="">
        </div>
     </div> -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <div class="tab_list">
        <ul>
            <li :class="item.name" v-for="(item,index) in route_list_footer" :key="index">
                <router-link :to="item.path">{{item.text}}</router-link>
            </li>
        </ul>
     </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      route_list_footer: [
        {
          path: "/home/weget",
          name: "weget",
          text: "WEGET"
        },
        {
          path: "/home/welog",
          name: "welog",
          text: "WELOG"
        },
        {
          path: "/home/me",
          name: "me",
          text: "ME"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" scope>
$color: #d70e19;
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search_nav {
  display: flex;
  height: 44px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  & > div {
    // height: 28px;
    min-width: 20px;
  }
}
.content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.tab_list {
  border-top: 1px solid #ccc;
  li {
    display: inline-block;
    width: 33.3%;
  }
  a {
    display: block;
    height: 66px;
    text-align: center;
    padding-top: 43px;
    color: #000;
    font-size: 13px;
    background: url(../../assets/img/icon/weget_b.png) no-repeat center 10px;
  }
  .active-route {
    color: $color;
  }
  .weget {
    a {
      background-image: url(../../assets/img/icon/weget_b.png);
    }
    .active-route {
      background-image: url(../../assets/img/icon/weget_r.png);
    }
  }
  .welog {
    a {
      background-image: url(../../assets/img/icon/welog_b.png);
    }
    .active-route {
      background-image: url(../../assets/img/icon/welog_r.png);
    }
  }
  .me {
    a {
      background-image: url(../../assets/img/icon/me_b.png);
    }
    .active-route {
      background-image: url(../../assets/img/icon/me_b.png);
    }
  }
}
</style>
