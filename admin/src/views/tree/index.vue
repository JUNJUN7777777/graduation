<template>
  <div>
    <el-card class="box-card">
      <div style="display: flex;  align-items: start;">
        <el-input v-model="form.phone" placeholder="请输入手机号" prefix-icon="el-icon-search"
          style="margin-right: 10px;width: 230px;" clearable @clear="search" @keydown.enter.native="search"></el-input>
        <el-button icon="el-icon-search" type="success" plain @click="search">
          搜索
        </el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-button type="success" icon="el-icon-plus" style="margin: 10px " @click="showDialog">添加订单</el-button>
      <el-button type="danger" icon="el-icon-delete" @click="deleteTradeMark()" style="margin: 10px ">删除订单</el-button>

      <el-table style="width:100% " border :data="list" @selection-change="changeSel">
        <el-table-column prop="prop" width="55" type="selection" />
        <el-table-column prop="id" label="订单号" width="width">
        </el-table-column>
        <el-table-column prop="name" label="客户名称" width="width">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="width">
        </el-table-column>
        <el-table-column prop="startTime" label="入住时间" width="200">
          <template slot-scope="{row,$index}">
            <span>{{ row.startTime }}</span>
            到
            <span>{{ row.endTime }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="床型" width="width">
        </el-table-column>
        <el-table-column prop="number" label="数量" width="width">
        </el-table-column>
        <el-table-column prop="isMember" label="是否会员" width="width">
          <template slot-scope="{row,$index}">
            <el-tag type="success">{{ row.isMember }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="totalPrice" label="支付价格" width="width">
          <template slot-scope="{row,$index}">
            <el-tag type="primary">{{ row.totalPrice }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="prop" label="操作" width="width">
          <template slot-scope="{row,$index}">
            <el-button type="warning" icon="el-icon-edit" size="mini" @click="updateTradeMark(row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination :current-page="page" :page-size="limit" :page-sizes="[3, 5, 10]" :pager-count="7"
        layout="prev, pager, next" :total="total" @current-change="getPageList" style="text-align:center;">
      </el-pagination>
    </el-card>

    <el-dialog :title="form.id ? '修改订单' : '添加订单'" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="订单号" prop="id" v-show="this.form.id">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="入住人员" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="房间类型" prop="type">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <div class="num">
          <el-form-item label="房间数量" prop="number">
            <el-select v-model="form.number" placeholder="请选择数量">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="入住时间" prop="startTime">
          <el-col :span="11">
            <el-date-picker v-model="time" type="daterange" align="right" unlink-panels value-format="yyyy-MM-dd"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="getDate">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="是否会员">
          <el-radio-group v-model="form.isMember">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="共支付" prop="totalPrice">
          <el-input v-model="form.totalPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <span>共{{ this.form.totalNight }}晚</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" plain class="btn" @click="cancel">取消</el-button>
        <el-button type="success" plain class="btn" @click="send">提交订单</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//计算返回天数
function GetNumberOfDays(date1, date2) {
  //date1：开始日期，date2结束日期
  var a1 = Date.parse(new Date(date1));
  var a2 = Date.parse(new Date(date2));
  var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
  return day
};

export default {
  name: "",
  data() {
    return {
      page: 1,
      limit: 5,
      total: 10,
      list: [],
      selectedIds: [],//删除的序号
      //对话框显示
      dialogFormVisible: false,
      //提交的数据
      time: [],
      form: {
        type: '',
        name: '',
        phone: '',
        number: '1',
        startTime: '',
        endTime: '',
        isMember: '否',
        totalNight: '',
        totalPrice: '',
        is_delete: '0',
        status: '0'
      },
      rules: {
        name: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入数量', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择时间', trigger: 'blur' }
        ],
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
      this.getPageList(1, this.form)
    },
    async getPageList(pager = 1, data) {
      this.page = pager
      const { page, limit } = this
      let result = await this.$API.order.reqOrderList(page, limit, data)
      if (result.code === 200) {
        this.list = result.data
        this.total = result.total
      }
      // return Promise.reject(new Error(result.message));
    },
    //添加订单里面得时间
    getDate(time) {
      this.form.startTime = time[0]
      this.form.endTime = time[1]
      this.form.totalNight = GetNumberOfDays(this.form.startTime, this.form.endTime)
    },
    //序号选择
    changeSel(e) {
      this.selectedIds = []
      e.map(item => {
        this.selectedIds.push(item.id)
      })
    },
    showDialog() {
      this.dialogFormVisible = true
      this.form = {
        type: '',
        name: '',
        phone: '',
        number: '1',
        startTime: '',
        endTime: '',
        isMember: '否',
        totalNight: '',
        totalPrice: '',
        is_delete: '0',
        status: '1'
      }
    },
    cancel() {
      this.dialogFormVisible = false
      this.form = {
        type: '',
        name: '',
        phone: '',
        number: '1',
        startTime: '',
        endTime: '',
        isMember: '否',
        totalNight: '',
        totalPrice: '',
        is_delete: '0',
        status: '0'
      }
    },
    send() {
      this.$refs.ruleForm.validate(async (success) => {
        if (success) {
          this.dialogFormVisible = false
          let result = await this.$API.order.reqUpdateOrder(this.form)
          if (result.code === 200) {
            this.form = {
              type: '',
              name: '',
              phone: '',
              number: '1',
              startTime: '',
              endTime: '',
              isMember: '否',
              totalNight: '',
              totalPrice: '',
              is_delete: '0',
              status: '0'
            }
            this.$message({
              type: 'success',
              message: this.form.id ? '修改成功' : '添加成功'
            })
            this.getPageList(this.form.id ? this.page : 1)

          }
        } else {
          return false
        }
      })

    }
    ,
    deleteTradeMark() {
      // console.log(this.selectedIds)
      //删除 弹窗
      this.$confirm(`确定删除以下房型?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let result = await this.$API.order.reqDelOrder(this.selectedIds)
        console.log(result)
        if (result.code == 200) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getPageList(this.page)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    updateTradeMark(row) {
      this.time.push(row.startTime, row.endTime)
      this.dialogFormVisible = true
      this.form = { ...row }
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
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
