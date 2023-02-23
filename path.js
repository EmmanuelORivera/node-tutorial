const path = require('path')

const filePath = path.join('content', 'subfolder', 'text.txt')
const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(path.sep)
console.log(absolute)
console.log(filePath)
console.log(base)
