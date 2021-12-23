const mongoose = require('mongoose')

// 定义类别Schema
// 这里注意;  SchemaTypes 是带有s 的
const schema = new mongoose.Schema({
    // 分类的名称
    name: String,
    //上级分类
    parent: mongoose.SchemaTypes.ObjectId
})


// 将定义好的Schema 导出 为一个 Category模型
module.exports = mongoose.model('Category', schema)