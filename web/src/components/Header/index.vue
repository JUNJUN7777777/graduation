<template>
    <div class="main">
        <div class="container">
            <div class="header">
                <div class="logo">
                    <a href="">
                        <img src="images/logo.png" alt="">
                    </a>
                </div>
                <div class="header-right">
                    <div class="header-nav">
                        <ul>
                            <li v-for="(item, index) in routes" @click="changeFlag(item)"
                                :class="select == item.path ? 'on' : ''">
                                <router-link :to=item.path>{{ item.text }}</router-link>
                            </li>

                        </ul>
                    </div>
                    <div class=" header-tel">
                        <router-link to="/login" v-if="!userName">请登录</router-link>
                        <a @click="goLogOut()" v-else>退出登陆:{{ userName }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="gotop wow swing" v-show="gotop" @click="toTop">返回顶部</div>

    </div>
</template>

<script>
import "../../assets/jquery.waypoints.min.js" //数字滚动插件

export default {
    name: 'Header',
    data() {
        return {
            gotop: false,
            routes: [
                { path: '/home', text: '首页' },
                { path: '/hot', text: '热门房型' },
                { path: '/member', text: '注册会员' },
                { path: '/project', text: '路线规划' },
                { path: '/about', text: '关于钧苑' },
                { path: '/order', text: '我的订单' },
            ],
            select: '',
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.handleScrollSec, true);
        this.select = sessionStorage.getItem('select') || '/home'
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    watch: {
        $route(to, from) {
            this.select = this.$route.path
        }
    },
    methods: {
        changeFlag(item) {
            this.select = item.path
            sessionStorage.setItem('select', this.select)
        },
        handleScrollSec() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 500 ? (this.gotop = true) : (this.gotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeTop);
                }
            }, 10);
        },
        //退出登录
        async goLogOut() {
            try {
                await this.$store.dispatch('userLogout')
                this.$router.push('/login')
            } catch (error) {
                alert(error.message)
            }
        }

    },
    computed: {
        userName() {
            return this.$store.state.user.userInfo.username
        }
    }
};
</script>

<style scoped lang="less">
.gotop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 150px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #75AC47;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    z-index: 99;
}

.main {
    //给fixed占位
    width: 100%;
    height: 80px;


    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #75AC47;
        border-bottom: 1px solid #fff;
        z-index: 99;
        display: flex;
        justify-content: center;

        .logo {
            padding-top: 4px;
            width: 200px;
            height: 75px;
            background-color: #75AC47;
            margin-right: 70px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .header-right {
            display: flex;
            align-items: center;

            .header-nav {
                line-height: 78px;

                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #75AC47;
                    border-bottom: 1px solid #fff;

                    li {

                        &.on,
                        &:hover {
                            background-color: #a0d079;
                        }

                        &.on::after,
                        &:hover:after {
                            content: '';
                            display: block;
                            width: 100%;
                            height: 3px;
                            background-color: #FEFBF8;
                        }

                        a {
                            font-size: 18px;
                            color: #fff;
                            display: block;
                            padding: 0 15px;
                        }
                    }

                }
            }

            .header-tel {
                font-size: 20px;
                margin-left: 40px;
                font-weight: 700;
                text-align: center;
                line-height: 80px;
                background-color: #75AC47;

                a {
                    color: #FEFBF8;
                    padding: 10px;
                    border-bottom: 3px solid #fff;

                    &:hover {
                        background-color: #FEFBF8;
                        color: #75AC47;
                    }
                }

                img {
                    width: 30px;
                    height: 30px;
                    vertical-align: middle;
                }
            }

        }
    }
}
</style>