<template>
    <div class="courseDetail">
        <!-- 图片 -->
        <div class="courseDetail-box">
            <img class="box-img" :src="list.cover_img" alt="">
        </div>
        <!-- 课程描述 -->
        <div class="classms">
            <p style="font-size:5vw">{{list.title}}</p>
            <p style="color:#ccc;font-size:4vw">共 1 课时 | {{ list.sales_num }}人已报名</p>
            <p style="color:red;font-size:5vw" v-if="list.price == 0">免费</p>
            <p style="font-size:5vw" v-if="list.price != 0">{{ list.price/100 }}</p>
        </div>
        <!-- 售后详情 -->
        <div class="details">
            <div class="details-box">
                <p><span style="color:#ccc">服务：</span>课程售后</p>
                <p>详情
                    <van-icon name="arrow" />
                </p>
            </div>
        </div>
        <!-- 教学团队 -->
        <div class="team">
            <p class="team-p1">教学团队</p>
            <ul>
                <li v-for="(item,index) in sj" :key="index">
                    <img :src="item.avatar" alt="">
                    <p>{{item.teacher_name}}</p>
                </li>
            </ul>
        </div>

        <div class="boxbox"></div>

        <!-- tab切换栏 -->
        <van-tabs v-model="active" title-active-color="red" line-width="0px">
            <van-tab style="border-top:1px solid #ccc" title="课程介绍">
                <div class="kcjs">
                    <p class="kcjs-p">课程介绍</p>
                    <div class="kcjs-p2" v-html="list.course_details"></div>
                </div>
            </van-tab>
            <van-tab style="border-top:1px solid #ccc" title="课程大纲">
                <div class="kcjs">
                    <p class="kcjs-p">课程大纲</p>
                    <div style="display:flex">
                        <div class="kcdg-box"></div>
                        <p class="p23">试看</p>
                        <div class="kcjs-p2" v-html="list.periods_title"></div>
                    </div>
                </div>
            </van-tab>
            <van-tab style="border-top:1px solid #ccc" title="课程评价">
                <div class="kcjs">
                    <p class="kcjs-p">课程评论</p>
                    <div>
                        <van-empty description="暂无评论" />
                    </div>
                </div>
            </van-tab>
        </van-tabs>

        <div class="posflex">
            <van-button class="but" type="danger" block size="large">立即报名</van-button>
        </div>
    </div>
</template>
<script>
    import {
        courseInfo
    } from '@/http/api'
    export default {
        data() {
            return {
                id: "",
                list: [],
                sj: [],
                active: 0,
            }
        },
        async created() {
            this.id = this.$route.query.id;
            var res = await courseInfo(this.id)
            this.list = res.data.info
            this.sj = res.data.teachers
            // console.log(res);
            console.log(JSON.parse(JSON.stringify(this.list)));
            // console.log(JSON.parse(JSON.stringify(this.sj)));
            // console.log(this.list);
            //   console.log(this.id);
            //   this.getcouinfo()
            //   this.getpter()
        },
        // methods: {
        //     async getcouinfo(){
        //         let{data:res}=await courseInfo(this.id)
        //         console.log(res);
        //     }
        // },
    }
</script>
<style lang="scss" scoped>
    .courseDetail {
        width: 100vw;
        padding-bottom: 6vh;

        .courseDetail-box {
            width: 100%;
            height: 58.66667vw;
            background: #F0F2F5;

            .box-img {
                height: 58.66667vw;
            }
        }

        /*课程描述*/
        .classms {
            width: 100vw;
            padding: 4vw;
            line-height: 4.5vh;
            box-sizing: border-box;
        }

        .details {
            width: 100vw;
            padding: 5vw 0vw;
            background: #F0F2F5;
            box-sizing: border-box;

            .details-box {
                width: 100vw;
                display: flex;
                justify-content: space-between;
                padding: 0vw 4vw;
                line-height: 6vh;
                box-sizing: border-box;
                background: #FFFFFF;
            }
        }

        /*教学团队*/
        .team {
            width: 100vw;
            padding: 1.33333vw 2.66667vw;
            box-sizing: border-box;

            .team-p1 {
                font-size: 5vw;
                margin-top: 20px;

            }

            ul {
                display: flex;
                list-style: none;

                li {
                    flex: 1;
                    height: 24vw;
                    padding: 2.66667vw 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 10.4vw;
                        height: 10.4vw;
                        border-radius: 50%;
                    }
                }
            }
        }

        .boxbox {
            width: 100vw;
            height: 3vh;
            background: #F0F2F5;
        }

        /* tab切换栏*/
        .van-tabs {
            width: 100vw;

            .kcjs {
                width: 100vw;
                padding: 2vh;
                box-sizing: border-box;
                position: relative;

                .kcjs-p {
                    font-size: 4vw;
                }

                .kcjs-p2 {
                    font-size: 4vw;
                    margin: 2vw;
                }

                .kcdg-box {
                    width: 3vw;
                    height: 1.7vh;
                    border-radius: 50%;
                    background: red;
                    position: absolute;
                    top: 7vh;
                    left: 5vw;
                }

                .p23 {
                    width: 10vw;
                    height: 3vh;
                    color: white;
                    text-align: center;
                    line-height: 3vh;
                    background: red;
                    margin: 0 2vw;
                    margin-top: 1vh;
                    margin-left: 6vw;
                }
            }
        }

        /*固定定位确定按钮*/
        .posflex {
            position: fixed;
            bottom: 0px;
            left: 0px;
            width: 100vw;
            margin: auto;
            padding: 1vh 0;
            background: white;

            .but {
                width: 90vw;
                height: 6vh;
                border-radius: 5vw;
                margin: auto;
            }
        }
    }
</style>