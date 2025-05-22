import request from '@/utils/request'

//后台获取酒店信息
export const reqHouseInfo = () => request({ url: 'api/house/info', method: 'GET' })

//后台更新酒店信息
export const reqUpdateClient = (data) => request({ url: "api/house/updateInfo", method: "post", data })

//后台获取爬虫的数据接口
export const reqCheerio = (data) => request({ url: "api/cheerio", method: "GET" })
