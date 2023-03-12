import type { To } from "@phragon/render-driver-react/app";
import type { Dashboard } from "@phragon/plugin-dashboard";
import type { Lexicon } from "@phragon/lexicon";
import type { MouseEvent, MouseEventHandler } from "react";
import type { Modal } from "@phragon-react/modal";
import { useNavigator } from "@phragon/render-driver-react/app";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useDashboard } from "./context";
import { getActionObject } from "./util";

export interface UseActionClickOptions {
	to?: To;
	goto?: boolean;
	action?: Dashboard.Action;
	confirmation?: string | Lexicon.TranslateOptions;
	onClick?: MouseEventHandler;
}

export interface UseActionClickHook {
	to: To | null;
	external: boolean;
	onlyAction: boolean;
	wait: boolean;
	onClick: MouseEventHandler;
}

function isAbort(e: MouseEvent, onClick?: MouseEventHandler) {
	if (onClick) {
		onClick(e);
		if (e.defaultPrevented) {
			return true;
		}
	}
	return false;
}

export function useActionClick(option: UseActionClickOptions): UseActionClickHook {
	const { to = null, goto = true, action, onClick, confirmation } = option;
	const id = useId();
	const navigator = useNavigator();
	const dashboard = useDashboard();
	const [wait, setWait] = useState(false);
	const ref = useRef({ mount: false, wait: false });

	useEffect(() => {
		ref.current.mount = true;
		return () => {
			ref.current.mount = false;
		};
	}, []);

	const hook = useMemo(() => {
		const onlyAction = to == null;
		const external = typeof to === "string" && /^(?:email|tel|https?):/.test(to);

		const end = (awaiter = false) => {
			if ((goto || awaiter) && to) {
				if (external) {
					location.assign(to as string);
				} else {
					navigator.push(to);
				}
			}
		};

		const toClick = (event: MouseEvent, awaiter = false) => {
			if (!action) {
				return;
			}

			if (onlyAction && !event.defaultPrevented) {
				event.preventDefault();
			}

			if (ref.current.wait || !ref.current.mount) {
				return;
			}

			const { name, props } = getActionObject(action);
			const isAwait = name === "api" || name === "api.req";

			if (isAwait) {
				ref.current.wait = true;
				dashboard.setIsLoading(true, `action.${id}`);

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
					dashboard.setIsLoading(false, `action.${id}`);
					if (ref.current.mount && isWait) {
						setWait(false);
					}
					if (typeof toComplete === "function") {
						toComplete(...args);
					}
					end(true);
				};
			}

			dashboard.emit(name, props);
			if (!isAwait) {
				end(awaiter);
			}
		};

		let onClickHandler: MouseEventHandler;

		if (confirmation) {
			const app = dashboard.api.app;
			onClickHandler = (event) => {
				if (!ref.current.wait && isAbort(event, onClick)) {
					return;
				}

				event.preventDefault();
				if (ref.current.wait) {
					return;
				}

				let text = confirmation;
				if (typeof text !== "string") {
					text = app.translator(text);
				}

				dashboard.emit<Modal.OpenConfirmActionProps>("modal.confirm", {
					id,
					text,
					action: {
						id: "close",
						name: app.translate("button.ok", "Ok"),
						variant: "primary",
						onClick() {
							dashboard.emit("modal.close", { id });
							toClick(event, true);
						},
					},
				});
			};
		} else {
			onClickHandler = (event) => {
				if (ref.current.wait || isAbort(event, onClick)) {
					return;
				}
				toClick(event);
			};
		}

		return {
			to,
			external,
			onlyAction,
			onClick: onClickHandler,
		};
	}, [id, to, goto, action, onClick, confirmation]);

	return {
		...hook,
		wait,
	};
}
