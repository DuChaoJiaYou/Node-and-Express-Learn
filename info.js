const os = require('os')

const printProgramInfo = () => {
    console.log('当前用户：', os.userInfo().username);
    console.log('当前进程：', process.pid);
    console.log('当前脚本路径', __filename);
}

module.exports = printProgramInfo