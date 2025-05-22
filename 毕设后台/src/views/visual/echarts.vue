<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div :id="unique_id" :style="style"></div>
</template>

<script>
import * as echarts from "echarts";

// 自定义主题：https://echarts.apache.org/zh/theme-builder.html
// import "@/theme/dark";

export default {
  name: "CommonEcharts",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
    id: {
      type: String,
      default: "main",
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 400,
    },
    renderer: {
      type: String,
      default: "canvas",
    },
  },
  computed: {
    unique_id() {
      // 避免被切换时，同时存在id名称一样的元素
      return this.id + new Date().getTime() + "_" + parseInt(Math.random() * 10000);
    },
    merge_option() {
      const { option, default_option } = this;

      return Object.assign(default_option, option);
    },
    style() {
      const { width, height } = this;

      return {
        width: width + "px",
        height: height + "px",
      };
    },
  },
  data() {
    return {
      default_option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
        textStyle: {
          color: "#0f0",
          fontWeight: "bolder",
          fontFamily: "Microsoft YaHei",
        },
        grid: {
          top: 100, // grid 组件离容器上侧的距离
          bottom: 100,
          width: "auto",
          height: "auto",
        },
        toolbox: {
          show: true,
          feature: {
            // 数据区域缩放。目前只支持直角坐标系的缩放
            dataZoom: {
              yAxisIndex: "none",
            },
            // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            dataView: { readOnly: false },
            // 图类型切换
            magicType: { type: ["line", "bar"] },
            // 配置项还原
            restore: {},
            saveAsImage: {},
          },
        },
      },
      myChart: null,
    };
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      // init(dom, theme, opts)
      // 渲染模式，支持'canvas'或者'svg'。参见:https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg/
      // theme可以传dark
      const { renderer } = this;
      this.myChart = echarts.init(document.getElementById(this.unique_id), null, {
        renderer, // "svg",
      });

      // 指定图表的配置项和数据
      // 文档：https://echarts.apache.org/zh/option.html#title
      // console.log("this.merge_option", this.merge_option);

      this.$nextTick(this.refresh);
    },
    refresh() {
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.merge_option);
    },
    getChart() {
      return this.myChart;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
h4 {
  font-size: 25px;
}
</style>
