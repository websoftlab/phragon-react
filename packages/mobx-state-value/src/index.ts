import { action, observable, makeObservable } from "mobx";

export class MobxStateValue<Val extends {} = {}> {
	constructor(public value: Val) {
		makeObservable(this, {
			value: observable,
			setValue: action,
		});
	}
	setValue(value: Val) {
		if (this.value === value) {
			this.value = { ...value };
		} else {
			this.value = value;
		}
	}
	getValue(): Val {
		return this.value;
	}
}
