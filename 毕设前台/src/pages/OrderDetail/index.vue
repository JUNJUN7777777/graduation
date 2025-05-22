<template>
    <div class="container ">
        <div class="news w wow fadeInUp">
            <p><span></span>订单详情</p>
        </div>
        <div class="order w  wow fadeInUp">
            <ul>
                <li>
                    <i class="el-icon-medal-1" style="color: seagreen;font-size: 20px;"></i>
                    订单序号:{{ this.detail.id }}
                </li>
                <li>
                    <i class="el-icon-user-solid " style="color: seagreen;font-size: 20px;"></i>
                    入住人员:{{ this.detail.name }}
                </li>
                <li>
                    <i class="el-icon-phone" style="color: seagreen;font-size: 20px;"></i>
                    联系方式:{{ this.detail.phone }}
                </li>
                <li>
                    <i class="el-icon-collection" style="color: seagreen;font-size: 20px;"></i>
                    房间类型:{{ this.detail.type }}
                </li>
                <li>
                    <i class="el-icon-school" style="color: seagreen;font-size: 20px;"></i>
                    房间数量:{{ this.detail.number }}
                </li>
                <li>
                    <i class="el-icon-caret-right" style="color: seagreen;font-size: 20px;"></i>
                    入住期间:{{ this.detail.startTime }} 到 {{ this.detail.endTime }}
                </li>

                <el-col :span="12">
                    <el-button type="danger" plain class="btn" @click="cancel">返回订单</el-button>
                </el-col>
                <el-col :span="12">
                    <el-button type="success" plain class="btn" @click="send">立即支付</el-button>
                </el-col>
            </ul>
        </div>
        <el-dialog :close-on-click-modal="false" title="支付" :visible.sync="dialogVisible">
            <div class="img">
                <img src="images/支付码.png" alt="" class="img">
            </div>
            <div slot="footer">
                <el-button type="danger" plain @click="close">取 消</el-button>
                <el-button type="success" plain @click="checkAdd">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            dialogVisible: false,
            detail: ''
        };
    },
    methods: {
        //取消订单
        cancel() {
            this.$router.push({
                path: '/order',
            })
        },
        //提交支付
        send() {
            this.dialogVisible = true
        },
        //关闭支付
        close() {
            this.dialogVisible = false
            this.$message.error('取消支付')

        },
        //确定支付
        async checkAdd() {
            let result = await this.$API.reqUpdateStatus(this.detail.id)
            if (result.code === 200) {
                this.$message({ type: 'success', message: '支付成功' })
                this.dialogVisible = false
                setTimeout(() => {
                    this.$router.push({
                        path: '/order',
                    })
                }, 1000)
            }

        }
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()

    },
    beforeMount() {
        this.detail = this.$route.params.item
        console.log(this.detail.id)
    },
};
</script>

<style scoped lang="less">
.img {
    width: 350px;
    height: 350px;
    margin: 0 auto;
}

.order {
    height: 300px;
    background-color: #fff;
    padding: 10px 20px 30px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 7px 7px #c9dfbe;

    ul li {
        font-size: 16px;
        line-height: 2.8;
    }

    .btn {
        width: 90%;
    }
}
</style>