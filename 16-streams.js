const { createReadStream } = require('fs');

//default 64kb
// last buffer - remainder 
// HighWaterMark - Control size
//const stream = createReadStream('./content/big.txt');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 9000,
    encoding: 'utf8'
});

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})