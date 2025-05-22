const data = require('./data.json')

module.exports = [
    {//mock数据接口地址
        url: '/home/list',
        type: 'get',
        response: config => {
            const items = data.items
            return {
                code: 20000,
                data
            }
        }
    }
]
