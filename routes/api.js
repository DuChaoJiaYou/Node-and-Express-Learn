const express = require('express')
const router = express.Router()

router.get('/product',(req, res) => {
    res.json({
        id: 1, name: '图灵社区', website: 'https://tuture.co', products: [{
            productName: 'MYSql'
        }, {
            productName: 'Redis'
        }, {
            productName: '大云数据库'
        }]
    })
})

module.exports = router