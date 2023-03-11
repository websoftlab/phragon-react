import type { PopupManagerProps } from "./types";
import React from "react";
import { PopupManagerSafe } from "./PopupManagerSafe";
import { useApiContext } from "@phragon/render-driver-react/app";
import { PopupStore } from "./PopupStore";
import { addPopupActions } from "./action";
import { useDashboard } from "@phragon-react/dashboard";
import { addPopupInterception } from "./PopupComponent";
import { component, defined } from "@phragon/render-driver-react/loadable";

export function PopupManager(props: PopupManagerProps) {
	const { loadableComponentPrefix = "popup-component::", ...rest } = props;
	const api = useApiContext();
	const store: PopupStore = React.useMemo(() => api.services.popup || new PopupStore(), []);
	const dashboard = useDashboard();
	if (!api.services.popup) {
		api.services.popup = store;
	}

	React.useEffect(() => addPopupActions(dashboard, store), []);
	React.useEffect(() => {
		function getName(name: string) {
			return loadableComponentPrefix + name;
		}
		return addPopupInterception({
			has(name: string): boolean {
				return defined(getName(name));
			},
			get(name: string): React.ElementType {
				return component(getName(name));
			},
		});
	}, [loadableComponentPrefix]);

	return <PopupManagerSafe store={store} {...rest} />;
}
