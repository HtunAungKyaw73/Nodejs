const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if(err) throw err;
//     console.log('Folder Created');
// });
// const name = 'Htun Aung Kyaw';
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),name,err => {
//     if(err) throw err;
//     console.log('File Created');
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),' Hello',err => {
//         if(err) throw err;
//         console.log('File Created');
//     });
// });

//read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),{},(err, data) => {
//     if(err) throw err;
//     console.log('File read');
//     console.log(data);
// });

//Rename file
// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'),(err) => {
//     if(err) throw err;
//     console.log('File renamed');
//    // console.log(data);
// });