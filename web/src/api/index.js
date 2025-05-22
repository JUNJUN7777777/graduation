import requests from './request';
import mockRequests from './mockAjax';


//前台获取房型
export const reqRoomList = () => requests({ url: 'api/order/houseinfo', method: 'GET' })



//前台获取订单
export const reqOrderList = (page, limit, order) => requests({ url: `api/order/orderinfo/${page}/${limit}`, method: 'POST', data: order })

//前台提交订单
export const reqAddOrder = (data) => requests({ url: 'api/order/addorder', method: 'POST', data })

//前台支付订单
export const reqUpdateStatus = (id) => requests({ url: `api/order/updatestatus/${id}`, method: "post" })

//前台获取酒店信息
export const reqHouseInfo = () => requests({ url: 'api/house/info', method: 'GET' })



//注册
export const reqUserRegister = (data) => requests({ url: '/api/register', data, method: 'post' })

//登入
export const reqUserLogin = (data) => requests({ url: '/api/login', data, method: 'post' })

//获取用户信息【需要带着token向服务器要信息】
export const reqUserInfo = () => requests({ url: '/admin/info', method: 'get' })

//退出登录
export const reqLogOut = () => requests({ url: '/api/logout', method: 'get' })


//获取首页轮播图接口
export const reqBannerList = () => mockRequests.get('/banner')
//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')