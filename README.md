# perfomon-monitor

### ※ Currently only available in Windows  
#  

### Using npm:
```shell
$ npm i perfomon-monitor
```
### Physical Disk:
```js
	import {physicalDisk} from "../src/index";
	const physical_disk = new physicalDisk();

	/**
	 * Current Disk Queue Length
	 * ex) \PhysicalDisk(0 C:)\Current Disk Queue Length
	 *
	 * @param {string} [drive="_Total"]
	 * @param {string} [eventName]
	 * @memberof physicalDisk
	 */
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

	/////////////////
	/////METHODS/////
	/////////////////

	physical_disk.AvgDiskWriteQueueLength(diskName,counterName);
	physical_disk.on(counterName,(data) => {
		console.log(counterName,data); // { data: '6.000000', drive: 'D:' }
	})
	physical_disk.AvgDiskWriteQueueLength(diskName,counterName);
	physical_disk.on(counterName,(data) => {
		console.log(counterName,data); //{ data: '5.000000', drive: 'D:' }
	})

```