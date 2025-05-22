<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-tabs class="tab" v-model="activeName">
                    <el-tab-pane label="销售额" name="sale">
                    </el-tab-pane>
                    <el-tab-pane label="访问量" name="visit">
                    </el-tab-pane>
                    <el-row :gutter="10">
                        <el-col :span="19">
                            <div class="charts" ref="charts"></div>
                        </el-col>
                        <el-col :span="5">
                            <div class="article">
                                <h3>门店{{ title }}排名</h3>
                                <ul>
                                    <li v-for="(item, index) in list.orderRank" :key="index">
                                        <span class="rindex">{{ item.no }}</span>
                                        <span class="rvalueL">{{ item.name }}</span>
                                        <span class="rvalueR"> {{ item.money }}</span>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </el-tabs>
                <div class="right">
                    <!-- <span @click="setToday">今日</span>
                    <span @click="setWeek">本周</span>
                    <span @click="setMonth">本月</span> -->
                    <span @click="setYear">本年</span>
                    <el-date-picker v-model="date" value-format="yyyy-MM-dd" size="mini" type="datetimerange"
                        format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
        </el-card>
    </div>
</template>
  
<script>
import * as echarts from "echarts"
import dayjs from "dayjs"
import { mapState } from "vuex"
export default {
    name: 'Sale',
    data() {
        return {
            activeName: "sale",
            mycharts: null,
            date: ["2024-01-01", "2024-12-31"]
        }
    },
    methods: {
        // setToday() {
        //     const day = dayjs().format("YYYY-MM-DD")
        //     this.date = [day, day]
        // },
        // setWeek() {
        //     const start = dayjs().day(1).format("YYYY-MM-DD")
        //     const end = dayjs().day(7).format("YYYY-MM-DD")
        //     this.date = [start, end]
        // },
        // setMonth() {
        //     const start = dayjs().startOf('month').format("YYYY-MM-DD")
        //     const end = dayjs().endOf('month').format("YYYY-MM-DD")
        //     this.date = [start, end]
        // }   ,
        setYear() {
            const start = dayjs().startOf('year').format("YYYY-MM-DD")
            const end = dayjs().endOf('year').format("YYYY-MM-DD")
            this.date = [start, end]
        }
    },
    mounted() {
        this.mycharts = echarts.init(this.$refs.charts)
        this.mycharts.setOption({
            title: {
                text: this.title + "趋势"
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        110,
                        120,
                        90,
                        220,
                        175,
                        212,
                        192,
                        95,
                        88,
                        120,
                        250,
                        310
                    ],
                    color: 'yellowgreen'
                }
            ]
        })

    }
    ,
    computed: {
        title() {
            return this.activeName == "sale" ? "销售额" : "访问量"
        },
        type() {
            return this.activeName == "sale" ? "bar" : "line"
        },
        ...mapState({
            list: (state) => state.home.list
        })
    },
    watch: {
        title() {
            this.mycharts.setOption({
                title: {
                    text: this.title
                },
                xAxis: {
                    data: this.title == "销售额" ? this.list.orderFullYearAxis : this.list.userFullYearAxis
                },
                series: [
                    {
                        name: 'Direct',
                        type: this.type,
                        barWidth: '60%',
                        data: this.title == "销售额" ? this.list.userFullYear : this.list.orderFullYear,
                        color: 'yellowgreen'
                    }
                ]
            }
            )
        },
        list() {
            this.mycharts.setOption({
                title: {
                    text: this.title + "趋势"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.list.orderFullYearAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: this.list.orderFullYear,
                        color: 'yellowgreen'
                    }
                ]
            })
        }
    }
}
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

.box-card {
    margin-top: 10px;
}

.clearfix {
    position: relative;
    display: flex;
    justify-content: space-between;
}

.tab {
    width: 100%;
}

.right {
    position: absolute;
    right: 0;
}

.right span {
    margin: 0px 10px;
}

.charts {
    width: 100%;
    height: 350px;
}

ul {
    list-style: none;
    width: 100%;
    height: 300px;
    padding: 0;
}

ul li {
    height: 8%;
    margin: 20px 0;
}

ul li span {
    margin-right: 10px;
}

.rindex {
    float: left;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #BBE182;
    color: white;
    text-align: center;
    margin: 0 20px 0 -5px;
}

.rvalueL {
    float: left;
}

.rvalueR {
    float: right;
}
</style>
  