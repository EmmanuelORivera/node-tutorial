const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`
  console.log({ logItem })
  try {
    const dirPath = path.join(__dirname, 'logs')
    const filePath = path.join(__dirname, 'logs', 'eventLog.txt')
    if (!fs.existsSync(dirPath)) {
      await fsPromises.mkdir(dirPath)
    }
    await fsPromises.appendFile(filePath, logItem)
  } catch (err) {
    console.error(err)
  }
}

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
  myEmitter.emit('log', 'Log event emitted!')
}, 2000)
