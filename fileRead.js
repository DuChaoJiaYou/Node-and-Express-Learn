const fs = require('fs')

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

const ifGetFile = (fileName) =>{
    getFile(fileName).then(success =>{
        console.log('成功');
    }).catch(err => {
        console.log('执行失败');
    })
}

const file_1 = 'C:/Users/DC/Desktop/测试.txt'

// getFile('C:/Users/DC/Desktop/问题.txt').then(data => console.log(data)).catch(err => console.log(err))

// ifGetFile(file_1)

/**
 * 使用fs.open 进行打开文件
 */

// fs.open(file_1,'r+',(err,fd) => {
//     //fd 是文件描述符
//     console.log(fd);
// })


/**
 * fs.stat() 方法 来获取文件的 详细信息
 */
// fs.stat(file_1,(err,status) => {
//     console.log(status);
// })

/** 
 * 使用fs.writeFile() 来写入文件
 */
const content = '这是想要写入的内容hhhh'
fs.writeFile(file_1,content,err => {
    if(err){
        console.log(err);
    }
        console.log('success');
    
})