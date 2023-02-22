// const perfomon = require("../src/index.js");
// console.log(perfomon.default());




// const {physicalDisk} = require("../src/index");
import {physicalDisk} from "../src/index";
const physical_disk = new physicalDisk();

const counterName:string = "Current Disk Queue Length";
const diskName:string = "D:";
physical_disk.currentDiskQueueLength(diskName,counterName);
physical_disk.on(counterName,(data) => {
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
setTimeout(()=>{
	/**
	 *
	 *
	 * @param {string} counterName
	 * @returns {Boolean}
	 * @memberof physicalDisk
	 */
	physical_disk.kill("Current Disk Queue Length")
},10000)
