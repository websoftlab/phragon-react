import type { ToastManagerProps } from "./types";
import { ToastManagerSafe } from "./ToastManagerSafe";
import { addToastActions } from "./action";
import React from "react";
import { useActionService } from "@phragon-react/action-service";
import { ToastStore } from "./ToastStore";

export function ToastManager(props: ToastManagerProps) {
	const { options = {}, ...rest } = props;
	const store: ToastStore = React.useMemo(() => new ToastStore(options), []);
	const service = useActionService();

	React.useEffect(() => addToastActions(service, store), [service, store]);
	return <ToastManagerSafe store={store} {...rest} />;
}
