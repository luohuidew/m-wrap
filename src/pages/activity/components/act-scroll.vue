<template>
  <h3 class="success-user"
    v-if="activity_lists.length">
    <ul :class="{'scroll-hidden':!show_scroll_box}">
      <li>
        <img :src="activity_lists[show_index].photo"
          alt="">
      </li>
      <li>
        <p>{{activity_lists[show_index].nickname}} got {{activity_lists[show_index].nickname}} for FREE at {{ activity_lists[show_index].deal_time| timeDateServer }} </p>
        <!-- <p>{{}}</p> -->
      </li>
    </ul>
  </h3>
</template>

<script>
import api from "@/api/activity";
export default {
  name: "",
  data() {
    return {
      activity_lists: [],
      show_index: 0,
      random_time: 6000,
      show_scroll_box: false
    };
  },
  created() {
    this.get_user_activity_lists();
     this.random_show();
  },
  mounted() {
    // this.random_show();
  },
  methods: {
    get_user_activity_lists() {
      api.activity_list({ number: 10 }).then(res => {
        console.log(res);
        this.activity_lists = res.data.successList;
        // this.activity_lists = res.data;
       
      });
    },
    random_show() {
      // debugger;
      this.show_scroll_box = true;
      let end_timer = setTimeout(() => {
        this.show_index += 1;
        if (this.show_index > this.activity_lists.length - 1) {
          this.show_index = 0;
          this.get_user_activity_lists();
        }
        let temp_timer = setTimeout(() => {
          this.show_scroll_box = false;
          clearTimeout(temp_timer);
          return ;
        }, 3000);
        this.random_time = Math.ceil(Math.random() * 10) * 1000;
        clearTimeout(end_timer);
        // console.log(end_timer);
        // alert(typeof(end_timer));
        this.random_show();
        return ;
        // alert("外层");
      }, this.random_time);
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.success-user {
  position: fixed;
  display: flex;
  flex-direction: flex-end;
  right: 0;
  top: 10%;
  height: 50px;
  width: auto;
  max-width: 70%;
  z-index: 70;
  ul {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px 0 0 30px;
    transform: translateX(0);
    opacity: 1;
    // max-width: 70%;
    overflow: hidden;
    transition: all 0.6s;
  }
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    vertical-align: middle;
    font-size: 0;
    margin: 0 15px;
  }
  p {
    font-size: 12px;
    color: #fff;
    margin-right: 15px;
  }
  .scroll-hidden {
    // width: 0;
    // display: none;
    transform: translateX(100%);
    width: 0;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
