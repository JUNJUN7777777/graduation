<template>
  <div class="contain">
    <el-button type="success" icon="el-icon-plus" style="margin: 10px 0" @click="showDialog">添加管理员</el-button>
    <el-table style="width:100% " border :data="list">
      <el-table-column type="index" prop="prop" label="序号" width="80px" align="center">

      </el-table-column>
      <el-table-column prop="username" label="管理员" width="width">

      </el-table-column>
      <el-table-column prop="user_pic" label="头像" width="width">
        <template slot-scope="{row,$index}">
          <img :src="row.user_pic" alt="" style="width: 150px; height: 150px;">
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
        <template slot-scope="{row,$index}">
          <el-button type="warning" icon="el-icon-edit" size="mini" style="margin: 10px 0"
            @click="updateTradeMark(row)">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteTradeMark(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="page" :page-size="limit" :page-sizes="[3, 5, 10]" :pager-count="7"
      layout="prev, pager, next" :total="total" @current-change="getPageList" style="text-align:center;">
    </el-pagination>

    <el-dialog :title="tmForm.id ? '修改管理员' : '添加管理员'" :visible.sync="dialogFormVisible">
      <el-form :model="tmForm" :rules="rules" ref="ruleForm">
        <el-form-item label="管理员名称" label-width="100px" prop="username">
          <el-input autocomplete="off" v-model="tmForm.username"></el-input>
        </el-form-item>
        <el-form-item label="管理员头像" label-width="100px" prop="user_pic">
          <el-upload class="avatar-uploader" action="http://gmall-h5-api.atguigu.cn/admin/product/fileUpload"
            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="tmForm.user_pic" :src="tmForm.user_pic" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "menu2",
  data() {
    return {
      page: 1,
      limit: 3,
      total: 10,
      list: [],
      pic: '',
      //对话框显示
      dialogFormVisible: false,
      //手机品牌信息
      tmForm: {
        username: '',
        user_pic: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入管理员名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        user_pic: [
          { required: true, message: '请选择头像图片', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
    // console.log(this.$API)
    this.getPageList()
  },
  methods: {
    async getPageList(pager = 1) {
      this.page = pager
      const { page, limit } = this
      let result = await this.$API.manage.getUserinfo(page, limit)
      if (result.code === 200) {
        this.list = result.data
        this.total = result.total
      }

      // return Promise.reject(new Error(result.message));
    },
    showDialog() {
      this.dialogFormVisible = true
      this.tmForm = { username: '', user_pic: '', password: 111111, is_delete: 0 }
    },
    addOrUpdate() {
      this.$refs.ruleForm.validate(async (success) => {
        if (success) {
          this.dialogFormVisible = false
          let result = await this.$API.manage.reqUpdateManage(this.tmForm)
          if (result.code === 200) {
            this.$message({
              type: 'success',
              message: this.tmForm.id ? '修改成功' : '添加成功'
            })
            this.getPageList(this.tmForm.id ? this.page : 1)
          }
        } else {
          return false
        }
      })
    },
    deleteTradeMark(row) {
      //删除 弹窗
      this.$confirm(`确定删除${row.username}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let result = await this.$API.manage.reqDeleteManage(row.id)
        if (result.code == 200) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getPageList(this.list.length > 1 ? this.page : this.page - 1)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    updateTradeMark(row) {
      this.dialogFormVisible = true
      this.tmForm = { ...row }
    },
    handleAvatarSuccess(res, file) {
      this.tmForm.user_pic = res.data
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }

  }
}


</script> 

<style >
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
