<template>
    <div class="charts" ref="charts"> </div>
</template>
  
<script>
import * as echarts from "echarts"

export default {
    name: 'barChart',
    mounted() {
        let lineCharts = echarts.init(this.$refs.charts)
        lineCharts.setOption({
            xAxis: {
                show: false,
                type: 'category'
            },
            yAxis: {
                show: false
            },
            series: [{
                color: '#EE4E54',
                type: 'bar',
                data: [10, 7, 17, 30, 10, 22, 33],
            }],
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        })
        window.addEventListener('resize', function () {
            lineCharts.resize();
        });
    }
}
</script>
  
<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>
