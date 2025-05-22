<template>
    <div class="charts" ref="charts"> </div>
</template>
  
<script>
import * as echarts from "echarts"
import { mapState } from "vuex"
export default {
    name: 'lineChart',
    data() {
        return {
            lineCharts: null,
        }
    },
    mounted() {
        this.lineCharts = echarts.init(this.$refs.charts)
        this.lineCharts.setOption({
            xAxis: {
                //隐藏X轴
                show: false,
                //防止就一条直线
                type: 'category'
            },
            yAxis: {
                //隐藏y轴
                show: false
            },
            series: [{
                type: 'line',
                data: [10, 7, 12, 17, 8, 10],
                //拐点去除
                itemStyle: {
                    opacity: 0,
                },
                lineStyle: {
                    color: "skyblue"
                },
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'skyblue'
                        },
                        { offset: 1, color: '#fff' }],
                        global: false
                    }
                }
            }],
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        })

    },
    computed: {
        ...mapState({
            list: (state) => state.home.list
        })
    },
    watch: {
        // list() {
        //     this.lineCharts.setOption({
        //         series: [
        //             {

        //                 data: this.list.orderFullYear,

        //             }
        //         ]
        //     })
        // }
    }
}
</script>
  
<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>
