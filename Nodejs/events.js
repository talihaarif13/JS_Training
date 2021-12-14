const eventEmitter = require('events');
const emitter = new eventEmitter;

emitter.on('messagePrint', () => {
    console.log('listener called');
})

emitter.emit('messagePrint');