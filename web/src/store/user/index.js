import { reqUserRegister, reqUserLogin, reqUserInfo, reqLogOut } from '@/api/'
import { setToken, getToken, removeToken } from '@/utils/token';

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        removeToken()
    }
}


const actions = {
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //登录业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit('USERLOGIN', result.token);
            setToken(result.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //获取用户信息(登录完)
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }

    },
    //退出登录  
    async userLogout({ commit }) {
        let result = await reqLogOut()
        if (result.code == 200) {
            commit('CLEAR');
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }


}


const getters = {

}



export default {
    state,
    mutations,
    actions,
    getters

}