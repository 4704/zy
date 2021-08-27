<template>
    <div>
        <router-view></router-view>
        <!--<router-link to="/index">首页</router-link> -->
        <!-- <router-link to="/class">课程</router-link>
        <router-link to="/news">咨询</router-link>
        <router-link to="/book">图书</router-link>
        <router-link to="/my">我的</router-link> -->
        <Tabbar></Tabbar>
    </div>
</template>
<script>
    import Tabbar from '@/components/tabbar'

    export default {
        components: {
            Tabbar
        },
        data() {
            return {

            }
        },
        
    }
</script>
<style>

</style>