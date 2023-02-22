import {spawn} from 'child_process';
import { Emitter as EmitterKit, Disposable } from 'event-kit';
export default class Emitter {
	protected readonly emitter = new EmitterKit();

	protected emit(eventName:string, data?: any) {
		this.emitter.emit(eventName, data);
	}

	public on(eventName:string, fn: (data?: any) => void) {
		return this.emitter.on(eventName,fn);
	}
}