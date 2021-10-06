const {readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', )
const second = readFileSync('./content/second.txt', 'utf-8')

// La 'a' en el tercer argumento de writeFileSync() es para decir que haga un "append"
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})

console.log('Done with this task');
console.log('Starting the next one');