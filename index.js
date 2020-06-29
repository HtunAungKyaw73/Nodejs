// const Person = require('./person');

// const person = new Person('Htun Aung Kyaw',21);

// person.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message',(data)=>console.log('Called Listener: ', data));

// logger.log('Hello');


//Create Server 
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type':'text/html'})
            res.end(content);
        })
    }
    if(req.url==='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, { 'Content-Type':'text/html'})
            res.end(content);
        })
    }
});

const PORT = process.env.PORT || 5005; 

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
