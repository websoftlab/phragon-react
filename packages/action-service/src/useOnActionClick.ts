import type { To } from "history";
import type { ActionNS } from "@phragon-util/action-service";
import type { Lexicon } from "@phragon/lexicon";
import type { MouseEvent } from "react";
import { getActionObject } from "@phragon-util/action-service";
import { useActionService } from "./useActionService";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { confirmation as confirmationUtil, createPath } from "./action/util";

export type UseOnActionClickHandler<T = Element> = (event?: MouseEvent<T> | Event) => void;

export interface UseOnActionClickOptions {
	to?: To;
	action?: ActionNS.ActionType;
	onClick?: UseOnActionClickHandler;
	confirmation?: string | Lexicon.TranslateOptions;
}

export interface UseOnActionClickHook {
	external: boolean;
	href: string | null;
	wait: boolean;
	onClick: UseOnActionClickHandler;
}

type WaitMount = { mount: boolean; wait: boolean };

function mousePrevent(e?: MouseEvent | Event) {
	if (e) {
		e.preventDefault();
	}
}

function isAbort(dt: WaitMount, e?: MouseEvent | Event, onClick?: UseOnActionClickHandler | null) {
	if (!dt.mount) {
		return true;
	}
	if (dt.wait) {
		mousePrevent(e);
		return true;
	}
	if (onClick) {
		if (!e) {
			e = new Event("synthetic");
		}
		onClick(e);
		if (e.defaultPrevented) {
			return true;
		}
	}
	mousePrevent(e);
	return false;
}

export function useOnActionClick(options: UseOnActionClickOptions): UseOnActionClickHook {
	const ctx = useActionService();
	const { action = null, to = null, onClick = null, confirmation = null } = options;
	const id = useId();
	const [wait, setWait] = useState(false);
	const ref = useRef<WaitMount>({ mount: false, wait: false });

	useEffect(() => {
		ref.current.mount = true;
		return () => {
			ref.current.mount = false;
		};
	}, []);

	const hook = useMemo(() => {
		const external = typeof to === "string" && /^[a-z]+:/.test(to);

		const toGoto = () => {
			if (!to) {
				return;
			}
			if (ctx.hasAction("route.goto")) {
				ctx.emit("route.goto", { to });
			} else {
				location.assign(createPath(to));
			}
		};

		const toClick = () => {
			if (!action) {
				return toGoto();
			}

			const { name, props } = getActionObject(action);
			const isAwait = name === "api" || name === "api.req";

			if (isAwait) {
				ref.current.wait = true;
				if (ctx.hasAction("loader")) {
					ctx.emit("loader", { id: `action.${id}`, load: true });
				}

				let isWait = false;
				let waitId = window.setTimeout(() => {
					if (ref.current.wait) {
						isWait = true;
						waitId = 0;
						setWait(true);
					}
				}, 500);

				const toComplete = props.complete;
				props.complete = (...args: any[]) => {
					if (waitId) {
						window.clearTimeout(waitId);
						waitId = 0;
					}
					ref.current.wait = false;
					if (ctx.hasAction("loader")) {
						ctx.emit("loader", { id: `action.${id}`, load: false });
					}
					if (ref.current.mount && isWait) {
						setWait(false);
					}
					if (typeof toComplete === "function") {
						toComplete(...args);
					}
					toGoto();
				};
			}

			ctx.emit(name, props);
			if (!isAwait) {
				toGoto();
			}
		};

		let onClickHandler: UseOnActionClickHandler;

		if (confirmation) {
			onClickHandler = (event) => {
				if (!isAbort(ref.current, event, onClick)) {
					confirmationUtil(ctx, id, confirmation, toClick);
				}
			};
		} else {
			onClickHandler = (event) => {
				if (!isAbort(ref.current, event, onClick)) {
					toClick();
				}
			};
		}

		return {
			external,
			href: to ? createPath(to) : null,
			onClick: onClickHandler,
		};
	}, [id, to, action, onClick, confirmation]);

	return {
		...hook,
		wait,
	};
}
