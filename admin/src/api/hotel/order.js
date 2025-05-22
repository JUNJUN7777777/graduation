import request from '@/utils/request'


//后台获取房型
export const reqRoomList = () => request({ url: 'api/order/houseinfo', method: 'GET' })

//后台添加房型
export const reqAddRoom = (data) => request({ url: 'api/order/addhouse', method: 'POST', data })

//后台删除房型
export const reqDelRoom = (data) => request({ url: 'api/order/deletehouse', method: 'DELETE', data })


//后台获取订单
export const reqOrderList = (page, limit, order) => request({ url: `/api/order/orderinfo/${page}/${limit}`, method: 'POST', data: order })

//后台修改订单
export const reqUpdateOrder = (order) => {
  if (order.id) {
    return request({ url: "/api/order/updateorder", method: "post", data: order })
  } else {
    return request({ url: "/api/order/addorder", method: "post", data: order })
  }
}

//删除订单
export const reqDelOrder = (data) => request({ url: 'api/order/deleteorder', method: 'DELETE', data })

