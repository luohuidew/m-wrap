<template>
    <div class="content">
        <SlideBar class="left"></SlideBar>
        <div class="right">
            <Goods></Goods>
        </div>
    </div>
</template>

<script>
    // import Category from "@/api/Category";
    import SlideBar from "./SlideBar";
    import Goods from "./Goods";

    export default {
        name: "",
        data() {
            return {
                type: 1
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
            SlideBar,
            Goods
        }
    };
</script>

<style lang='scss' scoped>
    .content {
        box-sizing: border-box;
        height: calc(100% - 44px);
        overflow: hidden;
        display: flex;
        .left{
            width: 100px;
            background:rgba(243,243,243,1);
        }
        .right {
            flex: 1;
            overflow-y: scroll;
            overflow-scrolling: touch;
        }
    }
</style>
