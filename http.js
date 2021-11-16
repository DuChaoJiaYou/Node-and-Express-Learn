const http = require('http')
const https = require('https')


// 创建HTTP服务器   createServer  listen
http.createServer((request, response) => {
    // response.statusCode = '600'
    // console.log(request);
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World')

}).listen(3000, () => {
    console.log('服务已建立在3000端口上');
})

// 发送HTTP 请求 GET  请求

// 新建请求体 
const options = {
    hostname: 'www.baidu.com',
    port: 443,
    // path: '/todos',
    method:'GET'
}

const get = https.request(options,res=>{
    console.log('状态码',res.statusCode);
    res.on('data',d => {
        // process.stdout.write(d)
        // console.log(d);

    })
   
})
get.on('error',err => {
    console.log('请求错误！');
})
get.write('这是写入的数据');
get.end()
