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
        // 按月进行趋势分析
        let myChart = echarts.init(this.$refs.charts)
        var option = {

            tooltip: {
                trigger: 'axis',
            },
            grid: {
                x: 46,
                y: 30,
                x2: 30,
                y2: 40,
                borderWidth: 0
            },
            legend: {
                data: ['退订数', '订单数'],
                textStyle: {
                    color: "#e9ebee"
                }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: [
                        '1月',
                        '2月',
                        '3月',
                        '4月',
                        '5月',
                        '6月',
                        '7月',
                        '8月',
                        '9月',
                        '10月',
                        '11月',
                        '12月'
                    ],
                    //奇偶
                    // axisLabel: {
                    //     interval: 0
                    // }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    name: '退订数',
                    type: 'bar',
                    data: [10, 8, 13, 15, 12, 5, 20, 16, 15, 6, 16, 23],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '订单数',
                    type: 'bar',
                    data: [93, 82, 123, 90, 100, 102, 89, 130, 121, 98, 190, 203],
                    markPoint: {
                        data: [
                            { name: '月最高', value: 190, xAxis: 10, yAxis: 190 },
                            { name: '月最低', value: 123, xAxis: 2, yAxis: 123 },
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    },
    methods: {}
};
</script>

<style scoped>
.charts {
    width: 100%;
    height: 200px;
    margin-top: 20px;
}
</style>
