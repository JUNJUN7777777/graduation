
export default [
    {
        path: "*",
        component: () => import('@/pages/Home')
    },
    {
        path: "/login",
        component: () => import('@/pages/Login')
    },
    {
        path: "/register",
        component: () => import('@/pages/Register')
    },
    {
        path: "/home",
        component: () => import('@/pages/Home')
    },
    {
        name: 'hot',
        path: "/hot",
        component: () => import('@/pages/Hot')
    },
    {
        path: "/member",
        component: () => import('@/pages/Member')
    },
    {
        path: "/project",
        component: () => import('@/pages/Project')
    },
    {
        path: "/about",
        component: () => import('@/pages/About')
    },
    {
        name: 'pay',
        path: "/pay",
        component: () => import('@/pages/Pay')
    },
    {
        path: "/order",
        component: () => import('@/pages/Order')
    },
    {
        name: 'orderDetail',
        path: "/orderDetail",
        component: () => import('@/pages/OrderDetail')
    },
    {
        path: "/map",
        component: () => import('@/pages/Map')
    },
]