<template>
    <div class="xq">
        <div class="title">
            <img :src="xq.avatar" alt="">
            <p>{{xq.real_name}}</p>
        </div>
        <div class="cont">
            <van-tabs>
                <van-tab class="aa" title="讲师介绍">
                    <p class="p">老师简介</p>
                    <p>{{xq.introduction}}</p>
                </van-tab>
                <van-tab title="主讲课程">
                    <div class="c1" v-for="(item,index) in list" :key="index" @click="gokcxq(item.id)">
                        <div class="c2">
                            <div class="c3">
                                <div>
                                    <img :src="item.cover_img" alt="">
                                </div>
                                <div class="c33">
                                    <p>{{item.title}}</p>
                                    <p>{{item.sales_num}}个人报名</p>
                                </div>
                            </div>
                            <div class="c4">
                                <p>{{item.price}}</p>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
    import {
        teacher,
        mainCourse
    } from "@/http/api";
    export default {
        data() {
            return {
                xq: [],
                id: "",
                list: []
            }
        },
        methods: {
            gokcxq(id) {
                this.$router.push({
                    path: '/kcxq',
                    query: {
                        id: id
                    }
                })
            }
        },
        async created() {
            this.id = this.$route.query.id;
            var res = await teacher(this.id);
            this.xq = res.data.teacher;
            // console.log(this.xq);
            var ress = await mainCourse({
                teacher_id: this.id
            })
            // console.log(ress);
            this.list = ress.data.list;
        },
    };
</script>
<style lang='scss' scoped>
    .xq {
        height: 100%;
        width: 100%;

        .title {
            display: flex;
            align-items: center;
            margin: 20px;
            p{
                font-size: 20px;
            }

            img {
                height: 80px;
                width: 80px;
                border-radius: 50px;
            }

            p {
                margin-left: 20px;
            }
        }
    }

    .cont {
        .aa {
            margin-left: 60px;
            margin-top: 30px;

            .p {
                color: #999;
            }
        }
    }

    .c2 {
        display: flex;
        align-items: center;
        margin: auto;
        height: 80px;
        width: 330px;
        border-radius: 10px;
        background: #fff;
        margin: 20px;

        .c3 {
            display: flex;
            align-items: center;

            img {
                height: 75px;
                width: 115px;
            }

            .c33 {
                margin-left: 20px;

                p:first-child {
                    font-size: 16px;
                    margin-bottom: 15px;
                }

                p:last-child {
                    color: gray;
                }
            }
        }

        .c4 {
            margin-left: 70px;
            color: red;
        }
    }
</style>