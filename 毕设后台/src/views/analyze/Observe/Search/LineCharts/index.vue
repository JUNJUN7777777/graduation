<template>
    <div>
        <div class="charts" ref="charts"></div>
    </div>
</template>

<script>
import * as echarts from "echarts"

export default {
    name: 'lineCharts',
    data() {
        return {
        };
    },
    mounted() {
        let lineCharts = echarts.init(this.$refs.charts)
        lineCharts.setOption({
            xAxis: {
                type: 'category',
                data: ['民宿', '宾馆', '酒店', '青旅', '客栈']
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1320],
                    type: 'line',
                    color: 'yellowgreen'
                }
            ],
            grid: {
                left: 50,
                top: 20,
                right: 20,
                bottom: 40
            }
        })
        window.addEventListener('resize', function () {
            lineCharts.resize();
        });
    },
    methods: {}
};
</script>

<style scoped>
.charts {
    width: 100%;
    height: 200px;
}
</style>