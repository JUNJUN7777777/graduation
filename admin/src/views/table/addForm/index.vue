<template>
    <div>
        <h2>添加房型</h2>
        <el-form ref="ruleForm" label-width="80px" :model="form" :rules="rules">
            <el-form-item label="房间类型" prop="type">
                <el-input placeholder="请输入房型" v-model="form.type"></el-input>
            </el-form-item>
            <el-form-item label="面积" prop="area">
                <el-input placeholder="请输入面积" v-model="form.area"></el-input>
            </el-form-item>
            <el-form-item label="是否有窗" prop="window">
                <el-radio v-model="form.window" label="有窗">有</el-radio>
                <el-radio v-model="form.window" label="无窗">无</el-radio>
            </el-form-item>
            <el-form-item label="价格(元)" prop="price">
                <el-input placeholder="请输入价格（元）" v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="折扣" prop="discount">
                <el-input placeholder="请输入大小" v-model="form.discount"></el-input>
            </el-form-item>
            <el-form-item label="床位数量" prop="amount">
                <el-input placeholder="请输入数量" v-model="form.amount"></el-input>
            </el-form-item>
            <el-form-item label="床位大小" prop="size">
                <el-input placeholder="请输入大小" v-model="form.size"></el-input>
            </el-form-item>
            <el-form-item label="剩余房数" prop="surplus">
                <el-input placeholder="请输入数量" v-model="form.surplus"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button type="info" @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
 
<script>
export default {
    name: "skuform",
    data() {
        return {
            form: {
                type: '',
                area: '',
                window: '有窗',
                price: '',
                discount: '',
                surplus: '',
                amount: '',
                size: '',
                is_delete: '0',
            },
            rules: {
                type: [
                    { required: true, message: '请输入房型', trigger: 'blur' },
                ],
                area: [
                    { required: true, message: '请输入面积', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入价格', trigger: 'blur' }
                ],
                discount: [
                    { required: true, message: '请输入折扣', trigger: 'blur' }
                ],
                amount: [
                    { required: true, message: '请输入床位数量', trigger: 'blur' }
                ],
                size: [
                    { required: true, message: '请输入床位大小', trigger: 'blur' }
                ],
                surplus: [
                    { required: true, message: '请输入剩余房数', trigger: 'blur' }
                ],
            },
        }
    },
    inject: ["fatherMethod"],
    methods: {
        cancel() {
            this.$emit('changesScene', { scene: 0, flag: '' })
            //清理数据
            Object.assign(this._data, this.$options.data())
            this.$nextTick(() => {
                this.$refs['ruleForm'].clearValidate()
            })
            this.fatherMethod();
        },
        async save() {
            this.$refs.ruleForm.validate(async (success) => {
                if (success) {
                    let result = await this.$API.order.reqAddRoom(this.form)
                    if (result.code === 200) {
                        this.form = {
                            type: '',
                            area: '',
                            window: '有窗',
                            price: '',
                            discount: '',
                            surplus: '',
                            amount: '',
                            size: '',
                            is_delete: '0',
                        },
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            })
                        this.$emit('changesScene', { scene: 0, flag: '' })

                        this.fatherMethod();
                    }
                } else {
                    return false
                }
            })
        }
    }

}
</script> 

<style >
h2 {
    margin-top: 0;
    color: #75AC47;
}


.el-radio__input.is-checked .el-radio__inner {
    border-color: #75AC47;
    background: #75AC47;
}

.el-radio__input.is-checked+.el-radio__label {
    color: #75AC47;
}
</style>
 