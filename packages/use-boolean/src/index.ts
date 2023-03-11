import { useMemo, useState } from "react";

export interface UseBooleanHook {
	readonly isTrue: boolean;
	readonly isFalse: boolean;
	onToggle(): void;
	onTrue(): void;
	onFalse(): void;
}

export function useBoolean(def = false): UseBooleanHook {
	const [isTrueValue, setIsTrueValue] = useState(def);
	return useMemo(() => {
		let isTrue = isTrueValue;
		function set(value: boolean) {
			isTrue = value;
			setIsTrueValue(isTrue);
		}
		return {
			get isTrue() {
				return isTrue;
			},
			get isFalse() {
				return !isTrue;
			},
			onToggle() {
				set(!isTrue);
			},
			onTrue() {
				if (!isTrue) {
					set(true);
				}
			},
			onFalse() {
				if (isTrue) {
					set(false);
				}
			},
		};
	}, []);
}
