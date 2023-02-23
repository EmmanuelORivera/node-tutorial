const { readFile, writeFile } = require('fs')
const path = require('path')

const firstFilePath = path.join('content', 'first.txt')
const secondFilePath = path.join('content', 'second.txt')

console.log('start')
readFile(firstFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  }
  const first = data

  readFile(secondFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const second = data

    const resutAsyncFile = path.join('content', 'result-async.txt')
    writeFile(
      resutAsyncFile,
      `Here is the result: ${first}, ${second} !!!`,
      (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
