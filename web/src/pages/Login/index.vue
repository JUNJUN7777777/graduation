<template>
    <div class="login-container">
        <!-- 登录 -->
        <div class="login-wrap">
            <div class="login">
                <div class="loginform">
                    <ul class="tab clearFix">
                        <li>
                            <a class="current">账户登录</a>
                        </li>
                    </ul>

                    <div class="content">
                        <form>
                            <div class="input-text clearFix">
                                <span></span>
                                <input type="text" placeholder="用户名/手机号" v-model="username">
                            </div>
                            <div class="input-text clearFix">
                                <span class="pwd"></span>
                                <input type="text" placeholder="请输入密码" v-model="password">
                            </div>
                            <div class="setting clearFix">
                                <label class="checkbox inline">
                                    <input name="m1" type="checkbox" value="">
                                    自动登录
                                </label>
                                <span class="forget">忘记密码？</span>
                            </div>
                            <button class="btn" @click="userLogin">登&nbsp;&nbsp;录</button>
                        </form>

                        <div class="call clearFix">
                            <router-link class="register" to="/register">立即注册</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async userLogin() {
            try {
                const { username, password } = this;
                await this.$store.dispatch('userLogin', { username, password })
                this.$router.push('/home')
                // let toPath = this.$route.query.redirect || '/home'
                // if (toPath) {
                //     this.$router.push(toPath)
                // }
            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>
  
<style lang="less" scoped>
.login-container {
    .login-wrap {
        height: 400px;

        .login {
            width: 1200px;
            margin: 0 auto;
            // background: url(./images/loginbg.png) no-repeat;
        }

        .loginform {
            width: 420px;
            height: 300px;
            box-sizing: border-box;
            background: #fff;
            top: 45px;
            left: 350px;
            position: relative;
            padding: 20px;

            .tab {

                li {
                    width: 100%;
                    float: left;
                    text-align: center;

                    a {
                        width: 100%;
                        display: block;
                        height: 50px;
                        line-height: 50px;
                        font-size: 20px;
                        font-weight: 700;
                        color: #333;
                        border: 1px solid #ddd;
                        box-sizing: border-box;
                        text-decoration: none;

                    }

                    .current {
                        border-bottom: none;
                        border-top-color: #75AC47;
                        color: #e1251b;
                    }
                }
            }

            .content {
                width: 380px;
                height: 250px;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-top: none;
                padding: 18px;

                form {
                    margin: 15px 0 18px 0;
                    font-size: 12px;
                    line-height: 18px;

                    .input-text {
                        margin-bottom: 16px;

                        span {
                            float: left;
                            width: 37px;
                            height: 32px;
                            border: 1px solid #ccc;
                            // background: url(../../assets/images/icons.png) no-repeat -10px -201px;
                            box-sizing: border-box;
                            border-radius: 2px 0 0 2px;
                        }

                        .pwd {
                            background-position: -72px -201px;
                        }

                        input {
                            width: 302px;
                            height: 32px;
                            box-sizing: border-box;
                            border: 1px solid #ccc;
                            border-left: none;
                            float: left;
                            padding-top: 6px;
                            padding-bottom: 6px;
                            font-size: 14px;
                            line-height: 22px;
                            padding-right: 8px;
                            padding-left: 8px;

                            border-radius: 0 2px 2px 0;
                            outline: none;
                        }
                    }

                    .setting {

                        label {
                            margin-top: 10px;
                            float: left;
                        }

                        .forget {
                            margin-top: 10px;
                            float: right;
                        }
                    }

                    .btn {
                        background-color: #75AC47;
                        padding: 6px;
                        border-radius: 0;
                        font-size: 16px;
                        font-family: 微软雅黑;
                        word-spacing: 4px;
                        color: #fff;
                        width: 100%;
                        height: 36px;
                        margin-top: 25px;
                        outline: none;

                        &:hover {
                            background-color: #A0D079;
                        }
                    }
                }

                .call {

                    ul {
                        float: left;

                        li {
                            float: left;
                            margin-right: 5px;
                        }
                    }

                    .register {
                        float: right;
                        font-size: 15px;
                    }

                    .register:hover {
                        color: #4cb9fc;
                        text-decoration: underline;
                    }
                }

            }
        }
    }

}
</style>