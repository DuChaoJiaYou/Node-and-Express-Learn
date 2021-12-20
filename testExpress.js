const express = require('express')
const app = express()

// 导入 router 模块 中相关 功能路由
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const bodyParser = require('body-parser')

// 定义全局中间件
// function loggingMiddleWare(req, res, next) {
//     const time = new Date()

//     //生产过程中，尽量避免使用 console 这会 阻塞 Node的单进程
//     console.log(`[${time.toLocaleString()}] ${req.method} ${req.url} ${JSON.stringify(req.body, null, 2)} ${JSON.stringify(req.params)}`);
//     //保证服务继续向下进行
//     next()
// }
// body-parser 相关中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// 引入数据库配置
require('./plugins/db')(app)


//  将 定义的 中间件 注册到 服务中
// app.use(loggingMiddleWare)

app.use('/', indexRouter)

app.use('/api', apiRouter)


app.listen(3000, () => {
    console.log('server is start');
})