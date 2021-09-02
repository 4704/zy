<template>
    <div class="tabbar">
        <router-view></router-view>
        <div class="tabbar-box">
            <div class="box-item" v-for="(item,index) in list" :key="index" @click="tr(item,index)">
                <img class="item_img" :src="active == index? item.nav_img_checked:item.nav_img" />
                <p :style="active == index ? 'color:red' : ''">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        tabbar
    } from '@/http/api'
    export default {
        data() {
            return {
                list: [],
                active: 0
            }
        },

        async created() {
             const { data:res } = await tabbar();
        this.list = res.index
        },
        methods: {
            tr(item, index) {
                this.active = index
                this.$router.push(item.url)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabbar {
        width: 100vw;
        height: 100vh;
        position: relative;

        .tabbar-box {
            width: 100vw;
            height: 60px;
            position: fixed;
            bottom: 0px;
            left: 0px;
            display: flex;
            background: #ffffff;

            .box-item {
                flex: 1;
                text-align: center;

                .item_img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
</style>