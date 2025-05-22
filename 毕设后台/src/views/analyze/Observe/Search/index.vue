<template>
    <el-card>
        <div slot="header" class="header">
            <div class="search-header">
                <span>线上热门搜索</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>酒店</el-dropdown-item>
                        <el-dropdown-item>民宿</el-dropdown-item>
                        <el-dropdown-item>宾馆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-row :gutter="10">
            <el-col :span="24">
                <LineCharts></LineCharts>
            </el-col>

        </el-row>
        <el-table :data="tableData" style="width: 100%;" border>
            <el-table-column label="排名" width="80" type="index">
            </el-table-column>
            <el-table-column prop="name" label="搜索关键字" width="150">
            </el-table-column>
            <el-table-column prop="amount" label="用户数" sortable>
            </el-table-column>
            <el-table-column prop="range" label="周涨幅" sortable>
            </el-table-column>
        </el-table>

    </el-card>
</template>
  
<script>
import * as echarts from "echarts"
import LineCharts from "./LineCharts"

export default {
    name: 'Search',
    components: { LineCharts },
    data() {
        return {
            tableData: [{
                no: 1,
                name: "酒店",
                amount: 15777,
                range: '17.1'
            }, {
                no: 2,
                name: "民宿",
                amount: 11477,
                range: '14.4'
            },
            {
                no: 3,
                name: "宾馆",
                amount: 10987,
                range: '16.8'
            },
            ]
        }
    },

}
</script>
  
<style lang="scss" scoped>
span {
    font-size: 20px;
    color: rgb(32, 29, 29)a8a;
}


.header {
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
}

.search-header {
    display: flex;
    justify-content: space-between;
}

.pagination {
    float: right;
}
</style>
