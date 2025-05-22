import { reqBannerList, reqFloorList } from "@/api";

const state = {
    bannerList: [],
    floorList: []
};

const mutations = {
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};

const actions = {
    async getBannerList({ commit }) {
        let result = await reqBannerList();
        console.log(result)

        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        console.log(result)

        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
};

const getters = {};



export default {
    state,
    mutations,
    actions,
    getters
}