<template>
  <div>
    <h1>入门示例</h1>
    <common-echarts :option="option"></common-echarts>
  </div>
</template>

<script>
import CommonEcharts from "./echarts";

export default {
  name: "DemoEcharts",
  components: {
    CommonEcharts,
  },
  data() {
    return {
      // 指定图表的配置项和数据
      option: {
        title: {
          text: "ECharts入门示例",
          link: "https://echarts.apache.org/zh/option.html",
          // target: "blank",
          subtext: "副标题 \n 还支持换行哦",
          sublink: "https://echarts.apache.org/zh/option.html#title.sublink",
          left: "left", // 居中显示
          padding: 5,
          top: 0,
        },
        // 图列
        legend: {
          data: ["销量", "库存"],
          left: "center",
        },
        xAxis: {
          name: "商品种类",
          nameLocation: "center",
          nameGap: 20, // 坐标轴名称与轴线之间的距离
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {
          name: "销售数量",
          nameGap: 30,
          nameLocation: "center",
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "库存",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
};
</script>
