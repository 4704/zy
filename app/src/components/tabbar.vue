<template>
    <div class="box">
        <router-link v-for="(item, index) in list" :key="index" class="link" :to="item.url">
            <img :src="item.nav_img" alt="" class="icon"><br>
            <span> {{item.name}}</span>
        </router-link>
    </div>
</template>
<script>
    import { tabbar } from '@/http/api'
    export default {
        data() {
            return {
                list: []
            }
        },

        async created() {
            let { data: { data: { index}}} = await tabbar()
            // console.log(index);
            let lis = ['/index', '/class', '/news', '/book', '/my']
            index.forEach((element, key) => {
                element.url = lis[key]
            });
            this.list = index
        },
    }
</script>
<style>
    .box {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 70px;
        width: 100%;
        display: flex;
    }

    .box .link {
        flex: 1;
    }

    .icon {
        width: 60%;
        height: 40px;
    }

    .link {
        text-align: center;
    }

    .router-link-active {
        color: red;
    }
</style>