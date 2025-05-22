<template>
    <div class="container">
        <div class="pxxy-5">
            <div class="w  wow bounceInUp ">
                <div class="title">
                    钧苑团队
                </div>
                <div class="box">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="pic">
                                    <img src="images/派大星.gif" alt="">
                                </div>
                                <div class="msg">
                                    <div class="name">
                                        <i>梁显钧</i>
                                        （总经理）
                                    </div>
                                    <div class="content">
                                        <p>负责酒店整体运营和管理<br />酒店最高管理者</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="pic">
                                    <img src="images/glut.png" alt="">
                                </div>
                                <div class="msg">
                                    <div class="name">
                                        <i>梁显钧2</i>
                                        （主管）
                                    </div>
                                    <div class="content">
                                        <p>负责部门的日常和团队管理<br />协助部门经理实施各项工作。
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="pic">
                                    <img src="images/dog.jpg" alt="">
                                </div>
                                <div class="msg">
                                    <div class="name">
                                        <i>梁显钧3</i>
                                        （员工）
                                    </div>
                                    <div class="content">
                                        <p>酒店各个部门的基层员工，执行具体的工作任务
                                            <br />前台接待员
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="pic">
                                    <img src="images/dlAm.jpg" alt="">
                                </div>
                                <div class="msg">
                                    <div class="name">
                                        <i>梁显钧4</i>
                                        （员工）
                                    </div>
                                    <div class="content">
                                        <p>酒店各个部门的基层员工，执行具体的工作任务
                                            <br />客房服务员。
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
        <div class="list-zxgs w  wow swing ">
            <ul class="clearfix">
                <li>
                    <div class="icon">
                        <img src="images/10-2.png" alt="">
                    </div>
                    <div class="msg">
                        <p>传统文化氛围</p>
                        <span>从建筑风格到装饰布置，处处散发着中国传统文化的气息。</span>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="images/10-3.png" alt="">
                    </div>
                    <div class="msg">
                        <p>现代奢华设施</p>
                        <span>每间客房都精心设计，配备了豪华舒适的床品</span>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="images/10-4.png" alt="">
                    </div>
                    <div class="msg">
                        <p>贴心周到服务</p>
                        <span>专业的礼宾服务、24小时客房服务</span>
                    </div>
                </li>
                <li>
                    <div class="icon"> <img src="images/10-5.png" alt=""></div>
                    <div class="msg">
                        <p>专属会员俱乐部</p>
                        <span>为忠诚的会员提供专属特权和优惠</span>
                    </div>
                </li>

                <li>
                    <div class="icon"> <img src="images/10-7.png" alt=""></div>
                    <div class="msg">
                        <p>丰富多样选择</p>
                        <span>宾客可以尽情品味各种样式</span>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <img src="images/10-6.png" alt="">
                    </div>
                    <div class="msg">
                        <p>优美环境景观</p>
                        <span>青山绿水之间，环境优美，景观宜人。</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'About',
    data() {
        return {
        };
    },
    mounted() {
        new this.$wow.WOW({
            live: false
        }).init()
        var mySwiper = new Swiper('.swiper', {

            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },
    methods: {}
};
</script>

<style scoped>
.pxxy-5 {
    margin: 50px auto;
}

.pxxy-5 .title {
    text-align: center;
    font-size: 40px;
    color: #444444;
    font-weight: bold;
}


.pxxy-5 .box {
    position: relative;
    margin-top: 40px;
}

.pxxy-5 .box .swiper-wrapper {
    width: 0px;
    text-align: center;
    margin: 0 auto;
    margin-left: 455px;

}


.pxxy-5 .box .swiper .swiper-slide {
    text-align: center;
}

.pxxy-5 .box .pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 80px;

}

.pxxy-5 .box .msg {

    width: 350px;
    margin-top: 30px;
}

.pxxy-5 .box .msg .name {
    font-size: 30px;
    color: #444444;
}

.pxxy-5 .box .msg .name i {
    font-size: 30px;
}

.pxxy-5 .box .msg .content {
    font-size: 25px;
    color: #666666;
    line-height: 28px;
    margin: 0.2rem 0 0.1rem;
}

.pxxy-5 .box .msg .course {
    font-size: 20px;
    color: #222222;
}

.pxxy-5 .swiper-button-prev {
    width: 0.28rem;
    height: 0.51rem;
    background-size: 100%;
    outline: none;
}

.pxxy-5 .swiper-button-next {
    width: 0.28rem;
    height: 0.51rem;
    background-size: 100%;
    outline: none;
}

.pxxy-5 .swiper-button-prev {
    --swiper-navigation-color: #DDDDDD;
    --swiper-navigation-size: 50px;
    /* 设置按钮大小 */
}

.pxxy-5 .swiper-button-next {
    --swiper-navigation-color: #DDDDDD;
    --swiper-navigation-size: 50px;
    /* 设置按钮大小 */
}

.list-zxgs ul li {
    width: 385px;
    height: 250px;
    margin: 0 20px 40px 0;
    float: left;
    background-color: #FEFBF8;
    position: relative;
    top: 0;
    transition: all .5s;
}

.list-zxgs ul li .icon {
    width: 50px;
    height: 50px;
    margin: 40px auto 30px;
    position: relative;
}

.list-zxgs ul li .icon img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.list-zxgs ul li .msg {
    text-align: center;
    padding: 0 20px;
}

.list-zxgs ul li .msg p {
    font-size: 30px;
    color: #080808;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: Medium;
}

.list-zxgs ul li .msg span {
    color: #080808;
    font-size: 20px;
    font-family: Medium;
}

.list-zxgs ul li:nth-child(3n) {
    margin-right: 0;
}

.list-zxgs ul li:hover {
    top: -20px;
}
</style>