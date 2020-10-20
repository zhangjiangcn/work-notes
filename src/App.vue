<template>
    <div id="app">
        <CNY></CNY>
    </div>
</template>

<script>
    import CNY from './components/CNY/CNY.vue'

    export default {
        name: 'App',
        components: {
            CNY
        }
    }
</script>

<style lang="less">
    @import "node_modules/vant/es/style/var.less";

    body {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: @background-color;
        min-height: 100vh;
    }
</style>
