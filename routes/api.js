const express = require('express')
const router = express.Router()
/**
 * @description 设计请求博客列表内容 后期与MongoDB的schema设计内容关联
 */
router.get('/blog/list', (req, res) => {
    res.json(
          {
        suc: "ok",
        list: [

            {
                title: '第一篇博客',
                author: 'admin',
                desc: '是第一篇博客',
                body: '天气很好，我很开心'
            },
            {
                title: '第二篇博客',
                author: '阿三',
                desc: '是第二篇博客',
                body: '明天就是周末，我希望能够去游乐园玩'
            },
            {
                title: '第三篇博客',
                author: '阿四',
                desc: '是第三篇博客',
                body: '希望未来越来越好'
            }

        ]
    }

    )
})
  

    

    module.exports = router

  