<template>
    <div class="container ">
        <div class="carousel">
            <Carousel :list="carousel" :autoplay="true" />
            <div class="msg">
                <p><span>钧苑大酒店</span></p>
                <p>始于2001年</p>
                <p><i>给你最舒心的入住体验</i></p>
            </div>
        </div>

        <div class="home-about w wow bounceInUp">
            <div class="about clearfix ">
                <div class="title ">
                    <span>ABOUT US</span>
                    <p>关 / 于 / 钧 / 苑</p>
                </div>
                <div class="msg">
                    <!-- <div class="title">
                        <span>ABOUT US</span>
                        <p>关 / 于 / 松 / 柏</p>
                    </div> -->
                    <div class="content">
                        <p>钧苑酒店是一座坐落于青山绿水间的精致住宿胜地，融合了现代豪华与传统文化的精髓。我们的每一间客房都注重细节，以提供舒适和温馨的居住体验为宗旨。
                        </p>
                        <p>从优雅的客房到宽敞的套房，每一处空间都展现了钧苑独特的魅力和精湛的设计。酒店配备了先进的设施和设备，包括会议设施、餐饮场所和休闲娱乐设施，以满足商务和休闲旅客的各种需求。我们以热情周到的服务和个性化的关怀，为每一位宾客营造出难忘的入住体验。无论是商务洽谈还是度假放松，钧苑酒店都是您旅途中的理想选择，期待为您带来难忘的旅程。
                        </p>
                        <div class="more clearfix wow bounceInLeft">
                            <div>
                                <router-link to="/about">→</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="introduce wow bounceInUp">
                        <ul class="clearfix">
                            <li>
                                <p><i class="counter">8</i>+</p>
                                <span>多种套房款式</span>
                            </li>
                            <li>
                                <p><i class="counter">100</i>+</p>
                                <span>温馨舒适床位</span>
                            </li>
                            <li>
                                <p><i class="counter">10000</i>+</p>
                                <span>累计服务客户</span>
                            </li>
                            <li>
                                <p><i class="counter">30</i>+</p>
                                <span>优秀服务团队</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="environment wow bounceInUp">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <div class="pic pic-scale">
                                <img src="images/hot2.jpg" alt="">
                            </div>
                            <div class="title">
                                <p>客房服务</p>
                            </div>
                            <div class="description">
                                <p>提供24小时客房服务，包括清洁、床上用品更换、洗涤等，确保客房整洁舒适。</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="pic pic-scale">
                                <img src="images/hot4.jpg" alt="">
                            </div>
                            <div class="title">
                                <p>会员礼宾服务</p>
                            </div>
                            <div class="description">
                                <p>专业的礼宾团队随时为客人提供行李寄存、行李搬运、车辆停放等服务，让客人感受到贴心的关怀。</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="pic pic-scale">
                                <img src="images/hot3.jpg" alt="">
                            </div>
                            <div class="title">
                                <p>全程接送服务</p>
                            </div>
                            <div class="description">
                                <p>提供机场接送和城市内的交通接送服务，为客人提供便捷的出行体验。</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div class="index-mid wow bounceInUp">
            <img src="images/前台接待.jpg" alt="">
            <div class="index-mid-p ">
                <h3>钧苑会员俱乐部</h3>
                <p>在这里， <br />
                    我们关注您的每一项细微要求， <br />
                    尊重您的每一项个人喜好， <br />
                    努力为宾客提供“满意+惊喜”的服务和体验。
                </p>
                <router-link to="/member">
                    立即加入
                </router-link>
            </div>
        </div>
        <div>
            <!-- <div class=" wow flipInX">home</div> -->
            <div class=" wow bounceInUp w">
                <img src="images/房型1.jpg" alt="">
            </div>
            <div class=" wow bounceInUp w">
                <img src="images/房型2.jpg" alt="">
            </div>
            <div class=" wow bounceInUp w">
                <img src="images/房型3.jpg" alt="">
            </div>
            <div class=" wow bounceInUp w">
                <img src="images/房型4.jpg" alt="">
            </div>
        </div>
        <div class="check wow bounceInUp w">
            <div class="left pic pic-scale">
                <img src="images/酒店内.jpg" alt="">
                <div class="hotellogodiv">
                    <p>地址： 桂林市雁山区</p>
                    <p>电话： 0776-13078647760</p>
                </div>
            </div>
            <div class="right">
                <div class="name wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".2s" style="display:block">
                    <h3 class="font40">钧苑套房</h3>
                    <span class="font24"
                        style="margin-top:10px;display:block;font-family: normal;color:#1e1e1e;font-weight:bold; font-size: 25px;">加长长方形外观</span>
                </div>
                <div class="boat_ext_desc wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".4s">
                    加长款房型，中间部分为客厅，两端为卧室。<br>外壳长13m，宽7m，室内面积达72㎡。<br>作为住宿需求，室内高度为2.6m 。
                </div>
                <router-link to="/hot">
                    <div class="now">
                        立即入住
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

import $ from 'jquery'
import "../../assets/jquery-3.2.1.min.js"
import "../../assets/jquery.waypoints.min.js" //数字滚动插件
import "../../assets/jquery.countup.min.js"
$(document).ready(function () {
    //统计
    $('.counter').countUp({
        delay: 10,
        time: 3000
    });
})

export default {
    name: 'Home',
    data() {
        return {
            carousel: [
                {
                    "id": "1",
                    "imgUrl": "images/三亚.jpg"
                },
                {
                    "id": "2",
                    "imgUrl": "images/故宫.jpg"
                },
                {
                    "id": "3",
                    "imgUrl": "images/丽江.jpg"
                },
                {
                    "id": "4",
                    "imgUrl": "images/拉萨.jpg"
                }
            ],
            list: [],
        };
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()

        // this.$store.dispatch('getBannerList')
        // this.$store.dispatch('getFloorList')

        // axios.get('/city.json')
        //     .then((res) => {
        //         let data = res.data.data;
        //         console.log(data)
        //     })
        //     .catch((e) => { }) // 解决Uncaught (in promise)
    },
    methods: {}
};
</script>

<style scoped lang="less">
.container {


    .carousel {
        height: 600px;
        position: relative;

        .msg {
            position: absolute;
            top: 200px;
            left: 70%;
            width: 400px;
            height: 200px;
            background-color: rgba(0, 0, 0, 0.3);
            transform: translateX(-50%);
            text-align: center;
            color: #ffffff;
            z-index: 1;
            padding-top: 30px;

            p {
                font-size: 25px;
                font-weight: bold;

                span {
                    font-size: 35px;
                }

            }

            i {
                font-size: 25px;
                padding: 10px 15px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border: solid 5px #ffffff;
                margin: 10px auto 30px;
                display: inline-block;
                font-weight: lighter;
            }

        }
    }


    .home-about .about {
        margin-top: 50px;

        .title {
            width: 550px;
            height: 300px;
            float: left;
            background-color: #BBE182;
            opacity: .9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;

            span {
                font-size: 50px;
                font-weight: 700;
                transition: all .5s;
            }

            p {
                font-size: 25px;
                line-height: 25px;
                transition: all .5s;
            }

            &:hover p,
            &:hover span {
                transition: all .5s;
                transform: scale(1.2);
            }
        }


        .msg {
            width: 600px;
            height: 300px;
            float: right;
            background: url(https://www.fullcheer.cn/phpstyle/puqin_pc/img/about_msg_bg.png) left top no-repeat;
            /* background-size: 100%; */
            padding-left: 30px;

            .content {
                font-size: 16px;

                p {
                    text-indent: 2em;
                    line-height: 24px;
                    color: #333333;
                }
            }

            .more {
                width: 100px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border: solid 1px #bfbfbf;
                float: right;
                margin: 40px 0 0 400px;
                position: absolute;
                overflow: hidden;

                div {
                    transition: all .4s;

                    &::after {
                        content: '';
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: #C0E38C;
                        position: absolute;
                        left: -100%;
                        top: 0;
                        z-index: 1;
                        transition: all .4s;
                    }

                    &:hover::after {
                        position: absolute;
                        left: 0%;
                        transition: all .4s;
                    }

                }

                a {
                    font-size: 30px;
                    color: #bbbbbb;
                    display: block;
                    position: relative;
                    z-index: 3;

                }
            }

            .introduce ul li {
                margin: 40px 0 0 10px;
                float: left;
                text-align: center;

                p {
                    font-size: 20px;
                    color: #75AC47;
                }

                span {
                    font-size: 14px;
                    color: #222222;
                    display: block;
                }
            }
        }

    }

    .home-about .environment {
        margin-top: 50px;
        width: 1200px;
        height: 450px;

        ul li {
            width: 31%;
            float: left;
            margin-right: 30px;

            &:nth-child(3) {
                margin-right: 0px;

            }

            .pic img {
                height: 300px;
            }

            .pic img:hover,
            .pic.pic-scale img:hover {
                transform: scale(1.1);
                transition: all 1s;
            }

            .title {
                font-size: 25px;
                font-weight: bold;

                color: #222222;
                position: relative;

                &::after {
                    position: absolute;
                    top: 100px;
                    right: 0;
                    content: '';
                    display: block;
                    width: 30px;
                    height: 5px;
                    background-color: #bfbfbf;
                }

            }

            .description {
                font-size: 15px;
            }

            &:hover p {
                color: #75AC47;
            }

            &:hover .title::after {
                background-color: #75AC47;

            }
        }
    }

    .index-mid {
        position: relative;
        margin-top: 20px;

        .index-mid-p {
            max-width: 550px;
            position: absolute;
            left: 18.75%;
            top: 50%;
            transform: translate(0, -50%);
        }

        .index-mid-p>h3 {
            font-size: 36px;
            color: #75AC47;
            margin: 0;
            font-weight: bold;
            margin-bottom: 25px;
        }

        .index-mid-p>p {
            font-size: 14px;
            line-height: 30px;
            color: #ffffff;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
        }

        .index-mid-p a {
            display: block;
            height: 22px;
            width: 162px;
            color: #333333;
            text-decoration: none;
            line-height: 22px;
            padding: 15px 0;
            background: #75AC47;
            text-align: center;
            font-size: 14px;
            border-radius: 3px;
            margin-top: 50px;

            &:hover {
                background: #a0d079;
            }
        }
    }


    .check {
        margin-top: 50px;
        height: 500px;
        position: relative;
        display: flex;
        margin-bottom: 50px;

        img {
            width: 500px;
            height: 500px;
        }

        &:hover img~.hotellogodiv {
            display: block;
        }

        .hotellogodiv {
            position: absolute;
            bottom: 0px;
            padding: 50px;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            width: 400px;
        }


        .hotellogodiv>p {
            font-size: 16px;
            line-height: 30px;
            color: #ffffff;
            margin: 0;
        }

        .right {
            padding: 50px 0 0 50px;
        }

        .right .name {
            display: flex;
            align-items: center;
            margin: 0 0 60px;
            font-size: 40px;
            color: #000;
        }


        .right .boat_ext_desc {
            font-size: 20px;
            line-height: 22px;
            margin: 5px 0;
            color: #565555;

        }

        a {
            .now {
                width: 300px;
                height: 60px;
                background-color: #F0F9EB;
                border: 2px solid black;
                border-radius: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
                font-weight: 700;
                margin: 60px 0 0 150px;
                transition: all .4s;

                &::after {
                    content: '';
                    display: block;
                    width: 300px;
                    height: 60px;
                    background-color: #C0E38C;
                    position: absolute;
                    left: -100%;
                    top: 0;
                    z-index: 1;
                    transition: all .4s;
                }
            }

            &:hover .now {
                background: #C0E38C;
                border-color: #75AC47;
                color: #ffffff;
            }



        }
    }
}
</style>