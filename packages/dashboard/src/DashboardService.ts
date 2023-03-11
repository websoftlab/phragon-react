import type { API } from "@phragon/app";
import type { ElementType } from "react";
import type { KeyHandler } from "hotkeys-js";
import type { URL } from "@phragon/make-url";
import type { PatternInterface } from "@phragon/path-to-pattern";
import { action, makeObservable, observable, computed } from "mobx";
import { isPlainObject } from "@phragon-util/plain-object";
import { warningOnce } from "@phragon-util/proof";
import { pathToPattern } from "@phragon/path-to-pattern";

export type DashboardServiceActionHandler<P = any, R = void> = (props: P, name: string) => R;

export interface DashboardServiceActionOptions<P = any, R = any> {
	action(props: P, name: string): R;
	title?: string | (() => string);
	description?: string | (() => string);
	hotkey?: string;
	hidden?: boolean;
}

const hotkeySymbol = Symbol.for("hotkey");
const STORE_KEY = Symbol();
const PATTERN_KEY = Symbol();
const LD_KEY = Symbol();

function def(service: DashboardService, name: string) {
	return service[STORE_KEY].hasOwnProperty(name);
}

function store(service: DashboardService) {
	return service[STORE_KEY];
}

function getIs(test: Record<string | symbol, boolean>) {
	let dirty = false;
	for (const key in test) {
		if (test[key]) {
			dirty = true;
		}
	}
	return dirty;
}

function setIs(node: Record<string | symbol, boolean>, value: boolean, name?: string | symbol) {
	node[name || LD_KEY] = value;
}

function isOption(object: any): object is DashboardServiceActionOptions {
	return isPlainObject(object) && typeof object.action === "function";
}

function normalizePatternName(name?: string) {
	if (typeof name !== "string") {
		return "dashboard:web";
	}
	return name.startsWith("dashboard:") ? name : `dashboard:web.${name}`;
}

export class DashboardService {
	badge: Record<string, number | undefined> = {};
	active: Record<string, boolean | undefined> = {};
	dirty: Record<string | symbol, boolean> = {};
	loader: Record<string | symbol, boolean> = {};

	[PATTERN_KEY]: Record<string, PatternInterface> = {};
	[STORE_KEY]: Record<
		string,
		{
			readonly name: string;
			readonly title: string;
			readonly description: string | undefined;
			hidden: boolean;
			action: Function;
			destroy: Function;
			wrapper?: string;
		}
	> = {};

	constructor(public readonly api: API.ApiInterface<ElementType>) {
		const homePage: string = api.app.state.dashboard?.path || "/";
		const patterns: Record<string, string> = api.app.state.dashboard?.patterns || {};

		if (!patterns["dashboard:web"]) patterns["dashboard:web"] = homePage === "/" ? "/*" : `${homePage}/*`;
		if (!patterns["dashboard:api"]) patterns["dashboard:api"] = homePage === "/" ? "/_api/*" : `${homePage}/_api/*`;

		Object.keys(patterns).forEach((name) => {
			this[PATTERN_KEY][name] = pathToPattern(patterns[name]);
		});

		makeObservable(this, {
			badge: observable,
			active: observable,
			dirty: observable,
			loader: observable,
			setActive: action,
			setBadge: action,
			setDirty: action,
			setIsLoading: action,
			documentDirty: computed,
			documentIsLoading: computed,
		});
	}

	get documentDirty() {
		return getIs(this.dirty);
	}

	get documentIsLoading() {
		return getIs(this.loader);
	}

	setDirty(value: boolean, name?: string | symbol) {
		setIs(this.dirty, value, name);
	}

	setIsLoading(value: boolean, name?: string | symbol) {
		setIs(this.loader, value, name);
	}

	hasActive(name: string): boolean {
		return typeof this.active[name] === "boolean";
	}

	setActive(name: string, value?: boolean | undefined | null): void {
		if (value == null) {
			delete this.active[name];
		} else {
			this.active[name] = value;
		}
	}

	getActive(name: string): boolean {
		return this.active[name] || false;
	}

	hasBadge(name: string): boolean {
		return typeof this.badge[name] === "number";
	}

	setBadge(name: string, value?: number | undefined | null): void {
		if (value == null) {
			delete this.badge[name];
		} else {
			this.badge[name] = value;
		}
	}

	getBadge(name: string): number {
		return this.badge[name] || 0;
	}

	emit<P = any, R = void>(name: string, props?: P): R {
		if (!def(this, name)) {
			throw new Error(`The '${name}' action is not defined`);
		}
		return store(this)[name].action(props, name);
	}

	addActions(list: Record<string, DashboardServiceActionHandler | DashboardServiceActionOptions>) {
		const undo = Object.keys(list).map((name) => this.addAction(name, list[name]));
		return () => {
			undo.forEach((cb) => cb());
		};
	}

	addAction<P = any, R = void>(
		name: string,
		action: DashboardServiceActionHandler<P, R> | DashboardServiceActionOptions<P, R>
	) {
		let opts: Omit<DashboardServiceActionOptions, "action"> = {};
		if (isOption(action)) {
			const { action: cb, ...rest } = action;
			action = cb;
			opts = rest;
		}

		if (typeof action !== "function") {
			throw new Error("Action must be function");
		}

		const destroyList: Function[] = [];

		let { title, hotkey, description, hidden } = opts;
		if (!title) {
			title = `[${name}]`;
		}
		if (typeof hidden !== "boolean") {
			hidden = !!hotkey;
		}

		// hotkey
		const hotkeys = this.api.services.hotkeys;
		if (hotkey && hotkeys) {
			const hotkeyHandler: KeyHandler = (keyboardEvent) => {
				if (def(this, name)) {
					keyboardEvent.preventDefault();
					this.emit(name, { [hotkeySymbol]: true });
				}
			};
			hotkeys(hotkey, hotkeyHandler);
			destroyList.push(() => {
				hotkeys.unbind(hotkey as string, hotkeyHandler);
			});
		}

		const destroy = () => {
			if (def(this, name) && store(this)[name].action === action) {
				delete store(this)[name];
				destroyList.forEach((close) => close());
			}
		};

		store(this)[name] = {
			name,
			get title() {
				return typeof title === "function" ? title() : (title as string);
			},
			get description() {
				return typeof description === "function" ? description() : description;
			},
			hidden,
			action,
			destroy,
		};

		return destroy;
	}

	hasAction(name: string): boolean {
		return def(this, name);
	}

	removeAction(name: string) {
		if (def(this, name)) {
			store(this)[name].destroy();
		}
	}

	wrapAction<P = any>(
		originName: string,
		name: string,
		props?: P,
		options: Omit<DashboardServiceActionOptions, "action"> = {}
	): () => void {
		if (!def(this, originName)) {
			warningOnce(`action-not-found:${originName}`, false, `The ${originName} action is not defined!`);
			return () => {};
		}

		if (originName === name) {
			throw new Error("The name of the original action cannot be equivalent to the name of the wrapper action");
		}

		const destroyList: Function[] = [];
		const origin = store(this)[originName];
		const last = def(this, name) ? store(this)[name] : false;
		let { title, hotkey, description, hidden } = options;

		if (!title) {
			title = origin.title;
		}
		if (!description) {
			description = origin.description;
		}
		if (typeof hidden !== "boolean") {
			hidden = origin.hidden;
		}

		// hotkey
		const hotkeys = this.api.services.hotkeys;
		if (hotkey && hotkeys) {
			const hotkeyHandler: KeyHandler = (keyboardEvent) => {
				if (def(this, name)) {
					keyboardEvent.preventDefault();
					this.emit(name, { [hotkeySymbol]: true, ...props });
				}
			};
			hotkeys(hotkey, hotkeyHandler);
			destroyList.push(() => {
				hotkeys.unbind(hotkey as string, hotkeyHandler);
			});
		}

		const action = (andProps: any, name: string) => {
			if (!def(this, originName)) {
				throw new Error(`The '${originName}' action is not defined`);
			}
			const callProps = {
				...props,
				...andProps,
			};
			return origin.action(callProps, name);
		};

		const destroy = () => {
			if (def(this, name) && store(this)[name].action === action) {
				if (last === false) {
					delete store(this)[name];
				} else {
					store(this)[name] = last;
				}
				destroyList.forEach((close) => close());
			}
		};

		store(this)[name] = {
			name,
			get title() {
				return title ? (typeof title === "function" ? title() : title) : origin.title;
			},
			get description() {
				return description
					? typeof description === "function"
						? description()
						: description
					: origin.description;
			},
			hidden,
			wrapper: originName,
			action,
			destroy,
		};

		return destroy;
	}

	hasUrlName(name: string) {
		return this[PATTERN_KEY].hasOwnProperty(name);
	}

	makeUrl(name: string, params: any = {}, options: Omit<URL.Options, "name" | "path"> = {}) {
		name = normalizePatternName(name);
		if (!this.hasUrlName(name)) {
			name = "dashboard:web";
		}
		const path = this[PATTERN_KEY][name].matchToPath({
			data: params,
		});
		return this.api.makeUrl({
			...options,
			path,
		});
	}
}
