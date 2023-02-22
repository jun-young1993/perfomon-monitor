// const perfomon = require("../src/index.js");
// console.log(perfomon.default());




const {physicalDisk} = require("../src/index");
const physical_disk = new physicalDisk();


physical_disk.currentDiskQueueLength("D:","Current Disk Queue Length");
physical_disk.on("Current Disk Queue Length",(data) => {
	console.log(data);
	/*
		data 
		{ data: '6.000000', drive: 'D:' }
		{ data: '4.000000', drive: 'D:' }
		{ data: '8.000000', drive: 'D:' }
		{ data: '5.000000', drive: 'D:' }
		...
	*/
})
