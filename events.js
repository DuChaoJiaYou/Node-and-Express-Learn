const EventEmitter = require('events')

const eventEmit = new EventEmitter()

eventEmit.on('start',()=>{
    console.log('这是定义的开始的事件');
})

eventEmit.emit('start')