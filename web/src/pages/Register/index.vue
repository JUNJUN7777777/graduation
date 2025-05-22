<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>注册新用户
                <span class="go">我有账号，去
                    <router-link to="/login">登录</router-link>
                </span>
            </h3>
            <div class="content">
                <label>用户名:</label>
                <input type="text" placeholder="请输入你的手机号" v-model="username" name="username"
                    v-validate="{ required: true, regex: /^1\d{10}$/ }" :class="{ invalid: errors.has('username') }">
                <span class="error-msg">{{ errors.first('username') }}</span>
            </div>

            <div class="content">
                <label>登录密码:</label>
                <input type="text" placeholder="请你输入你的密码" v-model="password" name="password"
                    v-validate="{ required: true, regex: /^[0-9A-Za-z]{2,12}$/ }"
                    :class="{ invalid: errors.has('password') }">
                <span class="error-msg">{{ errors.first('password') }}</span>
            </div>
            <div class="content">
                <label>确认密码:</label>
                <input type="text" placeholder="请你确认密码" v-model="password1" name="password1"
                    v-validate="{ required: true, is: password }" :class="{ invalid: errors.has('password1') }">
                <span class="error-msg">{{ errors.first('password1') }}</span>
            </div>
            <div class="controls">
                <input name="agree" type="checkbox" v-model="agree" v-validate="{ required: true, 'tongyi': true }"
                    :class="{ invalid: errors.has('password') }">
                <span>同意协议并注册《用户协议》</span>
                <span class="error-msg">{{ errors.first('agree') }}</span>
            </div>
            <div class="btn">
                <button @click="userRegister">完成注册</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Register',
    data() {
        return {
            username: "",
            password: '',
            password1: '',
            agree: true,
            user_pic: "https://ts1.cn.mm.bing.net/th/id/R-C.c76f273470164ff2050f1bd3e77d3dae?rik=G16snwJ8u6B7SQ&riu=http%3a%2f%2fp10.qhimg.com%2ft0158f75dea28318100.jpg&ehk=eVUzRG%2fBpJw8KparmVPS0w7RGx8hpAYAZeF4Ugl5qAA%3d&risl=&pid=ImgRaw&r=0"
        }
    },
    methods: {
        async userRegister() {
            const success = await this.$validator.validateAll()
            if (success) {
                try {
                    const { username, password, password1, user_pic } = this
                    await this.$store.dispatch('userRegister', { username, password, user_pic })
                    this.$message({
                        type: 'success',
                        message: '注册成功'
                    })
                    this.$router.push('/login')
                } catch (error) {
                    alert(error.message)
                }
            }
        }
    }
}
</script>
  
<style lang="less" scoped>
.register-container {
    margin: 40px;

    .register {
        width: 500px;
        height: 345px;
        border: 1px solid rgb(223, 223, 223);
        margin: 0 auto;
        background-color: #fff;

        h3 {
            background: #ececec;
            margin: 0;
            padding: 6px 15px;
            color: #333;
            border-bottom: 1px solid #dfdfdf;
            font-size: 20.04px;
            line-height: 30.06px;

            span {
                font-size: 14px;
                float: right;

                a {
                    color: #e1251b;
                }
            }
        }

        div:nth-of-type(1) {
            margin-top: 40px;
        }

        .content {
            padding-left: 30px;
            margin-bottom: 18px;
            position: relative;

            label {
                font-size: 14px;
                width: 96px;
                text-align: right;
                display: inline-block;
            }

            input {
                width: 270px;
                height: 38px;
                padding-left: 8px;
                box-sizing: border-box;
                margin-left: 5px;
                outline: none;
                border: 1px solid #999;
            }

            img {
                vertical-align: sub;
            }

            .error-msg {
                position: absolute;
                top: 100%;
                left: 130px;
                color: red;
            }
        }

        .controls {
            text-align: center;
            position: relative;

            input {
                vertical-align: middle;
            }

        }

        .btn {
            text-align: center;
            line-height: 36px;

            margin: 17px 0 0 30px;

            button {
                outline: none;
                width: 270px;
                height: 36px;
                background: #75AC47;
                color: #fff !important;
                display: inline-block;
                font-size: 16px;

                &:hover {
                    background-color: #A0D079;
                }
            }
        }
    }


}
</style>