<template>
    <div class="content">
        <div class="item-wrap" v-for="(items,index1) in cnys" :key="index1">
            <div v-for="(item,index) in items" :key="index">
                <div class="c-item">
                    <div class="name text-color" :class="item.color?item.color:''">{{item.name}}</div>
                    <table>
                        <tr>
                            <td class="label">
                                起止:
                            </td>
                            <td class="item">
                                {{item.time}}
                            </td>
                        </tr>
                        <tr>
                            <td class="label">
                                市价:
                            </td>
                            <td class="item">
                                {{item.price}}
                            </td>
                        </tr>
                        <tr v-if="item.remark">
                            <td class="label">
                                备注:
                            </td>
                            <td class="item">
                                {{item.remark}}
                            </td>
                        </tr>
                    </table>
                </div>
                <van-divider v-if="items.length - 1 > index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {Panel, Divider} from 'vant'
    import {cnys} from "../../assets/cny-data.js"

    export default {
        name: "Table",
        data() {
            return {
                cnys
            }
        },
        components:{
            [Panel.name]: Panel,
            [Divider.name]: Divider
        }
    }
</script>

<style lang="less" scoped>
    @import "node_modules/vant/es/style/var.less";

    .content{
        padding: 10px 0;
    }

    /deep/ .van-divider {
        margin: 10px 10px;
        border-color: @gray-4;
    }

    .text-first {
        color: #ff00e4 !important;
    }

    .c-item {
        margin: 0 15px;
    }

    .label {
        white-space: nowrap;
        text-align: right;
        padding-right: 6px;
        color: @orange;
    }

    .item {
        color: @gray-8;
    }

    .item-wrap {
        margin: 10px 10px 20px;
        background-color: #fcfcfc;
        padding: 15px 0;
    }

    table tr td {
        padding-top: 6px;
        line-height: 1.2em;
    }

    .name {
        color: @blue;
        font-size: 14px;
    }

</style>
