// CommonJS
// Modules

const names = require('./4-names.js')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data);

// Si es una función y ya está invocada en su archivo no es necesario 
// meterlo en una variable y se ejecutará automáticamente con el require
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)