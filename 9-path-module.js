const path = require('path')

//tipo de separación de ruta según sistema operativo
console.log(path.sep);

// Convierte los parametros metidos, que son 2 carpetas y un archivo en una ruta según el OS
const filepath = path.join('/content/', 'subfolder', 'test.txt')

console.log(filepath);

// Te da el nombre del último elemento de la ruta
const base = path.basename(filepath)
console.log(base);

// Te da la ruta absoluta de los parametros que pongas, exista o no lo que pongas en los parametros
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);