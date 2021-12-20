/**
 * 使用mongoose进行数据库的配置
 */

module.exports = app  => {
    // 导入mongoose
    const mongoose = require('mongoose')

    // 连接数据库
    mongoose.connect('mongodb://localhost:27017/blog')

    console.log('ok');
}