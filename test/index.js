// const perfomon = require("../src/index.js");
// console.log(perfomon.default());




// const physicalDisk = require("../src/perfomon/physical-disk");
// console.log(physicalDisk.default());

// import * as Per from "../index.js";
// console.log(Per);
const { exec,spawn, spawnSync,execSync } = require("child_process");
const command = `typeperf`;
// const command = `typeperf`;
// let process = spawn(command,["\\PhysicalDisk(1 D:)\\Avg. Disk Read Queue Length"]);
let process = spawn(command,["-qx","PhysicalDisk"]);

console.log(execSync("typeperf -qx PhysicalDisk").toString('utf-8'));
return;


// process = spawn("wmic",['diskdrive get name,index']); 

// process.stdin.write(command);
s = '';
process.stdin.end();
process.stdout.on('data',(data) => {
//   s = s + data.toString('utf8');
// console.log(data);
console.log('data',data.toString('utf8'));
//   console.log('data',data.split("\r\n"));
  
})
process.stdout.on('err',(err) => {
  console.log('err',err);
})
process.on('close',(code) => {
	console.log("close");
console.log(s.split("\r\n"));
  console.log(code);
});


// process.stdout.on('data',(data) => {
// 	//   s = s + data.toString('utf8');
// console.log('data',data.toString('utf8'));
// //   console.log('data',data.split("\r\n"));
	
// })
// process.stdout.on('err',(err) => {
// 	console.log('err',err);
// })
// process.on('close',(code) => {
// 	console.log("close");
// console.log(s.split("\r\n"));
// 	console.log(code);
// });
	