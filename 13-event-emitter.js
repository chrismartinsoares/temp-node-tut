const EventEmitter = require('events');

const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
    console.log(`data recieved: User ${name} with id, ${id}`);
});

customEmitter.on('response', () => {
    console.log(`Some other logic here `);
});

customEmitter.emit('response', 'Chris', 34) // La respuesta siempre tiene que estar al final