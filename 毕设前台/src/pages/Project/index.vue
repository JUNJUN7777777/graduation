<template>
    <div class="container wow fadeInUp">
        <div class="yycg-2">
            <div class="box w clearfix">
                <div class="content">
                    <div class="icon">
                        <i class="el-icon-location-outline" style="color: seagreen;font-size: 50px;"></i>
                    </div>
                    <div class="msg">
                        <p>地址</p>
                        <span>{{ this.info.address }}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <i class="iconfont icon-bus-alt" style="color: seagreen;font-size: 50px;"></i>
                    </div>
                    <div class="msg">
                        <p>动车站</p>
                        <span>{{ this.info.train }}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="icon">
                        <i class="el-icon-s-promotion" style="color: seagreen;font-size: 50px;"></i>
                    </div>
                    <div class="msg">
                        <p>机场</p>
                        <span>{{ this.info.plane }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Project',
    data() {
        return {
            info: {}
        };
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()

    },
    methods: {
        async getHouseInfo() {
            let result = await this.$API.reqHouseInfo()
            if (result.code === 200) {
                //遍历循环
                var res = {}
                for (var key in result.data) {
                    res[key] = result.data[key];
                    this.info = res[key]
                }
            }
        }
    },
    mounted() {
        this.getHouseInfo()
    },
};
</script>

<style scoped>
.yycg-2 {
    background: url(@/../public/images/地图.png) center bottom no-repeat;
    background-size: 100% 70%;
    margin-top: 50px;
    padding-bottom: 170px;
}

.yycg-2 .box {
    background-color: #fefbf8;
    box-shadow: 0 10px 0.20px 0rem rgba(52, 52, 52, 0.2);
    border-radius: 10px;
}

.yycg-2 .box .content {
    width: 31%;
    float: left;
    text-align: center;
    border-right: 1px solid #eeeeee;
    height: 400px;
    padding: 0 10px;
}

.yycg-2 .box .content:last-child {
    border: none
}

.yycg-2 .box .content .icon {
    width: 50px;
    margin: 50px auto 0;
    height: 70px;
}


.yycg-2 .box .content .msg p {
    margin: 20px 0;
    font-size: 30px;
    color: #444444;
}

.yycg-2 .box .content .msg span {
    display: block;
    font-size: 22px;
    line-height: 35px;
    color: #444444;
}
</style>