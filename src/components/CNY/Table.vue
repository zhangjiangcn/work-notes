<template>
    <div class="content">
        <table>
            <tr>
                <th>名称</th>
                <th>起止时间</th>
                <th>市场价</th>
            </tr>
            <template v-for="items in cnys">
                <tr v-for="item in items" :key="item.name">
                    <td class="item wrap" :class="item.color?item.color:''">
                        {{item.name}}
                    </td>
                    <td class="item nowrap" :class="item.color?item.color:''">
                        {{item.time}}
                    </td>
                    <td class="item nowrap" :class="item.color?item.color:''">
                        {{item.price}}
                    </td>
                </tr>
            </template>
        </table>
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
        components: {
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

    .text-first {
        color: #ff00e4 !important;
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

    table {
        margin: 10px auto 0;
    }

    table tr {
        td, th {
            padding: 6px;
            line-height: 1.2em;
            border: 1px solid @blue;
        }
    }

    .nowrap {
        white-space: nowrap;
    }

    .wrap{
        white-space: normal;
    }

    .name {
        color: @blue;
        font-size: 14px;
    }

</style>
