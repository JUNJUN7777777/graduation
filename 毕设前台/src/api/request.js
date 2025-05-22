import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"
import store from "@/store";
const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

requests.interceptors.request.use((config) => {
    nProgress.start();
    if (store.state.user.token) {
        config.headers['Authorization'] = store.state.user.token
    }
    return config;

})

requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data;

}, (error) => {
    return Promise.reject(new Error('fail'))
})

export default requests;