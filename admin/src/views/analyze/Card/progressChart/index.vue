<template>
    <div class="charts" ref="charts"> </div>
</template>
  
<script>
import * as echarts from "echarts"

export default {
    name: 'progressChart',
    mounted() {
        let lineCharts = echarts.init(this.$refs.charts)
        lineCharts.setOption({
            xAxis: {
                show: false,
                min: 0,
                max: 100
            },
            yAxis: {
                show: false,
                type: 'category'
            },
            series: [{
                type: 'bar',
                data: [78],
                barWidth: 10,
                color: 'orange',
                showBackground: true,
                backgroundStyle: {
                    color: "#eee"
                },
                label: {
                    show: true,
                    formatter: '|',
                    position: 'right'
                }
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
