import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import home from './home';
import user from './user'

export default new Vuex.Store({
    modules: {
        home,
        user,
    }

});