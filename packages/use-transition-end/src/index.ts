import type { MutableRefObject, Dispatch, SetStateAction } from "react";
import { useMemo, useRef, useState, useEffect } from "react";

type VoidFunc = () => void;

export interface UseTransitionEndHook<Elm extends Element> {
	ref: MutableRefObject<Elm | null>;
	isExit: boolean;
	onUpdate: VoidFunc;
}

interface TransitionManager {
	readonly isExit: boolean;
	setIsOpen(value: boolean): void;
	setFallbackTimeout(value: number): void;
	setOnExit(value: VoidFunc | undefined | null): void;
	setOnExitCapture(value: VoidFunc | undefined | null): void;
	onMount(): VoidFunc;
	onUpdate(): void;
	onFallbackStart(): VoidFunc;
}

export interface UseTransitionEndOptions {
	isOpen: boolean;
	onExit?: () => void;
	onExitCapture?: () => void;
	fallbackTimeout?: number;
}

let requestAnimation = (_: FrameRequestCallback) => {};
if (typeof window !== "undefined") {
	requestAnimation =
		typeof window.requestAnimationFrame !== "function"
			? (func) => window.setTimeout(func, 40)
			: window.requestAnimationFrame;
}

function createManager<Elm extends Element>(
	isOpen: boolean,
	ref: MutableRefObject<Elm | null>,
	forceUpdate: Dispatch<SetStateAction<number>>
) {
	let fallbackId = 0;
	let fallbackTimeout = 1000;
	let isExit: boolean = !isOpen;
	let isMount: boolean = false;
	let elm: Elm | null = null;
	let onExit: VoidFunc | null = null;
	let onExitCapture: VoidFunc | null = null;

	const properties: string[] = [];

	function fallbackStop() {
		if (fallbackId) {
			window.clearTimeout(fallbackId);
			fallbackId = 0;
		}
	}

	function endExit() {
		fallbackStop();
		if (!isOpen && !isExit) {
			isExit = true;
			if (onExitCapture) {
				onExitCapture();
			} else {
				forceUpdate((value) => {
					if (++value < Number.MAX_SAFE_INTEGER) {
						return value;
					} else {
						return 0;
					}
				});
			}
			if (onExit) {
				onExit();
			}
		}
	}

	const IsEnd: Record<string, boolean> = {};

	function transitionEventEnd(name: string) {
		IsEnd[name] = false;
		const index = properties.indexOf(name);
		if (index === -1) {
			return;
		}
		properties.splice(index, 1);
		if (properties.length === 0 && !isOpen) {
			endExit();
		}
	}

	function transitionEvent(event: Event) {
		const { type } = event;
		const name = (event as TransitionEvent).propertyName;
		switch (type) {
			case "transitionrun":
				IsEnd[name] = false;
				break;
			case "transitionstart":
				if (!properties.includes(name)) {
					properties.push(name);
				}
				break;
			case "transitioncancel":
				IsEnd[name] = true;
				requestAnimation(() => {
					if (IsEnd[name]) {
						transitionEventEnd(name);
					}
				});
				break;
			default:
				transitionEventEnd(name);
				break;
		}
	}

	function listen(type: string, add: 1 | 0) {
		if (elm) {
			elm[add ? "addEventListener" : "removeEventListener"](type, transitionEvent, false);
		}
	}

	function addEvent() {
		if (elm === ref.current) {
			return;
		}
		fallbackStop();
		removeEvent();
		elm = ref.current;
		if (elm && isMount) {
			listen("transitionrun", 1);
			listen("transitionstart", 1);
			listen("transitioncancel", 1);
			listen("transitionend", 1);
		}
	}

	function removeEvent() {
		properties.length = 0;
		if (elm) {
			listen("transitionrun", 0);
			listen("transitionstart", 0);
			listen("transitioncancel", 0);
			listen("transitionend", 0);
			elm = null;
		}
	}

	return {
		get isExit() {
			return isExit;
		},
		setIsOpen(value) {
			if (isOpen === value) {
				return;
			}
			isOpen = value;
			if (isOpen) {
				isExit = false;
				fallbackStop();
			}
		},
		setFallbackTimeout(value) {
			fallbackTimeout = value;
		},
		setOnExit(value: VoidFunc | undefined | null) {
			onExit = typeof value === "function" ? value : null;
		},
		setOnExitCapture(value: VoidFunc | undefined | null) {
			onExitCapture = typeof value === "function" ? value : null;
		},
		onMount() {
			isMount = true;
			addEvent();
			return () => {
				isMount = false;
				removeEvent();
			};
		},
		onUpdate() {
			addEvent();
		},
		onFallbackStart() {
			fallbackStop();
			fallbackId = window.setTimeout(endExit, fallbackTimeout);
			return fallbackStop;
		},
	} as TransitionManager;
}

export function useTransitionEnd<Elm extends Element = Element>(
	options: UseTransitionEndOptions
): UseTransitionEndHook<Elm> {
	const { isOpen, onExit, onExitCapture, fallbackTimeout = 500 } = options;
	const ref = useRef<Elm | null>(null);
	const [, forceUpdate] = useState(0);
	const mgr: TransitionManager = useMemo<TransitionManager>(() => createManager<Elm>(isOpen, ref, forceUpdate), []);

	mgr.setIsOpen(isOpen);
	mgr.setOnExit(onExit);
	mgr.setOnExitCapture(onExitCapture);
	mgr.setFallbackTimeout(fallbackTimeout);

	useEffect(() => mgr.onMount(), []);
	useEffect(() => {
		if (isOpen) {
			mgr.onUpdate();
		} else if (!mgr.isExit) {
			return mgr.onFallbackStart();
		}
	}, [isOpen]);

	return {
		ref,
		isExit: mgr.isExit,
		onUpdate: mgr.onUpdate,
	};
}
