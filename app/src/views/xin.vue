<template>
    <div>
        <div class="top_red">
            <div class="top">
                <div>
                    <img class="aa" src="http://120.53.31.103:84/uploads/avatar.jpg" alt="" />
                </div>
                <div class="top_two">
                    <span>{{ $store.state.nickname }}</span>
                    <p class="ee">积分：4</p>
                </div>
                <div>
                    <van-tag plain type="success">签到规则</van-tag>
                </div>
            </div>
            <div>
                <van-calendar row-height="70px" title="日历" :poppable="false" :show-confirm="false"
                    :style="{ height: '350px' }" />
            </div>
            <div class="good">
                <div class="good_top">
                    <span class="good_left">好课推荐</span>
                    <span class="good_right" style="color:gray">更多</span>
                </div>
                <div class="good_bottom">
                    <div class="hezi">
                        <img src="http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg"
                            alt="" class="img" />
                    </div>
                    <div class="good_right_zha">
                        <p>轮渣男的自我修养</p>
                        <p class="good_jifen">
                            <span style="color:red">1积分</span>
                            <span class="dui">去兑换</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="good">
                <div class="good_top">
                    <span class="good_left">好课推荐</span>
                    <span class="good_right" style="color:gray">更多</span>
                </div>
                <div class="good_bottom">
                    <div class="hezi">
                        <img src="http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg"
                            alt="" class="img" />
                    </div>
                    <div class="good_right_zha">
                        <p>VUE开发后台管理系统</p>
                        <p class="good_jifen">
                            <span style="color:red">1积分</span>
                            <span class="dui">去兑换</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="hot"></div>
        </div>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss" scoped>
    .top_two {
        margin-right: 50px;
        font-size: 16px;
        margin-top: 12px;
        margin-left: 12px;
    }

    .aa {
        width: 90px;
        height: 90px;
    }

    .van-calendar {
        box-shadow: 10px 10px 20px #999;
    }

    .top_top {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    .dui {
        width: 140px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid gray;
        text-align: center;
        color: gray;
    }

    .img {
        width: 200px;
        height: 150px;
    }

    .hot {
        width: 100%;
        height: 20px;
    }

    .good {
        width: 100%;
        margin-top: -15px;

        .good_bottom {
            display: flex;
            padding-left: 5px;
            padding-top: 10px;
            .hezi{
                width: 170px;
            }
            img{
                width: 70%;
                height: 125px;
            }
        }

        .good_right_zha {
            width: 60%;
            height: 100%;

            p {
                margin-bottom: 80px;
            }
        }

        .good_jifen {
            width: 100%;
            display: flex;
            justify-content: space-around;
            height: 50px;
            span{
                padding-top: 13px;
                box-sizing: border-box;
                padding-left: -5px;
            }
        }
    }

    .good_top {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .good_right::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%) rotate(45deg);
    }

    .good_left::after {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #e60012;
    }

    .van-calendar {
        width: 90%;
        margin: auto;
        border-radius: 25px;
    }

    .top_red {
        width: 100%;
        height: 450px;
        background: #e55965;
        padding-top: 50px;
        box-sizing: border-box;
    }

    .top {
        width: 80%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        color: white;
        margin-bottom: 100px;

        img {
            border-radius: 50%;
            width: 70px;
            height: 70px;
        }
    }

    .van-tag {
        border: 1px solid #999;
        border-radius: 10px;
        margin-top: 12px;
        font-size: 12px;
        width: 50px;
        height: 25px;
    }
    .ee{
        text-align: center;
    }
</style>