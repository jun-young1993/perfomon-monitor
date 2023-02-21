import physicalDisk from "./perfomon/physical-disk";

export default class perfomon {
	private physicalDisk?: physicalDisk;
	constructor(){
		this.physicalDisk = new physicalDisk();
	}
	
};

