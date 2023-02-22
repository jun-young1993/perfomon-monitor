# perfomon-monitor


## Physical Disk
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


```