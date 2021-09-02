<template>
    <div class="box">
        <img :src="list.thumb_img" alt="">
        <div class="bu">
            <p>{{list.title}}</p>
            <div class="yu">
                <span>{{list.click_rate}}次预览</span>
                <span>{{list.created_at}}</span>
            </div>
            <div class="zw">
            {{list.description}}

            <br>

            -------------------
            </div>
            <div v-html="list.content" style="font-size:18px" class="n">
            
            </div>
        </div>
    </div>
</template>
<script>
    import {
        detal
    } from '@/http/api'
    export default {
        data() {
            return {
                id: "",
                list: []
            }
        },
        async created() {
            // console.log(this.$route.query.id);
            this.id = this.$route.query.id

            let {
                data: res
            } = await detal({
                information_id: this.id
            })
            // console.log(res);
            this.list = res
            console.log(this.list);
        },

    }
</script>
<style lang="scss" scoped>
    .box {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 400px;
        }

        .bu {
            p {
                font-size: 25px;
                margin-left: 25px;
            }
            .yu{
                color: #999;
                display: flex;
                justify-content: space-between;
                margin-left: 25px;
                margin-top: 10px;
                margin-right: 20px;
            }
            .zw{
                text-align: center;
                color: #999;
                font-size: 20px;
                margin-top: 25px;
            }
        }
        .n{
            margin-top: 50px;
        }
    }
</style>