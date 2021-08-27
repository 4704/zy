<template>
    <div>
        <div class="boxx">
            <van-icon name="balance-list-o" />
            <!-- <input type="text" placeholder="搜索"> -->
            <el-input placeholder="搜索" suffix-icon="el-icon-search"></el-input>
            <i class="el-icon-mobile"></i>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item >

            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
// import {banner} from '@/http/api'
    export default {
        data() {
            return {

            }
        },
        // async created() {
        //     let res = await banner()
        //     console.log(res);
        // },
    }
</script>
<style>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }

    .van-icon {
        color: coral;
        font-size: 35px;
        margin-left: 13px;
    }

    .el-input__inner {
        width: 350px;
    }

    .el-icon-mobile {
        font-size: 35px;
        color: red;
    }

    .boxx {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>