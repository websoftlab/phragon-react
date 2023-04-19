import type { PopupManagerProps } from "./types";
import React from "react";
import { PopupManagerSafe } from "./PopupManagerSafe";
import { PopupStore } from "./PopupStore";
import { addPopupActions } from "./action";
import { useActionService } from "@phragon-react/action-service";

export function PopupManager(props: PopupManagerProps) {
	const store: PopupStore = React.useMemo(() => new PopupStore(), []);
	const service = useActionService();

	React.useEffect(() => addPopupActions(service, store), [service]);

	return <PopupManagerSafe store={store} {...props} />;
}
