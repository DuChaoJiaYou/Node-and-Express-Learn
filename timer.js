const printProgramInfo = require('./info')
const getTime = require('./datetime')

// printProgramInfo()

const time = process.argv[3]
const message = process.argv[5]

// console.log(time);
// console.log(message);
setTimeout(() => {
   console.log(message);
}, time * 1000)

// console.log('当前时间是：', getTime.getCurrentTime());