<template>
    <div class="container">
        <div class="news w">
            <p><span></span>我的订单</p>
        </div>
        <div class="list w wow fadeInUp">
            <ul>
                <li v-for="(item, index) in list" @click="goPage(item)">
                    <div class="number">{{ item.id }}</div>
                    <div class="section">
                        <h2>{{ item.type }}</h2>
                        <p>预定日期:{{ item.startTime }} 到 {{ item.endTime }}</p>
                        <p>订单消费: <span>￥{{ item.totalPrice }}</span></p>
                    </div>
                    <div class="status" v-if="item.status == 0">
                        已支付
                    </div>
                    <div class="status on" v-else="item.status == 1">
                        未支付
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Order',
    data() {
        return {
            page: 1,
            limit: 10,
            list: ''
        };
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()
        this.getPageList()
    },
    methods: {
        async getPageList(pager = 1) {
            this.page = pager
            const { page, limit } = this
            let result = await this.$API.reqOrderList(page, limit)
            if (result.code === 200) {
                this.list = result.data
            }
        },
        goPage(item) {
            this.$router.push({ name: 'orderDetail', params: { item: item || undefined, price: undefined } })
        }
    }
};
</script>

<style scoped lang="less">
.list {
    ul li {
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 7px 7px #c9dfbe;
        margin-bottom: 20px;

        .number {
            width: 50px;
            height: 50px;
            background-color: #75AC47;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            margin: 0 20px;
        }

        .section {
            p {
                font-size: 16px;
                color: #9c9999;

                span {
                    font-weight: bold;
                    color: #666666;
                }
            }
        }

        .status {
            font-weight: bold;
            font-size: 20px;
            color: #000;
            background-color: #F0F9EB;
            padding: 10px;
            margin-left: 700px;

            &.on {
                background-color: rgba(218, 135, 149, .2);
            }
        }
    }
}
</style>