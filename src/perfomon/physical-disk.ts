import Emitter from "./emitter";
import Commander from "./commander";
type physicalDiskCommand = "PhysicalDisk";

export default class physicalDisk extends Emitter{
	private command:physicalDiskCommand = "PhysicalDisk";
	private commander?:Commander;
	constructor(option:string[] = ['-si','2']){
		// execSync("typeperf -qx PhysicalDisk").toString('utf-8')
		super();
		this.commander = new Commander(this.command,option);
	}

	
	
	/**
	 * Current Disk Queue Length
	 * ex) \PhysicalDisk(0 C:)\Current Disk Queue Length
	 *
	 * @param {string} [drive="_Total"]
	 * @param {string} [eventName]
	 * @memberof physicalDisk
	 */
	public currentDiskQueueLength(drive:string = "_Total",eventName?:string){
		const command:string = 'Current Disk Queue Length';
		this.commander?.start(command,{
			select: (cli:string) => {
				return cli.includes(drive);
			}
		});

		this.commander?.on(command,(data) => {
			super.emit(eventName??command, {
				data : data.data,
				drive : drive
			})
		})
	}

	/**
	 * \PhysicalDisk(1 D:)\Avg. Disk Write Queue Length
	 *
	 * @param {string} [drive="_Total"]
	 * @param {string} [eventName]
	 * @memberof physicalDisk
	 */
	public AvgDiskWriteQueueLength(drive:string = "_Total",eventName?:string){
		const command:string = 'Avg. Disk Write Queue Length';
		this.commander?.start(command,{
			select: (cli:string) => {
				return cli.includes(drive);
			}
		});

		this.commander?.on(command,(data) => {
			super.emit(eventName??command, {
				data : data.data,
				drive : drive
			})
		})
	}

	/**
	 * \PhysicalDisk(1 D:)\Avg. Disk Read Queue Length
	 *
	 * @param {string} [drive="_Total"]
	 * @param {string} [eventName]
	 * @memberof physicalDisk
	 */
	public AvgDiskReadQueueLength(drive:string = "_Total",eventName?:string){
		const command:string = 'Avg. Disk Read Queue Length';
		this.commander?.start(command,{
			select: (cli:string) => {
				return cli.includes(drive);
			}
		});

		this.commander?.on(command,(data) => {
			super.emit(eventName??command, {
				data : data.data,
				drive : drive
			})
		})
	}

	/**
	 * command process kill
	 *
	 * @param {string} counterName
	 * @returns {Boolean}
	 * @memberof physicalDisk
	 */
	public kill(counterName:string){
		return this.commander?.kill(counterName);
	}
}


// \PhysicalDisk(1 D:)\% Disk Time
// \PhysicalDisk(0 C:)\% Disk Time
// \PhysicalDisk(_Total)\% Disk Time
// \PhysicalDisk(1 D:)\Avg. Disk Queue Length
// \PhysicalDisk(0 C:)\Avg. Disk Queue Length
// \PhysicalDisk(_Total)\Avg. Disk Queue Length
// \PhysicalDisk(1 D:)\% Disk Read Time
// \PhysicalDisk(0 C:)\% Disk Read Time
// \PhysicalDisk(_Total)\% Disk Read Time

// \PhysicalDisk(1 D:)\% Disk Write Time
// \PhysicalDisk(0 C:)\% Disk Write Time
// \PhysicalDisk(_Total)\% Disk Write Time

// \PhysicalDisk(1 D:)\Avg. Disk sec/Transfer
// \PhysicalDisk(0 C:)\Avg. Disk sec/Transfer
// \PhysicalDisk(_Total)\Avg. Disk sec/Transfer
// \PhysicalDisk(1 D:)\Avg. Disk sec/Read
// \PhysicalDisk(0 C:)\Avg. Disk sec/Read
// \PhysicalDisk(_Total)\Avg. Disk sec/Read
// \PhysicalDisk(1 D:)\Avg. Disk sec/Write
// \PhysicalDisk(0 C:)\Avg. Disk sec/Write
// \PhysicalDisk(_Total)\Avg. Disk sec/Write
// \PhysicalDisk(1 D:)\Disk Transfers/sec
// \PhysicalDisk(0 C:)\Disk Transfers/sec
// \PhysicalDisk(_Total)\Disk Transfers/sec
// \PhysicalDisk(1 D:)\Disk Reads/sec
// \PhysicalDisk(0 C:)\Disk Reads/sec
// \PhysicalDisk(_Total)\Disk Reads/sec
// \PhysicalDisk(1 D:)\Disk Writes/sec
// \PhysicalDisk(0 C:)\Disk Writes/sec
// \PhysicalDisk(_Total)\Disk Writes/sec
// \PhysicalDisk(1 D:)\Disk Bytes/sec
// \PhysicalDisk(0 C:)\Disk Bytes/sec
// \PhysicalDisk(_Total)\Disk Bytes/sec
// \PhysicalDisk(1 D:)\Disk Read Bytes/sec
// \PhysicalDisk(0 C:)\Disk Read Bytes/sec
// \PhysicalDisk(_Total)\Disk Read Bytes/sec
// \PhysicalDisk(1 D:)\Disk Write Bytes/sec
// \PhysicalDisk(0 C:)\Disk Write Bytes/sec
// \PhysicalDisk(_Total)\Disk Write Bytes/sec
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Transfer
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Read
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Read
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Read
// \PhysicalDisk(1 D:)\Avg. Disk Bytes/Write
// \PhysicalDisk(0 C:)\Avg. Disk Bytes/Write
// \PhysicalDisk(_Total)\Avg. Disk Bytes/Write
// \PhysicalDisk(1 D:)\% Idle Time
// \PhysicalDisk(0 C:)\% Idle Time
// \PhysicalDisk(_Total)\% Idle Time
// \PhysicalDisk(1 D:)\Split IO/Sec
// \PhysicalDisk(0 C:)\Split IO/Sec
// \PhysicalDisk(_Total)\Split IO/Sec