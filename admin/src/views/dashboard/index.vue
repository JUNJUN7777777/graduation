<template>
  <div class="dashboard-container">
    <el-card class="box-card">
      <h3>欢迎管理员: <span>admin</span>!</h3>
      <!-- <el-button type="success">数据监控 </el-button> -->
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <p class="crawler">启动网络爬虫<i class="header-icon el-icon-info"></i></p>
          </template>
          <div class="row">从网页中提取了相关销售额等数据</div>
          <div class="row">并进行数据的清洗与预处理</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="box-card">
      <h3> <span>系统信息</span></h3>

      <div style="width: 100%;padding:10px">
        <table align="center" width="100%" class="">
          <tbody>
            <tr>
              <th colspan="10">毕设</th>
            </tr>
            <tr>
              <th>题目:</th>
              <th colspan="10">基于旅游酒店数据分析与可视化平台的设计与实现</th>
            </tr>
            <tr>
              <th>班级</th>
              <th>姓名</th>
              <th>制作时间</th>
            </tr>
            <tr>
              <th>计科20-1班</th>
              <th>梁显钧</th>
              <th>2024.03~2024.04</th>
            </tr>
          </tbody>
        </table>
      </div>

    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
    };
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {

  .box-card {
    margin: 40px 30px;
  }

  h2 {
    display: inline-block;
    margin-right: 20px;
    font-size: 20px;
  }

  h3 {
    font-size: 25px;
  }

  span {
    color: #75AC47;
  }

  .crawler {
    font-size: 20px;
    font-weight: 700;
  }

  .row {
    font-size: 15px;
    line-height: 35px;
    color: #686666;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    font-size: 20px;
    color: #BBE182;
    border: 1px solid #75AC47;
    padding: 8px;
    text-align: center;
  }


}
</style>
