<template>
    <div>
        <div class="container">
            <div class="news w">
                <p><span></span>正在预定</p>
            </div>
            <div class="former w wow fadeInUp">
                <h1 style="margin-bottom: 15px;">{{ this.form.type }}</h1>
                <el-form ref="ruleForm" :model="form" label-width="80px" :rules="rules">
                    <el-form-item label="入住人员" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phone">
                        <el-input v-model="form.phone"></el-input>
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
                            <el-date-picker v-model="time" type="daterange" align="right" unlink-panels
                                value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期"
                                end-placeholder="结束日期" @change="getDate">
                            </el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="是否会员">
                        <el-radio-group v-model="form.isMember">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-col :span="12">
                            <span>共{{ this.form.totalNight }}晚</span>
                        </el-col>
                        <el-col :span="12">
                            订单总共￥{{ this.form.totalPrice }}
                        </el-col>
                    </el-form-item>
                    <el-col :span="12">
                        <el-button type="danger" plain class="btn" @click="cancel">取消</el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button type="success" plain class="btn" @click="send">提交订单</el-button>
                    </el-col>
                </el-form>
            </div>
        </div>
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
    name: 'Pay',
    data() {
        return {
            time: '',
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
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }
                ],
                number: [
                    { required: true, message: '请输入数量', trigger: 'blur' }
                ],
                startTime: [
                    { required: true, message: '请选择时间', trigger: 'blur' }
                ],
            },

        };
    },
    beforeMount() {
        this.form.type = this.$route.params.type
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()
    },
    methods: {
        getDate(time) {
            this.form.startTime = time[0]
            this.form.endTime = time[1]
            this.form.totalNight = GetNumberOfDays(this.form.startTime, this.form.endTime)
        },
        cancel() {
            this.$router.push({
                path: '/hot',
            })
        },
        send() {
            this.$refs.ruleForm.validate(async (success) => {
                if (success) {
                    let result = await this.$API.reqAddOrder(this.form)
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
                            status: '1'
                        }
                        this.$message({
                            type: 'success',
                            message: '下单成功'
                        })
                        this.$router.push({
                            path: '/order',
                        })
                    }
                } else {
                    return false
                }
            })

        }
    },
    computed: {
        comTotalPrice() {
            return Number(this.$route.params.price) * Number(this.form.number) * Number(this.form.totalNight)
        }
    },
    watch: {
        'form': {
            handler(newVal, oldVal) {
                this.form.totalPrice = this.comTotalPrice
            },
            immediate: true,
            deep: true // 可以深度检测到 person 对象的属性值的变化
        }
    }

};
</script>

<style scoped lang="less">
.former {
    height: 470px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 7px 7px #c9dfbe;

    .num {
        .el-select {
            width: 1120px;
        }
    }

    .el-date-editor.el-input__inner[data-v-6800c137] {
        width: 1120px;
        margin: 0;
    }

    .btn {
        width: 90%;
    }
}
</style>