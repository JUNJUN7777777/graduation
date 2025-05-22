<template>
    <div class="container">
        <div class="detail w wow fadeInUp">
            <div class="pic_box">
                <div class="pic_left">
                    <div style="position: absolute; inset: 0px;"><img class="detail-headalbum_bigpicImg" alt="酒店图片"
                            src="/images/hot1.jpg"></div>
                    <div class="pic_collect">
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                    </div>
                </div>
                <div class="pic_right">
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot2.jpg">

                    </div>
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot3.jpg">

                    </div>
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot4.jpg">

                    </div>
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot5.jpg">

                    </div>
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot6.jpg">

                    </div>
                    <div class="item">
                        <img alt="酒店图片" src="/images/hot7.jpg">

                    </div>

                </div>
                <div class="text_box">
                    <div class="text_tit">
                        <h1>钧苑酒店</h1>
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                        <i class="el-icon-star-on" style="color: seagreen;font-size: 26px;"></i>
                    </div>
                    <div class="text_map">
                        <i class="el-icon-position" style="color: seagreen;font-size: 16px;"></i>
                        <h3>桂林理工大学,广西</h3>
                        <router-link to="/map">查看位置</router-link>
                        <h4>酒店坐落于青山绿水间的精致住宿胜地，融合了现代豪华与传统文化的精髓，又一个迈向全球的卓越城市水岸。</h4>
                    </div>
                    <div class="map">
                        <div class="map_pic">
                            <img src="images/map.png" alt="">
                        </div>
                        <ul class="position">
                            <div class="clearfix">
                                <li>
                                    <i class="iconfont icon-lvxing" style="color: seagreen;font-size: 20px;"></i>
                                    <span>45.02公里</span>
                                </li>
                                <li>
                                    <i class="iconfont icon-dongche_" style="color: seagreen;font-size: 20px;"></i>
                                    <span>25.72公里</span>
                                </li>
                                <li>
                                    <i class="iconfont icon-bus-alt" style="color: seagreen;font-size: 20px;"></i>
                                    <span>100米</span>
                                </li>
                            </div>
                            <div class="address">
                                <h4> {{ this.placeAddress }} </h4>
                                <router-link to="/map">查看地图</router-link>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
        <div class="news w">
            <p><span></span>热门房型</p>
        </div>
        <div class="room w wow fadeInUp">
            <ul>
                <li v-for="(item, index) in this.list" :key="index">
                    <div class="hotel pic pic-scale">
                        <img src="images/酒店内.jpg" alt="">
                        <div class="essay">
                            <p>房型： {{ item.type }}</p>
                            <p>前台电话： 130-7864-7760</p>
                        </div>
                    </div>
                    <div class="specific">
                        <ul>
                            <li>
                                <i class="el-icon-s-home" style="color: seagreen;font-size: 20px;"></i>
                                房间面积:{{ item.area }}m²
                            </li>
                            <li>
                                <i class="el-icon-sunny" style="color: seagreen;font-size: 20px;"></i>
                                是否有窗:{{ item.window }}
                            </li>
                            <li>
                                <i class="el-icon-school" style="color: seagreen;font-size: 20px;"></i>
                                床位数量：{{ item.amount }}
                            </li>
                            <li>
                                <i class="el-icon-collection" style="color: seagreen;font-size: 20px;"></i>
                                床铺大小:{{ item.size }}
                            </li>
                            <li>
                                <i class="el-icon-success" style="color: seagreen;font-size: 20px;"></i>
                                价格:￥{{ item.price }}
                            </li>
                            <li>
                                <i class="el-icon-message-solid" style="color: seagreen;font-size: 20px;"></i>
                                折扣:{{ item.discount }}%
                            </li>
                            <li>
                                <i class="el-icon-edit-outline" style="color: seagreen;font-size: 20px;"></i>
                                剩余数量:{{ item.surplus }}
                            </li>
                            <li>
                                <a>
                                    <el-button type="success" plain :disabled="item.surplus == 0 ? true : false"
                                        @click="goPage(item)">
                                        立即预定
                                    </el-button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>

        </div>
    </div>
</template>

<script>

export default {
    name: 'hot',
    data() {
        return {
            placeAddress: '',
            list: ""
        };
    },
    methods: {
        async getPageList() {
            let result = await this.$API.reqRoomList()
            if (result.code === 200) {
                this.list = result.data
            }

        },
        goPage(item) {
            this.$router.push({ name: 'pay', params: { type: item.type || undefined, price: item.price || undefined } })
        }
    },
    beforeMount() {
        this.placeAddress = this.$route.params.address
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()
        this.getPageList()

    },
};
</script>

<style scoped lang="less">
.detail {
    height: 320px;
    padding: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;

    .pic_box {
        width: 100%;
        display: flex;

        .pic_left {
            position: relative;
            width: 350px;
            height: 280px;
            display: inline-block;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;

            }
        }

        .pic_collect {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 16px;
            top: 16px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0 0px 8px 4px rgba(0, 0, 0, .13);
            cursor: pointer;
        }

        .pic_right {
            width: 250px;
            height: 280px;

            .item {
                margin: 0 0 5px 5px;
                width: 48%;
                float: left;
            }
        }

        .text_box {
            width: 500px;
            height: 280px;
            padding: 10px 0 0 30px;

            h1 {
                display: inline;
            }

            h3 {
                display: inline;
                line-height: 2;
                color: #978e8e;
            }

            h4 {
                color: #978e8e;
            }

            a {
                color: #75AC47;
                margin-left: 10px;

                &:hover {
                    color: #2E8B57;

                }
            }

            .map {
                margin-top: 10px;
                width: 500px;
                height: 200px;
                display: flex;

                .map_pic {
                    width: 150px;
                    height: 150px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    &:hover {
                        opacity: .6;
                        cursor: pointer;
                    }
                }

                ul li {
                    float: left;
                    margin-left: 20px;

                    span {
                        font-size: 14px;
                        color: #0f294d;
                        letter-spacing: 0;
                        text-align: left;
                        line-height: 18px;
                        margin-left: 2px;
                        cursor: pointer;
                        border-bottom: 1px dotted #0f294d;
                    }
                }

                .address {
                    margin: 20px 0 0 20px;
                    font-size: 16px;
                    color: #978e8e;
                }

                a {
                    margin: 0;
                }
            }

        }

    }

}

.room {
    background-color: #fff;
    padding: 20px 0;

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            width: 250px;
            height: 400px;
            margin: 0 0 38px 38px;
            box-shadow: 0px 0px 14px 6px #F0F9EB;

            .hotel {
                height: 200px;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }

                .essay {
                    position: absolute;
                    width: 100%;
                    bottom: 0px;
                    padding: 10px;
                    background: rgba(0, 0, 0, 0.5);
                    color: #fff;
                }

            }

            .specific {
                width: 250px;
                height: 200px;
                background-color: #eee;

                ul {

                    li {
                        box-shadow: 0 0 0 0;
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        width: 115px;
                        height: 40px;
                        margin: 5px;
                        border-bottom: 1px solid #75AC47;
                    }
                }
            }
        }
    }
}
</style>