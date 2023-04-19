import type { Modal } from "./types";
import { MobxStateValue } from "@phragon-util/mobx-state-value";
import { action, makeObservable, observable } from "mobx";
import { getDefaultModalComponentProps } from "./ModalComponent";

function getHash(item: Modal.Item) {
	const {
		id,
		open,
		size,
		lock,
		disableEscapeButtonClose,
		disableCloseButton,
		disableBackdropClose,
		component,
		props,
		title,
		closable,
	} = item;
	const { onPropsHash } = getDefaultModalComponentProps(component);
	let hash = `:/${component}--${id}.${open ? "y" : "n"}.${lock ? "l" : "u"}`;
	if (open) {
		hash += `.${closable ? "c" : "o"}.${size}.t-${JSON.stringify(title)}`;
		if (disableEscapeButtonClose) {
			hash += ".D-Esc";
		}
		if (disableCloseButton) {
			hash += ".D-Button";
		}
		if (disableBackdropClose) {
			hash += ".D-Back";
		}
		if (onPropsHash) {
			hash += `.${onPropsHash(props)}`;
		}
	}
	return hash;
}

function getIndex(store: ModalStore, id?: string) {
	if (id == null) {
		return store.modal.length - 1;
	}
	return store.modal.findIndex((item) => item.id === id);
}

function find(store: ModalStore, id?: string) {
	let index: number;
	if (id == null) {
		index = store.modal.length - 1;
	} else {
		index = store.modal.findIndex((item) => item.id === id);
	}
	if (index === -1) {
		return null;
	}
	return {
		index,
		modal: store.modal[index],
	};
}

export class ModalStore {
	readonly defaultSize: Modal.Size = "medium";
	readonly modal: Modal.Item[] = [];
	hash: string = "";

	private readonly _updateHash: () => void;
	private readonly _onClose: Record<string, Function | undefined> = Object.create(null);

	constructor(options: Modal.StoreOptions = {}) {
		const { size } = options;

		if (size) {
			this.defaultSize = size;
		}

		// observe
		makeObservable(this, {
			modal: observable,
			hash: observable,
			open: action,
			destroy: action,
		});

		this._updateHash = action(() => {
			this.hash = this.modal.reduce((previousValue, currentValue) => previousValue + getHash(currentValue), "");
		});
	}

	get top(): Modal.Item | null {
		const length = this.modal.length;
		return length === 0 ? null : this.modal[length - 1];
	}

	get length(): number {
		return this.modal.length;
	}

	open(options: Modal.OpenOptions): string {
		let {
			id,
			component,
			closable,
			size,
			title,
			action,
			value = {},
			onClose,
			disableBackdropClose,
			disableCloseButton,
			disableEscapeButtonClose,
			...rest
		} = options;
		if (id == null) {
			id = component;
		}
		if (!Array.isArray(action)) {
			action = action ? [action] : [];
		}
		this._onClose[id] = onClose;

		const def = getDefaultModalComponentProps(component);
		if (title == null) {
			title = def.title;
		}
		if (!size) {
			size = def.size || this.defaultSize;
		}
		if (typeof closable !== "boolean") {
			closable = def.closable !== false;
		}
		if (typeof disableBackdropClose !== "boolean") {
			disableBackdropClose = def.disableBackdropClose === true;
		}
		if (typeof disableCloseButton !== "boolean") {
			disableCloseButton = def.disableCloseButton === true;
		}
		if (typeof disableEscapeButtonClose !== "boolean") {
			disableEscapeButtonClose = def.disableEscapeButtonClose === true;
		}

		const latest = find(this, id);
		const modal: Modal.Item = {
			...rest,
			id,
			disableBackdropClose,
			disableCloseButton,
			disableEscapeButtonClose,
			component,
			title,
			closable,
			size,
			action,
			index: this.modal.length,
			state: latest ? latest.modal.state : new MobxStateValue(value),
			lock: latest ? latest.modal.lock : false,
			open: true,
		};

		if (latest == null) {
			this.modal.push(modal);
			this.hash += getHash(modal);
		} else {
			if (latest.modal.component === modal.component) {
				if (latest.index !== this.modal.length - 1) {
					this.modal.splice(latest.index, 1);
					this.modal.push(modal);
				} else {
					this.modal[latest.index] = modal;
				}
				this._updateHash();
				modal.state.setValue(value);
			} else {
				console.error("Duplicate modal ID, ignored", latest.modal, modal);
			}
		}

		return id;
	}

	isOpen(id: string): boolean {
		const item = find(this, id);
		return item ? item.modal.open : false;
	}

	close(id?: string): void {
		const item = find(this, id);
		if (item == null) {
			return;
		}
		const { modal } = item;
		if (!modal.open || modal.lock) {
			return;
		}
		modal.open = false;
		this._updateHash();
	}

	destroy(id: string) {
		const index = getIndex(this, id);
		if (index !== -1) {
			this.modal.splice(index, 1);
			this._updateHash();
			const func = this._onClose[id];
			if (typeof func === "function") {
				func();
				delete this._onClose[id];
			}
		}
	}

	closeAll(): void {
		if (this.modal.length) {
			let reload = false;
			for (const modal of this.modal) {
				if (modal.open && !modal.lock) {
					reload = true;
					modal.open = false;
				}
			}
			if (reload) {
				this._updateHash();
			}
		}
	}

	isLock(id: string): boolean {
		const index = getIndex(this, id);
		return index === -1 ? false : this.modal[index].lock;
	}

	lock(value: boolean, id: string): void {
		const index = getIndex(this, id);
		if (index !== -1) {
			const modal = this.modal[index];
			if (modal.lock !== value) {
				modal.lock = value;
				this._updateHash();
			}
		}
	}
}
