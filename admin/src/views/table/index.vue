<template>
  <div class="contain">
    <el-card>
      <div v-show="scene == 0">
        <el-button type="success" icon="el-icon-plus" style="margin: 10px " @click="addForm">添加房型</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteTradeMark()">删除房型</el-button>
        <el-table style="width:100% " border :data="list" @selection-change="changeSel">
          <el-table-column prop="prop" width="55" type="selection" />
          <el-table-column prop="id" label="房号" width="80">
          </el-table-column>
          <el-table-column prop="type" label="床型" width="width">
          </el-table-column>
          <el-table-column prop="area" label="面积" width="width">
          </el-table-column>
          <el-table-column prop="amount" label="床位数量" width="width">
          </el-table-column>
          <el-table-column prop="window" label="是否有窗" width="width">
          </el-table-column>
          <el-table-column prop="surplus" label="剩余房间" width="width">
          </el-table-column>
          <el-table-column prop="size" label="床位大小" width="width">
          </el-table-column>
          <el-table-column prop="discount" label="折扣" width="width">
          </el-table-column>
          <el-table-column prop="price" label="单价" width="width">
          </el-table-column>
        </el-table>
      </div>
      <addForm v-show="scene == 1" @changesScene="changesScene"></addForm>
    </el-card>
  </div>
</template>

<script>
import addForm from './addForm'

export default {
  name: "menu2",
  data() {
    return {
      list: [],
      selectedIds: [],//序号
      scene: 0,//控制spu列表展示，

    }
  },
  components: { addForm },
  provide() {
    return {
      fatherMethod: this.getPageList,
    };
  },
  mounted() {
    // console.log(this.$API)
    this.getPageList()
  },
  methods: {
    async getPageList() {
      let result = await this.$API.order.reqRoomList()
      if (result.code === 200) {
        this.list = result.data
      }
    },
    //序号选择
    changeSel(e) {
      this.selectedIds = []
      e.map(item => {
        this.selectedIds.push(item.id)
      })
    },
    //切换表单
    changesScene({ scene, flag }) {
      this.scene = scene
    },
    //添加房型
    addForm() {
      this.scene = 1
    },
    deleteTradeMark(id) {
      // console.log(this.selectedIds)
      //删除 弹窗
      this.$confirm(`确定删除以下房型?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let result = await this.$API.order.reqDelRoom(this.selectedIds)
        if (result.code == 200) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getPageList()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
  }
}


</script> 

<style scoped>
.contain {
  padding: 30px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
