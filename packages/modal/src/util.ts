import type { ModalStore } from "./ModalStore";

export function rand(prefix: string = "") {
	return prefix + Math.random().toString(32).substring(2);
}

export function isInput(element: EventTarget | Element | null) {
	if (element && "tagName" in element) {
		const name = element.tagName;
		if (
			["TEXTAREA", "INPUT", "SELECT", "DATALIST", "OPTION", "OPTGROUP", "PROGRESS"].includes(name) ||
			(name === "BUTTON" && (element as HTMLButtonElement).type === "submit") ||
			element.closest("[contenteditable]")
		) {
			return true;
		}
	}
	return false;
}

export function subscribeEscape(store: ModalStore, disabled: boolean = false) {
	if (typeof window === "undefined" || disabled) {
		return () => {};
	}

	function escape(e: Event) {
		if ((e as KeyboardEvent).key !== "Escape") {
			return;
		}
		const top = store.top;
		if (
			top &&
			top.open &&
			top.closable &&
			!top.disableEscapeButtonClose &&
			!top.lock &&
			!isInput(e.target) &&
			!isInput(document.activeElement)
		) {
			store.close(top.id);
		}
	}

	window.addEventListener("keyup", escape, false);
	return () => {
		window.removeEventListener("keyup", escape, false);
	};
}

export function mergeCallback(...callback: Function[]) {
	return () => {
		for (const cb of callback) {
			cb();
		}
	};
}

let requestAnimation = function requestAnimation(_: FrameRequestCallback) {
	return 0;
};
let cancelAnimation = function requestAnimation(_: number) {};

if (typeof window !== "undefined") {
	if (typeof window.requestAnimationFrame !== "function") {
		requestAnimation = (func) => window.setTimeout(func, 40);
		cancelAnimation = (id) => window.clearTimeout(id);
	} else {
		requestAnimation = window.requestAnimationFrame;
		cancelAnimation = window.cancelAnimationFrame;
	}
}

export { requestAnimation, cancelAnimation };
