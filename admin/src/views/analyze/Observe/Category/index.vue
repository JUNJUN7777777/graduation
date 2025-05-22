<template>
    <el-card>
        <div slot="header" class="header">
            <div class="search-header">
                <span>线下能力对比</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>1号员工</el-dropdown-item>
                        <el-dropdown-item>2号员工</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="radar">
            <common-echarts :option="option" ref="echarts" :height="450"></common-echarts>
        </div>
    </el-card>
</template>
<script>
import CommonEcharts from "../../../visual/echarts";

export default {
    name: "RadarEcharts",
    components: {
        CommonEcharts,
    },
    data() {
        return {
            value: ''
        }
    },
    computed: {
        option() {
            let series = [
                {
                    name: "技能对比",
                    type: "radar",
                    data: [
                        { value: [45, 50, 30, 45, 50, 60], name: "1号员工" },
                        { value: [50, 45, 40, 50, 50, 55], name: "2号员工" },
                    ],
                },
            ];

            let radar = {
                name: {
                    textStyle: {
                        borderRadius: 3,
                        color: "#fff",
                        backgroundColor: "#999",
                        padding: [3, 5],
                    },
                },
                // 设置不同维度的名称和范围
                indicator: [
                    { name: "领导力", max: 50 },
                    { name: "沟通力", max: 60 },
                    { name: "执行力", max: 60 },
                    { name: "亲和力", max: 60 },
                    { name: "个人魅力", max: 60 },
                    { name: "架构力", max: 60 },
                ],
            };

            return {
                title: {
                    text: "员工技能对比情况",
                    left: "center",
                },
                legend: {
                    show: true,
                    orient: "vertical", // 图例列表的布局朝向
                    left: "left",
                    // data中的数据类型必须要为string
                    data: ["1号员工", "2号员工"],
                },
                radar,
                series: series,
            };
        },
    },
};
</script>
<style lang="scss" scoped>
span {
    font-size: 20px;
    color: rgb(32, 29, 29);
}

h3 {
    font-size: 25px;
    font-weight: bold;

}

.header {
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
}

.search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

