import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";
import store from "@/store";

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

let router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savePosition) {
        return { y: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    next();
    let token = store.state.user.token
    let name = store.state.user.userInfo.username
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('./home')
        } else {
            if (name) {
                next();
            } else {
                //没有用户信息
                try {
                    await store.dispatch('getUserInfo')
                    next()
                }
                catch (error) {
                    //token失效了
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        if (to.path == '/pay' || to.path == '/order' || to.path.indexOf('/orderDetail') != -1) {
            next('/login?redirect=' + to.path)
        }
        else {
            next()
        }
    }
})

export default router
