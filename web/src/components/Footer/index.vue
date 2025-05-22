<template>
    <div class="container">
        <div class="footer w ">
            <div class="mc_cont1400">
                <div class="l">
                    <div class="footer-logo wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".2s">
                        <a href="/">
                            <img src="images/logo.png" alt="桂林理工大学">
                        </a>
                    </div>
                    <div class="footer-contact wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".4s">
                        <a><i class="bi bi-envelope-fill"></i>770607388@qq.com</a>
                        <a><i class="bi bi-telephone-fill">
                                <img src="https://www.fullcheer.cn/phpstyle/puqin_pc/img/icon_tel.png" alt="">
                            </i>13078647760</a>
                    </div>

                </div>
                <div class="r">
                    <div class="footer-address wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".6s">
                        <i class="bi bi-geo-alt-fill"></i>广西桂林市雁山区雁山镇雁山街319号
                    </div>
                    <a class="footer-a wow fadeInUp animate" data-wow-duration="1s" data-wow-delay=".2s" title="联系我们">
                        <span>联系我们</span>
                        <i class="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    data() {
        return {

        };
    },
    mounted() {

    },


    methods: {


    }
};
</script>

<style scoped>
.container {
    background-color: #91b063;
}

.footer {
    padding-top: 50px;

    .mc_cont1400 {
        display: flex;
        justify-content: space-between;
    }
}

.footer .l,
.footer .r {
    max-width: 500px;
    width: calc(100% - 40px);
}

.footer-logo {
    text-align: center;
}

.footer-logo img {
    height: 70px;
    display: block;
}

.footer-contact {
    display: flex;
    margin: 40px 0;

}

.footer-contact a {
    width: 250px;
    display: flex;
    align-items: center;
    border-radius: 21px;
    margin: 0 10px 20px;
    border: 5px solid #F0F9EB;
    font-size: 20px;
    padding: 20px;
}

.footer-contact a:hover,
.footer-contact a:first-child {
    background: #1e1e1e;
    color: #ffffff;
    border-color: #1e1e1e;
}

.footer-address {
    font-size: 25px;
    line-height: 18px;
    margin: 70px 0 50px 0;
}


.footer-a {
    line-height: 40px;
    border-radius: 21px;
    text-align: center;
    display: block;
    font-size: 25px;
    color: #1e1e1e;
    border: 5px solid #F0F9EB;
}

.footer-a i {
    transition: all .3s ease;
    margin-left: 40px;
}

.footer-a span {
    transition: all .3s ease;
}

.footer-a {
    background: #1e1e1e;
    border-color: #1e1e1e;
    color: #ffffff;

}

.footer-a:hover i {
    margin-left: 20px;

}
</style>