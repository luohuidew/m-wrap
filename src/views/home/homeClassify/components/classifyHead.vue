<template>
    <ul class="classify-Lists-box">
        <li v-for="(item,index) in classifyLists" :key="index" @click="change_classify_bg(item.id)">
            <div :class="activeIndex == item.id?'circle-container':'container-bg'" >
                <div class="circle-con">
                   <img
                    :src="item.img_url"
                    alt="">
                </div>
            </div>
            <span>{{item.cat_name}}</span>
        </li>
    </ul>
</template>

<script>
import api from "@/api/classify";
export default {
    name: "",
    props: ['classId'],
    data(){
        return{
            classifyLists:[],
            activeIndex: this.classId,
        }
    },
    watch: {},
    computed: {},
    created() {
        this.init_data();
    },
    methods: {
        change_classify_bg(id){
           if (this.$route.path === '/home/index') {
               this.$router.push({
                   path: '/home/classify',
                   query:{
                        id: id
                   }
               })
           }
           this.activeIndex = id
           this.$emit("parentId",{id:id})
        },
         init_data() {   // 获取分类列表
            api.getCateList().then(res => {
               this.classifyLists = res.data;
            });
        },
    },
    components: {}
}
</script>

<style lang='scss' scoped>
   .classify-Lists-box {
       display: flex;
       flex-wrap: nowrap;
       overflow: auto;
       padding: 15px 0 0 15px;
        li {
           margin-left: 15px;
           display: flex;
           flex-direction: column;
           align-items: center;
            img {
                width: 60px;
                height: 60px;
                display: block;
                box-sizing: border-box;
                border-radius: 50%;
                }
            & > div {
                width: 68px;
                height: 68px;
                box-sizing: border-box;
                background: -webkit-linear-gradient(137deg, rgba(255,109,112,1), rgba(255,109,112,0.19));
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .circle-con {
                    width: 64px;
                    height: 64px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    border-radius: 50%;
                    img {
                        width: 60px;
                        height: 60px;
                        display: block;
                        box-sizing: border-box;
                        border-radius: 50%;
                   }
                }
            }
            .container-bg{
                background: #fff;
                display: flex;
                justify-content: center;
                align-items:  center;
            }
            &:nth-child(1) {
               margin-left: 0;
            }
            &:nth-last-child(1) {
               padding-right: 15px;
            }
            span {
                text-align: center;
                font-size: 12px;
                margin-top: 10px;
            }
        }
    }
</style>
