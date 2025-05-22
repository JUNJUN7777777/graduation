import mockRequest from '@/utils/mockRequest'
import { reqCheerio } from "@/api/hotel/info";

const state = {
    list: {},
    cheerio: []
}

const mutations = {
    GETDATA(state, list) {
        state.list = list
    },
    GETCHEERIO(state, cheerio) {
        state.cheerio = cheerio
    }
}

const actions = {
    async getData({ commit }) {
        let result = await mockRequest.get('/home/list')
        if (result.code == 20000) {
            commit("GETDATA", result.data)
        }
    },
    async getCheerio({ commit }) {
        let result = await reqCheerio()
        if (result.code == 200) {
            commit("GETCHEERIO", result.data)
        }
    }
}

export default {
    state,
    mutations,
    actions,
}

