const { JOHN, PETER } = require('./constants')

const sayHi = (name) => {
  console.log(`hello there ${name}`)
}

sayHi('susan')
sayHi(JOHN)
sayHi(PETER)
console.log(module)
