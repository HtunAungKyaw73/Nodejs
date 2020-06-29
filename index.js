// const Person = require('./person');

// const person = new Person('Htun Aung Kyaw',21);

// person.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message',(data)=>console.log('Called Listener: ', data));

logger.log('Hello');