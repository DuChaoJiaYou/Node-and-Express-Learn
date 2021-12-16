const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('这是首页')
})

router.get('/contact', (req, res) => {
    res.send('这是联系页')
})


module.exports = router