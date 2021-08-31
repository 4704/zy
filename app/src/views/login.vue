<template>
    <div class="a">
        <router-view></router-view>
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
<style lang="scss" scoped>
.a{
    width: 100%;
    height: 100%;
}
</style>
