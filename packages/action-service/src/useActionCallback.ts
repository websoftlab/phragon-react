import type { ActionNS } from "@phragon-util/action-service";
import type { MouseEvent } from "react";
import { emitAction } from "@phragon-util/action-service";
import { useCallback } from "react";
import { useActionService } from "./useActionService";

export function useActionCallback<T = Element>(
	action?: ActionNS.ActionType,
	prevented: boolean = false
): (e?: MouseEvent<T>) => void {
	const service = useActionService();
	return useCallback(
		(e?: MouseEvent<T>) => {
			if (!action) {
				return;
			}
			if (e && prevented) {
				e.preventDefault();
			}
			if (service) {
				emitAction(service, action);
			}
		},
		[action, prevented]
	);
}
