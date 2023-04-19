import type { History, To } from "history";
import type { Navigator, NavigateOptions } from "@phragon/render-driver-react/app";
import type { URL } from "@phragon/make-url";
import type { Lexicon } from "@phragon/lexicon";
import type { AxiosInstance } from "axios";
import hotkeys from "hotkeys-js";
import { ActionService } from "@phragon-util/action-service";
import { makeUrl as makeUrlBase } from "@phragon/make-url";
import { useMemo, useEffect } from "react";
import { addRouteActions, addApiActions, addTranslateActions } from "./action";
import { createPath } from "./action/util";

export interface UseCreateActionServiceOptions {
	service?: ActionService;
	navigator?: Navigator;
	history?: History;
	makeUrl?: URL.Handler;
	homePage?: string;
	translator?: Lexicon.Translator;
	http?: AxiosInstance;
	apiName?: string;
}

function createNativeNavigator(): Navigator {
	return {
		createHref(to: To): string {
			return createPath(to);
		},
		back() {
			return history.back();
		},
		forward() {
			return history.forward();
		},
		go(delta: number) {
			return history.go(delta);
		},
		push(to: To, options: NavigateOptions = {}) {
			const { state = {} } = options;
			to = createPath(to);
			if (history.pushState) {
				history.pushState(state, document.title, to);
			} else {
				location.replace(to);
			}
		},
		replace(to: To, options: NavigateOptions = {}) {
			const { state = {} } = options;
			to = createPath(to);
			if (history.replaceState) {
				history.replaceState(state, document.title, to);
			} else {
				location.replace(to);
			}
		},
	};
}

function createNavigator(history: History): Navigator {
	return {
		createHref(to: To): string {
			return history.createHref(to);
		},
		back() {
			return history.back();
		},
		forward() {
			return history.forward();
		},
		go(delta: number) {
			return history.go(delta);
		},
		push(to: To, options: NavigateOptions = {}) {
			const { state = {} } = options;
			return history.push(to, state);
		},
		replace(to: To, options: NavigateOptions = {}) {
			const { state = {} } = options;
			return history.replace(to, state);
		},
	};
}

export function useCreateActionService(options: UseCreateActionServiceOptions = {}) {
	let {
		service = null,
		translator = null,
		http = null,
		apiName = "api",
		navigator = null,
		history = null,
		makeUrl: makeUrlProp = null,
		homePage = "/",
	} = options;

	const ctx = useMemo(() => service || new ActionService({ hotkeys }), [service]);
	const makeUrl: URL.Handler = useMemo(
		() =>
			makeUrlProp ||
			((options) => {
				if (Array.isArray(options)) {
					options = {
						path: options.length > 0 ? `/${options.join("/")}` : "/",
					};
				} else if (typeof options === "string") {
					options = {
						path: options,
					};
				}
				return makeUrlBase(options);
			}),
		[makeUrlProp]
	);

	useEffect(() => {
		if (navigator) {
			return addRouteActions(ctx, { navigator, makeUrl, homePage });
		}
		if (history) {
			return addRouteActions(ctx, { navigator: createNavigator(history), makeUrl, homePage });
		}
		if (typeof window !== "undefined") {
			return addRouteActions(ctx, { navigator: createNativeNavigator(), makeUrl, homePage });
		}
	}, [ctx, navigator, history, makeUrl]);

	useEffect(() => {
		if (http) {
			return addApiActions(ctx, { http, makeUrl, apiName });
		}
	}, [ctx, http, makeUrl, apiName]);

	useEffect(() => {
		if (translator) {
			return addTranslateActions(ctx, { translator });
		}
	}, [ctx, translator]);

	return ctx;
}
