<template>
    <div>
        <el-card class="box-card">
            <h2 style="display: inline-block; margin-right: 20px; font-size: 20px;">修改酒店信息:</h2>
            <el-button type="primary" plain icon="el-icon-edit" @click="addAttrValue">编辑</el-button>
            <el-button type="success" plain icon="el-icon-check" @click="addUpdateAttr">保存</el-button>
        </el-card>

        <el-card class="box-card">
            <el-form :model="info" :rules="rules" ref="ruleForm" label-width="100px" class="demo-info">
                <el-form-item label="管理人" prop="ceo" required>
                    <el-input v-model="info.ceo" :disabled="this.flag" ref="first"></el-input>
                </el-form-item>
                <el-form-item label="客服电话" prop="phone" required>
                    <el-input v-model="info.phone" :disabled="this.flag"></el-input>
                </el-form-item>
                <el-form-item label="酒店地址" prop="address" required>
                    <el-input v-model="info.address" :disabled="this.flag"></el-input>
                </el-form-item>
                <el-form-item label="车站路线" prop="train" required>
                    <el-input type="textarea" v-model="info.train" :disabled="this.flag"></el-input>
                </el-form-item>
                <el-form-item label="机场路线" prop="plane" required>
                    <el-input type="textarea" v-model="info.plane" :disabled="this.flag"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'Houseinfo',
    data() {
        return {
            info: {},
            flag: true,
            rules: {
                ceo: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                phone: [
                    { required: true, pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入酒店地址', trigger: 'blur' },
                ],
                train: [
                    { required: true, message: '请输入车站路线', trigger: 'blur' },
                ],
                plane: [
                    { required: true, message: '请输入机场路线', trigger: 'blur' },
                ]
            }
        };
    },
    mounted() {
        this.getList()
    },
    methods: {
        async getList() {
            let result = await this.$API.info.reqHouseInfo()
            if (result.code === 200) {
                //遍历循环
                var res = {}
                for (var key in result.data) {
                    res[key] = result.data[key];
                    this.info = res[key]
                }
            }
        },
        addAttrValue() {
            this.flag = false
            this.$nextTick(() => {
                this.$refs.first.focus()
            })
        },
        //保存按钮
        async addUpdateAttr() {
            this.$refs.ruleForm.validate(async (success) => {
                if (success) {
                    this.flag = true
                    let result = await this.$API.info.reqUpdateClient(this.info)
                    if (result.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '更新信息成功!'
                        });
                        this.getList()
                    }
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style scoped>
.box-card {
    margin: 40px 30px;
}
</style>