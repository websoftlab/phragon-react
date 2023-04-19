import type { FormStoreInterface, CreateFormOptions } from "./types";
import type { Formatter, IdType, ValidatorType, FormatterType } from "@phragon/validator";
import { createFormatter } from "@phragon/validator";
import { clonePlainObject, isPlainObject } from "@phragon-util/plain-object";
import ArrayFormStore from "./ArrayFormStore";
import FStore from "./FStore";
import { action, flow, computed, makeObservable, observable } from "mobx";

const FORM_ID = Symbol("form.id");

type FormPrivate = {
	fromFill: boolean;
	init: any;
};

function updateParent<D extends {}>(self: FormStore<D>) {
	if (self.parent) {
		self.parent.fromChild((store) => {
			store.set(self.name, self.form);
		});
	}
}

export default class FormStore<D extends {} = any> extends FStore<D> implements FormStoreInterface<D> {
	private readonly _sanitizerGlobal: Formatter | undefined = undefined;
	private readonly _sanitizers: Record<IdType, Formatter> = {};
	private readonly _formatterGlobal: Formatter | undefined = undefined;
	private readonly _formatters: Record<IdType, Formatter> = {};

	form: any = {};
	touchList: any = {};

	[FORM_ID]: FormPrivate = {
		fromFill: false,
		init: {},
	};

	constructor(name: string, options: CreateFormOptions<D> = {}, parent?: FormStore | ArrayFormStore) {
		super("form", name, parent, options.validators, options.submit);
		const { initValues, formatters, sanitizers } = options;
		if (initValues && isPlainObject(initValues)) {
			this.form = initValues;
			this[FORM_ID].init = { ...initValues };
		}
		if (formatters) {
			if (typeof formatters === "function") {
				this._formatterGlobal = formatters;
			} else if (isPlainObject(formatters)) {
				for (const key of Object.keys(formatters)) {
					const formatter = formatters[key];
					if (typeof formatter !== "function") {
						continue;
					}
					if (key === "*") {
						this._formatterGlobal = formatters[key];
					} else {
						this._formatters[key] = formatters[key];
					}
				}
			}
		}
		if (sanitizers) {
			if (typeof sanitizers === "function") {
				this._sanitizerGlobal = sanitizers;
			} else if (isPlainObject(sanitizers)) {
				for (const key of Object.keys(sanitizers)) {
					const sanitizer = createFormatter(sanitizers[key]);
					if (key === "*") {
						this._sanitizerGlobal = sanitizer;
					} else {
						this._sanitizers[key] = sanitizer;
					}
				}
			}
		}

		// observer

		makeObservable(this, {
			form: observable,
			touchList: observable,
			errors: observable,
			submitError: observable,
			expectant: observable,
			wait: computed,
			touch: computed,
			fill: action,
			del: action,
			set: action,
			sanitize: action,
			validate: action,
			setError: action,
			setSubmitError: action,
			submit: flow,
		});
	}

	push<Add extends {} = any>(options: {
		validators?: Record<IdType | keyof Add, ValidatorType | ValidatorType[]>;
		formatters?: Record<IdType | keyof Add, Formatter>;
		sanitizers?: Record<IdType | keyof Add, FormatterType | FormatterType[]>;
	}): () => void {
		const { sanitizers, formatters, ...rest } = options;
		const parent = super.push(rest);
		const formatterKeys: string[] = [];
		const sanitizerKeys: string[] = [];
		const f = new Map<IdType | keyof Add, Formatter>();
		const s = new Map<IdType | keyof Add, Formatter>();
		if (isPlainObject<Record<IdType | keyof Add, Formatter>>(formatters)) {
			for (const key of Object.keys(formatters)) {
				if (key === "*") {
					continue;
				}
				const formatter = formatters[key];
				if (typeof formatter !== "function") {
					continue;
				}
				formatterKeys.push(key);
				if (this._formatters.hasOwnProperty(key)) {
					f.set(key, this._formatters[key]);
				}
				this._formatters[key] = formatters[key];
			}
		}
		if (isPlainObject<Record<IdType | keyof Add, FormatterType | FormatterType[]>>(sanitizers)) {
			for (const key of Object.keys(sanitizers)) {
				if (key === "*") {
					continue;
				}
				sanitizerKeys.push(key);
				const sanitizer = createFormatter(sanitizers[key]);
				if (this._sanitizers.hasOwnProperty(key)) {
					s.set(key, this._sanitizers[key]);
				}
				this._sanitizers[key] = sanitizer;
			}
		}
		return () => {
			parent();
			for (const key of formatterKeys) {
				if (f.has(key)) {
					this._formatters[key] = f.get(key)!;
				} else {
					delete this._formatters[key];
				}
			}
			for (const key of sanitizerKeys) {
				if (s.has(key)) {
					this._sanitizers[key] = s.get(key)!;
				} else {
					delete this._sanitizers[key];
				}
			}
		};
	}

	protected _setTouch(name: IdType, forceValid = false) {
		const init = this[FORM_ID].init;
		const value = this.form[name];
		if (value == null) {
			this.touchList[name] = init.hasOwnProperty(name) ? init[name] != null : false;
		} else {
			this.touchList[name] = value !== (init.hasOwnProperty(name) ? init[name] : "");
		}
		if (forceValid) {
			this._valid(name, value);
		} else if (this.errors.hasOwnProperty(name)) {
			delete this.errors[name];
		}
		if (!forceValid && this.submitError != null) {
			this.submitError = null;
		}
	}

	get touch(): boolean {
		let touch = false;
		// each all keys for invoke reaction
		Object.keys(this.touchList).forEach((key) => {
			if (this.touchList[key] === true) {
				touch = true;
			}
		});
		Object.keys(this.form).forEach((key) => {
			if (this.touchList[key] === true) {
				touch = true;
			}
		});
		return touch;
	}

	fill(data: D, reset = false) {
		if (!isPlainObject(data)) {
			return;
		}

		const it = this[FORM_ID];
		const keys = Object.keys(this.form);
		const fromFill = it.fromFill;

		it.fromFill = true;

		// set new value, or update
		for (const key of Object.keys(data)) {
			this.set(key, data[key as keyof D]);
			const index = keys.indexOf(key);
			if (index !== -1) {
				keys.splice(index, 1);
			}
		}

		// delete old values
		for (const key of keys) {
			this.del(key);
		}

		if (!fromFill) {
			updateParent(this);
		}

		it.fromFill = fromFill;
		if (reset) {
			it.init = { ...data };
			this.touchList = {};
			this.errors = {};
		}
	}

	sanitize(name: IdType | keyof D, forceValid: boolean = false): boolean {
		const prev = this.form[name];
		if (this._sanitizers.hasOwnProperty(name)) {
			this.form[name] = this._sanitizers[name as IdType](this.form[name], name as IdType);
		} else if (this._sanitizerGlobal) {
			this.form[name] = this._sanitizerGlobal(this.form[name], name as IdType);
		}
		if (prev !== this.form[name] || forceValid) {
			this._setTouch(name as IdType, true);
			return true;
		}
		return false;
	}

	empty(): void {
		this.fill({} as D);
	}

	has(name: IdType | keyof D): boolean {
		if (this.form[name] === undefined) {
			return false;
		}
		return this.form.hasOwnProperty(name);
	}

	touched(name: IdType | keyof D): boolean {
		return this.has(name) ? this.touchList[name as IdType] === true : false;
	}

	validate() {
		const vKeys = Object.keys(this._validators);
		const sKeys = Object.keys(this._sanitizers);

		// sanitize
		if (sKeys.length > 0) {
			for (const key of sKeys) {
				const format = this._sanitizers[key](this.form[key], key);
				if (format !== this.form[key]) {
					this.form[key] = format;
					this._setTouch(key, true);
				}
			}
		}

		const definedKeys = Object.keys(this.form);
		if (this._sanitizerGlobal) {
			for (const key of definedKeys) {
				if (!sKeys.includes(key)) {
					const format = this._sanitizerGlobal(this.form[key], key);
					if (format !== this.form[key]) {
						this.form[key] = format;
						this._setTouch(key, true);
					}
				}
			}
		}

		let valid = true;

		if (vKeys.length > 0) {
			for (const key of vKeys) {
				if (this._valid(key, this.form[key]) != null) {
					valid = false;
				}
			}
		}
		if (this._validatorGlobal) {
			for (const key of definedKeys) {
				if (!vKeys.includes(key) && this._valid(key, this.form[key]) != null) {
					valid = false;
				}
			}
		}

		this._eachChild((child) => {
			if (!child.validate()) {
				valid = false;
			}
		});

		return valid;
	}

	del(name: IdType | keyof D, forceValid = false): void {
		if (!this.has(name)) {
			return;
		}
		delete this.form[name];
		delete this._children[name as IdType];
		const it = this[FORM_ID];
		this._setTouch(name as IdType, forceValid);
		if (!it.fromFill) {
			updateParent(this);
		}
	}

	get<Val = string>(name: IdType | keyof D): Val | undefined {
		return this.form[name];
	}

	set<Val = string>(name: IdType | keyof D, value: Val, forceValid = false): void {
		const prev = this.form[name];

		// dynamic format value
		if (this._formatters.hasOwnProperty(name)) {
			value = this._formatters[name as IdType](value, name as IdType);
		} else if (this._formatterGlobal) {
			value = this._formatterGlobal(value, name as IdType);
		}

		value = this._emit({ type: "format", name, value }).value;

		if (Object.is(prev, value)) {
			return;
		}

		this.form[name] = value;
		this._setTouch(name as IdType, forceValid);

		// update child
		if (!this._fromChild) {
			const child = this._children[name as IdType];
			if (child) {
				child.fill(value);
			}
		}

		// update parent
		if (!this[FORM_ID].fromFill) {
			updateParent(this);
		}
	}

	toJSON() {
		return clonePlainObject(this._emit({ type: "json", data: this.form }).data);
	}
}
