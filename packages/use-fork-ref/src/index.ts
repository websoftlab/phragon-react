import type { MutableRefObject, Ref } from "react";
import { useMemo } from "react";

export function setRef<Value>(ref: Ref<Value>, value: Value) {
	if (ref != null) {
		if (typeof ref === "function") {
			ref(value);
		} else {
			(ref as MutableRefObject<Value>).current = value;
		}
	}
}

export function useForkRef<T = any>(refA: Ref<T>, refB: Ref<T>) {
	/**
	 * This will create a new function if the ref props change and are defined.
	 * This means react will call the old forkRef with `null` and the new forkRef
	 * with the ref. Cleanup naturally emerges from this behavior
	 */
	return useMemo(
		() => (refValue: T) => {
			setRef(refA, refValue);
			setRef(refB, refValue);
		},
		[refA, refB]
	);
}
