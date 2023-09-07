const SayHi =  require('./mycode')
const os = require('os');
const fs = require('fs')
const mysql = require('mysql');

// SayHi();
// console.log(os)


// var freeMemoryAvailableInBytes = os.freemem();
// console.log(freeMemoryAvailableInBytes);


// var machineName = os.hostname();
// console.log(machineName);


// var platFormDetails = os.platform();
// console.log(platFormDetails);


// console.log(mysql);

// console.log(fs);

console.log("Start...")
console.log(".........................");

// fs.readdir(`C:\\Users\\mahes\\OneDrive\\Desktop\\cdacpune\\Day11\\`,(err, files)=>{
//     if(err==null)
//     {
//         files.map((file)=>{
//             console.log(file);
//         })
//     }
//     else
//     {
//         console.log("Something went wrong!");
//         console.log(err);
//     }
// });


var files = fs.readdirSync(`C:\\Users\\mahes\\OneDrive\\Desktop\\cdacpune\\Day11\\`)

files.map((file)=>{
                 console.log(file);});


console.log(".........................")
console.log("End...")