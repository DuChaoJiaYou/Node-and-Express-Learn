const printProgramInfo = require('./info')
const getTime = require('./datetime')
const ProgressBar = require('progress')
// 引入ora  
const ora = require('ora')
// 引入Commander
const { program } = require('commander');
program.version('0.0.1');
program.option('-t, --time <number>', '等待时间（秒）', 3).option('-m,--message <string>', '要输出的信息', 'Hello World');
program.option('-b, --book <string>', '想要看的书籍', '安徒生童话')
program.parse(process.argv);

const options = program.opts()

// 关于 ora的使用
// const spinner = ora('Loading...').start()

var bar = new ProgressBar(':bar', { total: 100 })
var timer = setInterval(() => {
   bar.tick()
   if(bar.complete){
      console.log('\n Complete \n');
      clearInterval(timer)
   }
}, 100);
// printProgramInfo()

// const time = process.argv[3]
// const message = process.argv[5]


// console.log(time);
// console.log(message);
// setTimeout(() => {
//    spinner.stop()
//    console.log(options.message);
//    console.log(options.book);
//    ora('继续等待...').start()

//    // console.log(program.message);

// }, options.time * 1000)

// console.log('当前时间是：', getTime.getCurrentTime());