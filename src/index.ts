import physicalDisk from "./perfomon/physical-disk";

class perfomon {
	private physicalDisk?: physicalDisk;
	constructor(){
		this.physicalDisk = new physicalDisk();
	}
	
};

export {physicalDisk, perfomon};