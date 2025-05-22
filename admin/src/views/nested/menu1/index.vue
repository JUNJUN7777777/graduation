<template>
  <div>
    <el-card class="box-card">
      <div style="display: flex;  align-items: start;">
        <el-input v-model="inquire.clientName" placeholder="请输入会员名称" prefix-icon="el-icon-search"
          style="margin-right: 10px;width: 230px;" clearable @clear="search" @keydown.enter.native="search"></el-input>
        <el-input v-model="inquire.phone" placeholder="请输入手机号" prefix-icon="el-icon-search"
          style="margin-right: 10px;width: 230px;" clearable @clear="search" @keydown.enter.native="search"></el-input>
        <el-button icon="el-icon-search" type="success" plain @click="search">
          搜索
        </el-button>
        <div class="grade">
          <span class="font-span">级别</span>
          <el-select placeholder="请选择" style="width: 150px;" v-model="inquire.grade" @change="search">
            <el-option :label="c1.name" :value="c1.name" v-for="(c1, index) in list1" :key="c1.id"></el-option>
          </el-select>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table style="width:100% " border :data="list">
        <el-table-column type="index" prop="prop" label="序号" width="80px" align="center">
        </el-table-column>
        <el-table-column prop="clientName" label="会员名称" width="width">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="width">

        </el-table-column>
        <el-table-column prop="time" label="注册时间" width="width">
          <template slot-scope="{row,$index}">
            <span>{{ row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="grade" label="级别" width="width">
          <template slot-scope="{row,$index}">
            <el-tag type="primary">{{ row.grade }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="prop" label="操作" width="300px">
          <template slot-scope="{row,$index}">
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="showDialog">添加</el-button>
            <el-button type="warning" icon="el-icon-edit" size="mini" @click="updateTradeMark(row)">修改</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteTradeMark(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :current-page="page" :page-size="limit" :page-sizes="[3, 5, 10]" :pager-count="7"
        layout="prev, pager, next" :total="total" @current-change="getPageList" style="text-align:center;">
      </el-pagination>
    </el-card>

    <el-dialog :title="inquire.id ? '修改会员' : '添加会员'" :visible.sync="dialogFormVisible">
      <el-form :model="inquire" :rules="rules" ref="ruleForm">
        <el-form-item label="会员名称" label-width="100px" prop="clientName">
          <el-input autocomplete="off" v-model="inquire.clientName"></el-input>
        </el-form-item>
        <el-form-item label="手机号" label-width="100px" prop="phone">
          <el-input autocomplete="off" v-model="inquire.phone"></el-input>
        </el-form-item>
        <el-form-item label="注册时间" label-width="100px" prop="time">
          <el-date-picker v-model="inquire.time" type="datetime" placeholder="选择日期时间" align="right" format="yyyy-MM-dd"
            value-format="yyyy-MM-dd" :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="级别" label-width="100px" prop="grade">
          <el-select placeholder="请选择" style="width: 150px;" v-model="inquire.grade">
            <el-option :label="c1.name" :value="c1.name" v-for="(c1, index) in list1" :key="c1.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addOrUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      page: 1,
      limit: 7,
      total: 10,
      list: [],
      pic: '',
      //对话框显示
      dialogFormVisible: false,
      //提交的数据
      inquire: {
        clientName: "",
        phone: '',
        time: "",
        grade: ''
      },
      list1: [
        {
          id: 1,
          name: "至尊会员"
        },
        {
          id: 2,
          name: "VIP会员"
        },
        {
          id: 3,
          name: "普通会员"
        },
      ],

      rules: {
        clientName: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请选择时间', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请输入级别', trigger: 'blur' }
        ],
        // user_pic: [
        //   { required: true, message: '请选择品牌的图片', trigger: 'change' }
        // ]
      },
      //时间数据
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }
  },
  mounted() {
    // console.log(this.$API)
    this.getPageList()
  },
  methods: {
    search() {
      this.getPageList(1, this.inquire)
    },
    async getPageList(pager = 1, data) {
      this.page = pager
      const { page, limit } = this
      let result = await this.$API.manage.getClientInfo(page, limit, data)
      if (result.code === 200) {
        this.list = result.data
        this.total = result.total
      }

      // return Promise.reject(new Error(result.message));
    },
    showDialog() {
      this.dialogFormVisible = true
      this.inquire = {
        clientName: "",
        phone: '',
        time: '',
        grade: '',
        is_delete: 0
      }
    },
    cancel() {
      this.dialogFormVisible = false

      this.inquire = {
        clientName: "",
        phone: '',
        time: '',
        grade: '',
        is_delete: 0
      }
    },

    addOrUpdate() {
      this.$refs.ruleForm.validate(async (success) => {
        if (success) {
          this.dialogFormVisible = false
          let result = await this.$API.manage.reqUpdateClient(this.inquire)
          if (result.code === 200) {
            this.inquire = {
              clientName: "",
              phone: '',
              time: '',
              grade: '',
              is_delete: 0
            }
            this.$message({
              type: 'success',
              message: this.inquire.id ? '修改成功' : '添加成功'
            })
            this.getPageList(this.inquire.id ? this.page : 1)
          }
        } else {
          return false
        }
      })
    },
    deleteTradeMark(row) {
      //删除 弹窗
      this.$confirm(`确定删除${row.clientName}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let result = await this.$API.manage.reqDeleteClient(row.id)
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
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
      this.dialogFormVisible = true
      this.inquire = { ...row }
    }

  }
}


</script> 

<style >
.box-card {
  margin: 40px 30px;
}

.font-span {
  font-size: 15px;
  font-weight: bold;
  margin: 0 10px;
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

.grade {
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
