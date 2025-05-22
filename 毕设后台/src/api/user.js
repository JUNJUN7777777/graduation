// import request from '@/utils/request'
import mockRequest from '@/utils/mockRequest'


export function login(data) {
  return mockRequest({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return mockRequest({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return mockRequest({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
