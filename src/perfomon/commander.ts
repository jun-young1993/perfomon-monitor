import {ChildProcessWithoutNullStreams, spawn} from 'child_process';
import Emitter from './emitter';
export default class Commander extends Emitter{
	private command?:string;
	private commands:string[] = [];
	private option:string[] = [];
	private processes:{[key:string] : ChildProcessWithoutNullStreams } = {}
	constructor(command:string,option:string[] = []){
		super();
		this.command = command;
		this.option = option;
	}
	private init():Promise<string[]> {
		return new Promise((resolve) => {
			if(this.command){
				const command:string = this.command;
				const process = spawn("typeperf",["-qx",command]);
				let commands = '';
				// process.stdin.end();
				process.stdout.on('data',(data) => {
					commands += data.toString('utf8');
				})
				process.stdout.on('err',(err) => {
					console.log('err',err);
				})
				process.on('close',(code) => {
					      this.commands = commands.split("\r\n");
					      this.commands.push("end");
					      resolve(this.commands);
				});
				      
			}
		})	
	}

	private find(promise:Promise<string[]>, command?:string):Promise<string[]> {
		if(command === undefined){
			return promise;
		}

		return new Promise((resolve) => {
			promise.then((commands:string[]) => {
				resolve(commands.filter((commandstr: string) => {
					return commandstr.includes(command,this.command?.length)
				}));
			})
		})
	}

	public get(command?:string):Promise<string[]> {
		if(this.commands.length === 0){
			return this.find(this.init(),command);
		}else{
			return this.find(Promise.resolve(this.commands),command);
		}
	}

	public run(cli:string,command:string) {
		const process = spawn("typeperf",[cli].concat(this.option));
		this.processes[command] = process;
		// process.stdin.end();
		process.stdout.on('data',(data) => {
			const output = data.toString('utf8');
			const outputparts = output.split(',');

			if(outputparts.length == 2){
				let value:string = outputparts[1];
				if(value[0] === "\""){
					value = value.substring(1);
				}

				if(value[value.length -1] === "\"" ){
					value = value.substring(0,value.length -1 )
				}
				if(!value.includes(this.command ?? "")){
					super.emit(command,{
						data : value,
						cli : cli,
						option : this.option,
						original : output,
						process : process
					});
				}
				
			}
		
		})
		process.stdout.on('err',(err) => {
			
		})
		process.on('close',(code) => {
			      
			      
		});
		      
	}

	/**
	 *
	 *
	 * @param {string} command
	 * @memberof Commander
	 */
	public start(command:string, options?:{ignore?:(cli:string) => boolean,select?:(cli:string) => boolean}){
		this.get(command).then((commands:string[]) => {
			commands.forEach((cli:string) => {
				if(options?.ignore && options.ignore(cli)){
					return false;
				}
				if(options?.select && !options.select(cli)){
					return false;
				}
				this.run(cli,command);
				
			})
			
		})
	}

	public on(command:string, fn:(data:any) => void) {
		return super.on(command, fn);
	}

	/**
	 *
	 *
	 * @param {string} counterName
	 * @returns {Boolean}
	 * @memberof Commander
	 */
	public kill(counterName:string){
		
		if(this.processes[counterName]){
			this.processes[counterName].kill();
			delete this.processes[counterName];
			
			return true;
		}
		
		return false;
	}

}