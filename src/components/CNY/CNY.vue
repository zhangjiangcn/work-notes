<template>
    <div class="wrap">
        <van-tabs color="#1989fa" v-model="active">
            <van-tab title="表格展示" name="table">
                <Table></Table>
            </van-tab>
            <van-tab title="列表展示" name="list">
                <List></List>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Table from "./Table"
    import List from "./List"
    import {Tabs,Tab} from "vant"


    export default {
        name: "CNY",
        data(){
            return {
                active: 0,
            }
        },
        components: {
            Table,
            List,
            [Tabs.name]: Tabs,
            [Tab.name]: Tab
        }
    }
</script>

<style lang="less" scoped>
    @import "node_modules/vant/es/style/var.less";

    .wrap {
        padding: 15px 0;
    }

    .title {
        text-align: center;
        color: @green;
        font-size: 16px;
    }

    /deep/ .van-tabs__nav{
        background-color: @background-color;
     }

</style>
