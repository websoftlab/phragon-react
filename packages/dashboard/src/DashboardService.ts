import type { API } from "@phragon/app";
import type { ElementType } from "react";
import type { URL } from "@phragon/make-url";
import type { PatternInterface } from "@phragon/path-to-pattern";
import type { ActionNS, ActionService } from "@phragon-util/action-service";
import { action, makeObservable, observable, computed } from "mobx";
import { pattern } from "@phragon/make-url";

const STORE_KEY = Symbol();
const PATTERN_KEY = Symbol();
const LD_KEY = Symbol();

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

	constructor(public readonly actionService: ActionService, public readonly api: API.ApiInterface<ElementType>) {
		["names", "allNames", "actions"].forEach((key) => {
			Object.defineProperty(this, key, {
				get() {
					return actionService[key as keyof ActionService];
				},
			});
		});

		["emit", "addActions", "addAction", "hasAction", "removeAction", "wrapAction"].forEach((key) => {
			Object.defineProperty(this, key, {
				value(...args: any[]) {
					return (actionService[key as keyof ActionService] as Function)(...args);
				},
			});
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

	readonly names!: string[];
	readonly allNames!: string[];
	readonly actions!: ActionNS.Action[];

	emit!: <Prop extends {} = any, Result = void>(name: string, props?: Prop) => Result;
	subscribe!: <Prop extends {} = any>(listener: ActionNS.Listener<Prop>) => () => void;
	addActions!: (list: Record<string, ActionNS.ActionHandler | ActionNS.ActionOptions>) => () => void;
	addAction!: <Prop extends {} = any, Result = void>(
		name: string,
		action: ActionNS.ActionHandler<Prop, Result> | ActionNS.ActionOptions<Prop, Result>
	) => () => void;
	hasAction!: (name: string) => boolean;
	removeAction!: (name: string) => void;
	wrapAction!: <Prop extends {} = any>(
		originName: string,
		name: string,
		props?: Prop,
		options?: Omit<ActionNS.ActionOptions, "action">
	) => () => void;

	hasUrlName(name: string) {
		name = normalizePatternName(name);
		return pattern.has(name);
	}

	makeUrl(name: string, params: any = {}, options: Omit<URL.Options, "name" | "path"> = {}) {
		name = normalizePatternName(name);
		if (!pattern.has(name)) {
			name = "dashboard:web";
		}
		return this.api.makeUrl({
			...options,
			name,
			params,
			pattern,
		});
	}
}
