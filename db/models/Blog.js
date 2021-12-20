const mongoose = require('mongoose')

// 定义博客Schema  注意调用mongoose.Schema 方法其中 S是大写
const schema = new mongoose.Schema({
    //博客标题
    title:{
        type:String
    },
    //博客作者
    author:{
        type:String
    },
    //博客简介
    desc:{
        type:String
    },
    //博客内容
    body:{
        type:String
    },
    
},
 // 自动添加 createdAt & updatedAt 字段
 {
   timestamps:true
})

// 定义完schema后，将其发布为model ，并导出
module.exports = mongoose.model('Blog',schema)