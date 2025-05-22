<template>
    <div class="main">
        <div class="container-flex" tabindex="0" hidefocus="true">
            <div class="box-left">
                <div class="left-top">
                    <div class="current-num">
                        <div>当月收益</div>
                        <!-- <p class="counter">609,680</p> -->
                        <p class="counter">{{ this.cheerio[0].value }}</p>

                    </div>
                </div>
                <div class="left-center">
                    <div class="title-box">
                        <h6>销售方式占比</h6>
                    </div>
                    <div class="chart-box">
                        <pieCharts></pieCharts>
                    </div>

                </div>
                <!-- class="select" -->
                <div class="left-bottom">
                    <div class="title-box">
                        <h6>桂林市订单数据</h6>
                    </div>
                    <div class="chart-box ">
                        <earning></earning>
                    </div>
                </div>
            </div>
            <div class="box-center">
                <div class="center-top">
                    <h1>钧苑酒店可视化平台</h1>
                </div>
                <div class="center-center">
                    <div class="weather-box">
                        <div class="data">
                            <p class="time" id="time">00:00:00</p>
                            <p id="date">
                            </p>
                        </div>
                        <div class="weather">
                            <img id="weatherImg" src="images/weather/weather_img01.png" alt="">
                            <div id="weather">
                                <p class="active">{{ this.weather.text }}</p>
                                <p>{{ this.weather.temperature }}℃</p>
                                <p>桂林市雁山区</p>
                            </div>
                        </div>
                    </div>
                    <img src="images/line_bg.png" alt="">


                </div>
                <div class="center-bottom">
                    <div class="chart-box" style="width:90%;height:100%;">
                        <centerMap></centerMap>
                    </div>
                    <div class="city-box">
                        <p>钧苑酒店客流预测</p>
                    </div>
                </div>

            </div>
            <div class="box-right">
                <div class="right-top">
                    <div class="title-box">
                        <h6 id="barTitle">实时消费记录</h6>
                    </div>
                    <div class="wrap">
                        <ul>
                            <li v-for="(item, index) in list" :key="index">
                                <p>{{ index + 1 }}： {{ item.name }} - 支付了{{ item.totalPrice }} 于 {{ item.startTime }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right-center">
                    <div class="title-box">
                        <h6>新增会员列表</h6>
                    </div>
                    <div class="adduser">
                        <ul class="clearfix">
                            <li class="clearfix" v-for="(item, index) in client">
                                <span class="pulll_left">
                                    <i class="el-icon-user-solid"></i>
                                    {{ index + 1 }}：新增{{ item.grade }} - {{ item.clientName }}
                                </span>
                                <span class="pulll_right">于 {{ item.time }} </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right-bottom">
                    <div class="title-box">
                        <h6>酒店信息</h6>
                        <button id="setBtn" @click="goPage()"><img src="images/settings_icon.png" alt="">设置</button>
                    </div>
                    <div class="data-box">
                        <div class="settings-box">
                            <p><img src="images/people_iocn.png" alt="">今日值班:{{ this.info.ceo }}<span
                                    id="name_a"></span><span id="date_a"></span>
                            </p>
                            <p><img src="images/data_icon.png" alt="">客服电话:{{ this.info.phone }}<span
                                    id="name_a"></span><span id="date_a"></span>
                            </p>
                            <p><img src="images/selsct_time.png" alt="">酒店地址:{{ this.info.address }}<span
                                    id="name_a"></span><span id="date_a"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

//rem参数
(function (win, doc) {
    if (!win.addEventListener) return;
    var docEl = doc.documentElement

    function setFont() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 1920) {
            docEl.style.fontSize = '100px'; //1rem  = 100px
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        }
    }

    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);
})(window, document);



//右边循环
$(document).ready(function () {
    var html = $(".wrap ul").html()
    $(".wrap ul").append(html)
    var ls = 3
    var i = 0
    var ref = setInterval(function () {
        i++
        if (i == ls) {
            i = 1
            $(".wrap ul").css({ marginTop: 0 })
            $(".wrap ul").animate({ marginTop: -'.6' * i + 'rem' }, 1000)
        }
        $(".wrap ul").animate({ marginTop: -'.6' * i + 'rem' }, 300)


    }, 2400);

    var html2 = $(".adduser ul").html()
    $(".adduser ul").append(html2)
    var ls2 = 9
    var a = 0
    var ref = setInterval(function () {
        a++
        if (a == ls2) {
            a = 1
            $(".adduser ul").css({ marginTop: 0 })
            $(".adduser ul").animate({ marginTop: -'.5' * a + 'rem' }, 300)
        }
        $(".adduser ul").animate({ marginTop: -'.535' * a + 'rem' }, 1000)


    }, 2400);
})

//中间时间
function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}
//获取当前时间
var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    $('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
    $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span> &nbsp <span>' + ampm + '</span> &nbsp <span>周' + day + '</span>')
}, 1000)
import axios from 'axios'
import $ from 'jquery'
import "../../assets/jquery-3.2.1.min.js"
import "../../assets/jquery.waypoints.min.js" //数字滚动插件
import "../../assets/jquery.countup.min.js"

import centerMap from "./centerMap"
import pieCharts from "./pieCharts"
import earning from "./earning"
import { mapState } from "vuex"



export default {
    name: 'visual',
    components: { centerMap, pieCharts, earning },
    data() {
        return {
            page: 1,
            limit: 10,
            list: {},//订单
            weather: [],//天气
            client: [],//会员
            info: {},//酒店信息
            page: 1,
            limit: 10,
        };
    },
    methods: {
        async getPageList(pager = 1) {
            this.page = pager
            const { page, limit } = this
            let result = await this.$API.order.reqOrderList(page, limit)
            let data = await this.$API.manage.getClientInfo(page, limit)
            if (result.code === 200) {
                this.list = result.data
            }
            if (data.code === 200) {
                this.client = data.data
            }
        },
        getWeather() {
            axios.get("https://api.seniverse.com/v3/weather/now.json?key=rlaz3yugjaptxegr&location=guilin&language=zh-Hans&unit=c").then
                (res => {
                    // console.log(res.data.results[0])
                    if (res) {
                        this.weather = res.data.results[0].now
                    }
                })
        },
        async getHouseInfo() {
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
        goPage() {
            this.$router.push({
                path: '/info/houseinfo'
            })
        }
    },
    mounted() {
        this.getWeather()
        this.getPageList()
        this.getHouseInfo()
        //左上统计
        $(document).ready(function () {
            //统计
            $('.counter').countUp({
                delay: 10,
                time: 3000
            });
        })
    },
    computed: {
        ...mapState({
            lists: (state) => state.home.list,
            cheerio: (state) => state.home.cheerio
        })
    },
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 650px;
}



/* 消费的样式 */
.wrap {
    width: 5rem;
    height: 2.5rem;
    overflow: hidden;
    margin-top: 0px;
}

.wrap ul {
    list-style: none;
}

.wrap li {
    width: 4.3rem;
    line-height: .42rem;
    height: .42rem;
    font-size: .18rem;
    text-indent: .24rem;
    margin-bottom: .1rem;
}

.wrap li p {
    border: 1px solid rgba(25, 186, 139, .17);
    color: rgba(255, 255, 255, .6);
}

/* 新增会员的 */
.adduser {
    margin-top: .2rem;
    height: 1.52rem;
    overflow: hidden;
}

.adduser ul {
    list-style: none;
}

.adduser li {
    height: .5rem;
}

.adduser img {
    width: .40rem;
    border-radius: .5rem;
    margin-right: .1rem;
    display: inline-block;
    vertical-align: middle;
}

.adduser span {
    line-height: .5rem;
    font-size: .18rem;
    color: rgba(255, 255, 255, .6);
}




.data-box {
    width: 4.9rem;
    position: absolute;
    margin: auto;
    top: 0.42rem;
    bottom: 0;
    left: 0;
    right: 0;
}

.chart-box {
    position: absolute;
    top: 0.42rem;
    bottom: 0;
    width: 90%;
    margin: auto;
    left: 0;
    right: 0;
    height: auto;
}

.container-flex {
    width: 100%;
    height: 100%;
    background: url(./images/index_bg.png) left top no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    outline: none;
}

.box-left {
    width: 28%;
    height: 100%;
    background: url(./images/line_img.png) top right repeat-y;
}

.left-top {
    width: 100%;
    height: 20%;
    margin-top: 10px;
    position: relative;
}

.left-top>.current-num {
    width: 4.9rem;
    height: 1.8rem;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(./images/border_bg01.png) top left no-repeat;
    background-size: 100% 100%;
}

.current-num>div {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: url(./images/title_bg01.png) center center no-repeat;
    font-size: 0.2rem;
    color: #0e94ea;
    background-size: 1.8rem 0.25rem;
    font-weight: 900;
}

.current-num>p {
    font-size: 0.46rem;
    text-align: center;
    margin-top: 0;
    color: white;
}

.left-center {
    width: 100%;
    height: 37%;
    margin-top: 10px;
    position: relative;
}

.pie-chart>div {
    float: left;
    width: 50%;
    height: 100%;
    position: relative;
}

.pie-data {
    height: 2.25rem;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    overflow-y: auto;
    padding-right: 5px;
}

.pie-data p {
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.2rem;
    color: #cdddf7;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    cursor: default;
}

.pie-data p>span {
    width: 0;
    flex-grow: 1;
    margin: 0 5px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.pie-data p>.pie-number {
    flex-grow: 2;
}

.legend {
    display: inline-block;
    width: 0.2rem;
    height: 0.16rem;
    line-height: 0.2rem;
    border-radius: 2px;
    background: white;
}

.left-bottom {
    width: 100%;
    height: 42.6%;
    position: relative;
}

.filter-con {
    width: 100%;
    height: 0.4rem;
    position: absolute;
    float: left;
    top: 10px;
    left: 0;
    display: none;
    flex-flow: row nowrap;
    justify-content: space-between;
    /*    visibility: hidden;*/
    z-index: 999;
}

.pop-filter {
    width: 5.2rem;
    top: 1.1rem;
    left: 0.5rem;
}

.pop-filters {
    width: 5.2rem;
    top: 1.1rem;
    left: 0.5rem;
}

.gd-map {
    width: 100%;
    height: 90%;
}

.box-center {
    width: 44%;
    height: 100%;
    /*    background: green;*/
}

.center-top {
    width: 100%;
    height: 8.8%;
    position: relative;
    top: 0;
    left: 0;
    background: url(./images/title_border.png) bottom center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-top>h1 {
    color: #cdddf7;
    font-size: 0.45rem;
    font-weight: 900;
    letter-spacing: 5px;
}

.center-center {
    width: 100%;
    height: 15.3%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.weather-box {
    width: 4.1rem;
    height: 1.1rem;
    border: 1px solid #0E94EA;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

.weather-box>.data {
    width: 2.19rem;
    height: 0.65rem;
    border-right: 2px solid #cdddf7;
}

.data>p {
    font-size: 0.16rem;
    margin: 0 5px;
    color: #cdddf7;
    text-align: center;
    margin: 0;
}

.data>p>span {
    margin: 0 5px;
}

.data>p.time {
    font-size: 0.42rem;
    height: 0.42rem;
    line-height: 0.42rem;
}

.weather-box>.weather {
    width: 1.8rem;
    height: 0.65rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;
}

.weather>img {
    height: 100%;
}

.weather>div>p {
    font-size: 0.12rem;
    color: #cdddf7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.24rem;
    line-height: 0.24rem;
}

.weather>div>p.active {
    color: white;
    font-size: 0.16rem;
}


.center-center>img {
    width: 0.13rem;
    height: 1.1rem;
    margin: 0 0.2rem;
}

.center-bottom {
    width: 100%;
    height: 75.9%;
    position: relative;
}

.city-box {
    width: 1.8rem;
    border: 1px solid #0e94ea;
    position: absolute;
    bottom: 10%;
    left: 1%;
    cursor: pointer;
    color: white;
}

.city-box>p {
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.2rem;
    font-weight: bold;
    color: #cdddf7;
    box-sizing: border-box;
}


.box-right {
    width: 28%;
    height: 100%;
    background: url(./images/line_img.png) top left repeat-y;
}

.right-top {
    width: 100%;
    height: 41%;
    box-sizing: border-box;
    padding-top: 0.2rem;
    position: relative;
}

.right-top>.data-box,
.right-top>.chart-box {
    top: 1rem;
}





.right-center {
    width: 100%;
    height: 29%;
    position: relative;
}




.time-input {
    width: 1.8rem;
    height: 0.4rem;
    box-sizing: border-box;
    border: 1px solid #0E94EA;
    font-size: 0.16rem;
    background: rgba(14, 148, 234, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    color: #cdddf7;
    padding-left: 10px;
}

.data-box>.data-number {
    width: 4.9rem;
    height: 2.3rem;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(./images/bg_img03.png) top left no-repeat;
    background-size: 100% 100%;
    color: #cdddf7;
    font-size: 0.4rem;
    line-height: 2.3rem;
    text-align: center;
}

.right-bottom {
    width: 100%;
    height: 30%;
    position: relative;
}

.data-box>.settings-box {
    box-sizing: border-box;
    width: 4.8rem;
    height: 2rem;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(14, 148, 234, 0.2);
    border: 1px solid #0E94EA;
    color: white;
    font-size: 0.18rem;
    overflow: hidden;
}

.settings-box>p {
    color: #cdddf7;
    margin: 0.3rem 0;
    padding-left: 0.4rem;
    height: 0.22rem;
    line-height: 0.22rem;
}


.settings-box>div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 0.2rem;
}

.settings-box>div>p {
    width: 2.9rem;
    font-size: 0.14rem;
    padding: 0;
    color: #cdddf7;
}

.settings-box>p>img {
    width: 0.2rem;
    height: 0.22rem;
    margin-right: 10px;
    vertical-align: bottom;

}

.settings-box>p>span,
.settings-box>div>p>span {
    color: white;
    margin: 0 0.15rem;
}

.settings-box>div>img {
    height: 0.2rem;
    margin: 0 0.05rem;
}

.config {
    text-decoration: underline;
    cursor: pointer;
}

.settings-box>form label {
    color: #cdddf7;
    margin-right: 10px;
}

.four-f {
    letter-spacing: 0.045rem;
}

.settings-box>form input {
    width: 1.2rem;
    height: 0.4rem;
    border: 1px solid #0E94EA;
    background: rgba(14, 148, 235, 0.2);
    color: white;
    padding-left: 0.1rem;
}

.settings-box>form>div {
    width: 94%;
    margin: auto;
}

.set-ter {
    height: 0.64rem;
    line-height: 0.64rem;
}

.set-time {
    height: 0.4rem;
    width: 3.56rem;
    padding-left: 1.2rem;
}


.end-1 {
    margin-left: 0.1rem;
}

.set-peo {
    height: 0.70rem;
    line-height: 0.7rem;
}

.settings-box>.set-btn {
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: center;
    padding-top: 0;
}

.set-btn>button {
    width: 0.9rem;
    height: 0.4rem;
    border: 1px solid #0E94EA;
    background: rgba(14, 148, 235, 0.2);
    color: white;
    margin: 0 5px;
    cursor: pointer;
}

.settings-box>.close-icon {
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    position: absolute;
    top: 5px;
    right: 5px;
    background: url(./images/close_icon.png) top left no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}

.settings-box>.kf {
    padding-top: 0.8rem;
    line-height: 0.3rem;
}

.title-box {
    width: 4.9rem;
    height: 0.42rem;
    background: url(./images/box_title.png) top left no-repeat;
    background-size: 100% 100%;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
}

.title-box>h6,
.title-box>p {
    font-size: 0.2rem;
    color: white;
    height: 0.42rem;
    line-height: 0.42rem;
    margin-left: 0.4rem;
}



.line-img {
    width: 1px;
    height: 0.2rem;
    margin: 0 10px;
}

.title-box>.line-img {
    position: absolute;
    right: 1.3rem;
}

.title-box>button {
    font-size: 0.18rem;
    border: none;
    background: transparent;
    color: #cdddf7;
    height: 0.42rem;
    position: absolute;
    right: 0.6rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;
}

.title-box>button:hover {
    color: white;
}

.title-box>button>img {
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 5px;
}

.unit {
    font-size: 0.16rem;
    height: 0.4rem;
    color: #cdddf7;
    text-align: right;
    padding-right: 0.3rem;
    line-height: 0.4rem;
}
</style>