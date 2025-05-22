import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
Vue.config.productionTip = false

//轮播图
import "swiper/css/swiper.css";

//引入公共样式
import "../public/css/base.css"
import "../public/css/index.css"

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// wow动画出现效果
import "wowjs/css/libs/animate.css"
import wow from 'wowjs'
Vue.prototype.$wow = wow



//引用mock
import "@/mock/mockServe"

//注册全局组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

//引入公共接口函数
import * as API from '@/api';

//表单验证
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  router,
  store

}).$mount('#app')
