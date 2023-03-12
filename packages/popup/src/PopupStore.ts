import type { Popup } from "./types";
import { action, makeObservable, observable } from "mobx";
import { getDefaultPopupComponentProps } from "./PopupComponent";
import { MobxStateValue } from "@phragon-react/mobx-state-value";

function getHash(item: Popup.Item) {
	const { id, open, component, props } = item;
	const { onPropsHash } = getDefaultPopupComponentProps(component);
	let hash = `:/${component}--${id}.${open ? "y" : "n"}`;
	if (open && onPropsHash) {
		hash += `.${onPropsHash(props)}`;
	}
	return hash;
}

function findPopup(store: PopupStore, id: string) {
	const index = store.popup.findIndex((item) => item.id === id);
	if (index === -1) {
		return null;
	} else {
		return { found: true, index, popup: store.popup[index] };
	}
}

export class PopupStore {
	popup: Popup.Item[] = [];
	hash: string = "";

	private readonly _onClose: Record<string, Function | undefined> = Object.create(null);
	private readonly _updateHash: () => void;

	constructor() {
		// observe
		makeObservable(this, {
			popup: observable.shallow,
			hash: observable,
			open: action,
			reOpen: action,
			close: action,
			closeAll: action,
		});
		this._updateHash = action(() => {
			this.hash = this.popup.reduce((previousValue, currentValue) => previousValue + getHash(currentValue), "");
		});
	}

	reOpen(id: string) {
		const node = findPopup(this, id);
		if (node && !node.popup.open) {
			node.popup.open = true;
			this._updateHash();
		}
	}

	open(options: Popup.OpenOptions): string {
		let { id, component, options: opt = {}, value = {}, onClose, ...rest } = options;
		if (id == null) {
			id = component;
		}

		this._onClose[id] = onClose;
		const { singleton = false } = getDefaultPopupComponentProps(component);
		const index = this.popup.findIndex((item) => (singleton ? item.component === component : item.id === id));
		const popup: Popup.Item = {
			...rest,
			id,
			component,
			state: index === -1 ? new MobxStateValue(value) : this.popup[index].state,
			options: opt,
			open: true,
			index: this.popup.length,
		};

		if (index === -1) {
			this.popup.push(popup);
			this.hash += getHash(popup);
		} else {
			const latest = this.popup[index];
			if (latest.component === popup.component) {
				if (index !== this.popup.length - 1) {
					this.popup.splice(index, 1);
					this.popup.push(popup);
				} else {
					this.popup[index] = popup;
				}
				this._updateHash();
				popup.state.setValue(value);
			} else {
				console.error("Duplicate popup ID, ignored", latest, popup);
			}
		}

		return id;
	}

	isOpen(id: string): boolean {
		const node = findPopup(this, id);
		return node ? node.popup.open : false;
	}

	close(id: string): void {
		const node = findPopup(this, id);
		if (node && node.popup.open) {
			node.popup.open = false;
			this._updateHash();
		}
	}

	destroy(id: string) {
		const node = findPopup(this, id);
		if (node) {
			this.popup.splice(node.index, 1);
			this._updateHash();
			const func = this._onClose[id];
			if (typeof func === "function") {
				func();
				delete this._onClose[id];
			}
		}
	}

	closeAll(): void {
		if (this.popup.length) {
			let isUpdate = false;
			for (const popup of this.popup) {
				if (!popup.open) {
					popup.open = false;
					isUpdate = true;
				}
			}
			if (isUpdate) {
				this._updateHash();
			}
		}
	}
}
