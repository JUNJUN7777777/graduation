import request from '@/utils/request'

//管理员页面获取数据
export function getUserinfo(page, limit) {
    return request({
        url: `/api/my/userinfo/${page}/${limit}`,
        method: 'get',
    })
}

//修改管理员
export const reqUpdateManage = (manage) => {
    if (manage.id) {
        return request({ url: "/api/my/update/manage", method: "post", data: manage })
    } else {
        return request({ url: "/api/my/add/manage", method: "post", data: manage })
    }
}

//删除管理员
export const reqDeleteManage = (id) => request({ url: `/api/my/delete/manage/${id}`, method: "delete" })

////获取客户信息and查询
export function getClientInfo(page, limit, data) {
    return request({
        url: `/api/my/clientinfo/${page}/${limit}`,
        method: 'post',
        data
    })
}

//修改会员
export const reqUpdateClient = (client) => {
    if (client.id) {
        return request({ url: "/api/my/update/client", method: "post", data: client })
    } else {
        return request({ url: "/api/my/add/client", method: "post", data: client })
    }
}

//删除会员
export const reqDeleteClient = (id) => request({ url: `/api/my/delete/client/${id}`, method: "delete" })

