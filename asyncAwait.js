const { readFile, writeFile } = require('fs')
const path = require('path')
const { promisify } = require('util')

console.log('starts')
const asyncReadFile = promisify(readFile)
const asyncWriteFile = promisify(writeFile)

const readFiles = async () => {
  try {
    console.log('start readFiles')
    const firstFile = path.join('content', 'first.txt')
    const secondFile = path.join('content', 'second.txt')

    const dataFirstFile = await asyncReadFile(firstFile, 'utf-8')
    const dataSecondFile = await asyncReadFile(secondFile, 'utf-8')

    console.log('End readFiles')
    console.log('Call')
    writeNewFile(dataFirstFile, dataSecondFile)
    console.log('Call ended')
  } catch (error) {
    console.error(error)
  }
}

const writeNewFile = async (dataFirstFile, dataSecondFile) => {
  try {
    console.log('starts writeFiles')
    const newFilePath = path.join('content', 'newFile.txt')
    await asyncWriteFile(
      newFilePath,
      `this is the new data printed: ${dataFirstFile}, ${dataSecondFile}`
    )
    console.log('ends writeFiles')
  } catch (error) {
    console.log(error)
  }
}

readFiles()

console.log('ends')
