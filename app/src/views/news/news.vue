<template>
    <div class="box">
        <van-tabs v-model="active" @change="chg">
            <van-tab title="全部" name="0">
                <div class="box-z">
                    <ul class="ul">
                        <li v-for="(item, index) in zb" :key="index" class="li">
                            <img :src="item.thumb_img" alt="">
                            <div class="aa">
                                <div class="desc">
                                    <p>{{item.title}}</p>
                                    <p class="p">{{item.description}}</p>
                                </div>
                                <div class="name">
                                    <p>
                                        <van-icon name="eye-o" />
                                        {{item.click_rate}}
                                    </p>
                                    <p class="sj">
                                        <van-icon name="underway-o" />
                                        2021/07/05 16:57
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p class="gd">没有更多了</p>
                </div>
            </van-tab>
            <van-tab :title="item.name" :name="item.id" v-for="(item, index) in list" :key="index">
                <template v-if="zb.length">
                <div class="box-z">
                <ul class="ul">
                        <li v-for="(item, index) in zb" :key="index" class="li">
                            <img :src="item.thumb_img" alt="">
                            <div class="aa">
                                <div class="desc">
                                    <p>{{item.title}}</p>
                                    <p class="p">{{item.description}}</p>
                                </div>
                                <div class="name">
                                    <p>
                                        <van-icon name="eye-o" />
                                        {{item.click_rate}}
                                    </p>
                                    <p class="sj">
                                        <van-icon name="underway-o" />
                                        2021/07/05 16:57
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p class="gd">没有更多了</p>
                </div>
                </template>
                <div v-else>
                <van-empty class="tu" 
                image="http://120.53.31.103:86/img/empty.0d284c2e.png"
                description="暂无咨询"
                >
                </van-empty>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import {
        classfy,
        qb
    } from '@/http/api'
    export default {
        data() {
            return {
                active: 0,
                list: [],
                zb: [],
                page: 1,
                limit: 10,
                classify_id: 0
            }
        },
        created() {
            this.getlist()
            this.getzb()
        },
        methods: {
            async getlist() {
                let {
                    data: res
                } = await classfy()
                // console.log(res);
                this.list = res
            },
            async getzb() {
                let {
                    data: res
                } = await qb({
                    page: this.page,
                    limit: this.limit,
                    classify_id: this.classify_id,
                })
                // console.log(res);
                this.zb = res.list

            },
            chg(e) {
                this.classify_id = e
                this.getzb()
                console.log(e);
            }
        },
    }
</script>
<style lang="scss" scoped>
    .box-z {
        width: 100%;
        height: 550px;
        background: #f1efef;
        margin-top: 5px;

        .li {
            display: flex;
            background: #ffffff;
            width: 350px;
            margin: 5px;
            margin: 15px auto;
            border-radius: 15px;
            height: 90px;
            margin-top: 5px;

            img {
                margin-left: 5px;
                margin-top: 5px;
                width: 100px;
                height: 80px;
                border-radius: 10px;
            }

            .aa {
                .desc {
                    margin-top: 12px;
                    font-size: 15px;
                    margin-left: 15px;

                    .p {
                        color: #999;
                        font-size: 12px;
                        margin-top: 9px;
                    }
                }

                .name {
                    margin-top: 12px;
                    font-size: 15px;
                    margin-left: 15px;
                    display: flex;

                    p {
                        font-size: 12px;
                        color: #999;
                    }

                    .sj {
                        font-size: 12px;
                        color: #999;
                        margin-left: 65px;
                    }
                }
            }
        }
    }

    .gd {
        text-align: center;
        color: #999;

    }
    .tu{
        margin: 90px auto;
        width: 190px;
        height: 100px;
    }
</style>