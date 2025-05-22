<template>
    <div class="charts" ref="charts"></div>
</template>
  
<script>
import * as echarts from "echarts"

export default {
    name: 'Category',
    mounted() {
        let lineCharts = echarts.init(this.$refs.charts)
        lineCharts.setOption({
            title: {
                text: "软件下单",
                subtext: 3135,
                left: "58%",
                top: "center",
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                },
                subtextStyle: {
                    color: '#fff',
                },
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '10%',
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    color: '#fff',
                },
            },
            series: [
                {
                    name: '收益',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['60%', '50%'], // 调整饼图位置
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },

                    data: [
                        { value: 1248, name: '酒店直订' },
                        { value: 3135, name: '软件下单' },
                        { value: 1142, name: '电话预定' },
                        { value: 484, name: '广告搜索' },
                        { value: 300, name: '其他' }
                    ]
                }
            ]
        })
        lineCharts.on("mouseover", (params) => {
            const { value, name } = params.data
            lineCharts.setOption({
                title: {
                    text: name,
                    subtext: value
                }
            })
        })
        window.addEventListener('resize', function () {
            lineCharts.resize();
        });
    },

    data() {
        return {
            value: '全部渠道'
        }
    }
}
</script>
  
<style lang="scss" scoped>
.charts {
    margin-top: -20px;
    width: 100%;
    height: 250px;
}
</style>

