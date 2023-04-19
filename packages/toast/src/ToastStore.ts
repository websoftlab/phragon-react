import type { Toast } from "./types";
import { action, makeObservable, observable } from "mobx";

function textHash(text: string) {
	text = String(text).trim();
	if (text.length === 0) {
		return "";
	}
	let out: number[] = [];
	for (let i = 0; i < text.length; i++) {
		const j = i % 32;
		const n = text.charCodeAt(i);
		const p = i > 31 ? out[j] : 0;
		out[j] = (n + p) % 61;
	}
	out = out.map((n) => {
		if (n < 10) return 48 + n;
		if (n < 36) return 55 + n;
		return 62 + n;
	});
	return String.fromCharCode(...out);
}

function getHash(item: Toast.Item) {
	const {
		id,
		open,
		closable,
		pauseOnFocusLoss,
		pauseOnHover,
		icon,
		draggablePercent,
		draggable,
		autoClose,
		level,
		text,
		action,
	} = item;
	let hash = `:/${id}.${open ? "y" : "n"}`;
	if (open) {
		hash += `.prop-[${[
			closable ? "y" : "n",
			pauseOnFocusLoss ? "y" : "n",
			pauseOnHover ? "y" : "n",
			icon ? `{${icon}}` : "n",
			draggablePercent,
			draggable ? "y" : "n",
			autoClose ? "y" : "n",
			level,
		].join(".")}]`;
		hash += `.t-${textHash(text)}`;
		if (action.length) {
			hash += action.reduce((prev, current) => `${prev}.act-[${current.id}]`, "");
		}
	}
	return hash;
}

function getIndex(store: ToastStore, id?: string) {
	if (id == null) {
		return store.toastList.length - 1;
	}
	return store.toastList.findIndex((item) => item.id === id);
}

function find(store: ToastStore, id: string) {
	let index: number;
	if (id == null) {
		index = store.toastList.length - 1;
	} else {
		index = store.toastList.findIndex((item) => item.id === id);
	}
	if (index === -1) {
		return null;
	}
	const toast = store.toastList[index];
	return {
		index,
		id: toast.id,
		toast,
	};
}

let autoId = 1;
function getAutoId() {
	autoId++;
	if (autoId > Number.MAX_SAFE_INTEGER) {
		autoId = 1;
	}
	return `toast-${autoId}`;
}

export class ToastStore {
	readonly toastList: Toast.Item[] = [];
	readonly options: Required<Toast.StoreOptions>;

	hash: string = "";

	private readonly _updateHash: () => void;
	private readonly _onClose: Record<string, Function | undefined> = Object.create(null);

	constructor(options: Toast.StoreOptions = {}) {
		this.options = {
			autoClose: 5000,
			draggable: true,
			draggablePercent: 80,
			pauseOnFocusLoss: true,
			pauseOnHover: true,
			...options,
		};

		// observe
		makeObservable(this, {
			toastList: observable,
			hash: observable,
			open: action,
			close: action,
			destroy: action,
		});

		this._updateHash = action(() => {
			this.hash = this.toastList.map((toast) => `toast-[${toast.id}]`).join(".");
		});
	}

	get top(): Toast.Item | null {
		const length = this.toastList.length;
		return length === 0 ? null : this.toastList[length - 1];
	}

	get length(): number {
		return this.toastList.length;
	}

	open(options: Toast.OpenOptions): string {
		let {
			id,
			autoClose,
			draggable,
			draggablePercent,
			pauseOnFocusLoss,
			pauseOnHover,
			icon = false,
			level = "default",
			closable = true,
			onClose,
			action,
			...rest
		} = options;

		if (id == null) {
			id = getAutoId();
		}

		this._onClose[id] = onClose;

		const getValue = <T = Toast.CommonOptions[keyof Toast.CommonOptions]>(
			name: keyof Toast.CommonOptions,
			value: T | undefined | null,
			altValue?: T | undefined | null
		): T => {
			if (value != null) {
				return value;
			}
			if (altValue != null) {
				return altValue;
			}
			return this.options[name] as T;
		};

		const latest = find(this, id);
		let toast: Toast.Item = {
			...rest,
			id,
			closable,
			level,
			autoClose: getValue("autoClose", autoClose, closable ? null : false),
			draggable: getValue("draggable", draggable, closable ? null : false),
			draggablePercent: getValue("draggablePercent", draggablePercent),
			pauseOnFocusLoss: getValue("pauseOnFocusLoss", pauseOnFocusLoss),
			pauseOnHover: getValue("pauseOnHover", pauseOnHover),
			icon,
			open: true,
			hash: "",
			action: Array.isArray(action) ? action : action == null ? [] : [action],
		};

		toast.hash = getHash(toast);

		if (latest == null) {
			this.toastList.push(toast);
		} else {
			toast = Object.assign(latest.toast, toast);
			if (latest.index !== this.toastList.length - 1) {
				this.toastList.splice(latest.index, 1);
				this.toastList.push(toast);
			}
		}

		this._updateHash();
		return id;
	}

	isOpen(id: string): boolean {
		const item = find(this, id);
		return item ? item.toast.open : false;
	}

	close(id: string): void {
		const item = find(this, id);
		if (item == null) {
			return;
		}
		const { toast } = item;
		if (!toast.open) {
			return;
		}
		toast.open = false;
		toast.hash = getHash(toast);
		this._updateHash();
	}

	destroy(id: string) {
		const index = getIndex(this, id);
		if (index !== -1) {
			this.toastList.splice(index, 1);
			this._updateHash();
			const func = this._onClose[id];
			if (typeof func === "function") {
				func();
				delete this._onClose[id];
			}
		}
	}

	closeAll(): void {
		if (this.toastList.length) {
			let reload = false;
			for (const modal of this.toastList) {
				if (modal.open) {
					reload = true;
					modal.open = false;
				}
			}
			if (reload) {
				this._updateHash();
			}
		}
	}
}
