<template>
  <common-echarts :option="option" ref="echarts" :height="600"></common-echarts>
</template>

<script>
import CommonEcharts from "./echarts";

export default {
  name: "RadarEcharts",
  components: {
    CommonEcharts,
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
          subtext: "雷达图",
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
  data() {
    return {};
  },
  methods: {
    refresh() {
      console.log("option:", this.option);
      this.$nextTick(this.$refs.echarts.refresh);
    },
  },
};
</script>
