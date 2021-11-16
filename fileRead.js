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

const file_1 = 'C:/Users/DC/Desktop/问题.txt'

// getFile('C:/Users/DC/Desktop/问题.txt').then(data => console.log(data)).catch(err => console.log(err))

ifGetFile(file_1)