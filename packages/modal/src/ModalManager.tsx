import type { ModalManagerProps } from "./types";
import { ModalStore } from "./ModalStore";
import React from "react";
import { useApiContext } from "@phragon/render-driver-react/app";
import { component, defined } from "@phragon/render-driver-react/loadable";
import { useDashboard } from "@phragon-react/dashboard";
import { addModalActions } from "./action";
import { ModalManagerSafe } from "./ModalManagerSafe";
import { addModalInterception } from "./ModalComponent";

export function ModalManager(props: ModalManagerProps) {
	const { loadableComponentPrefix = "modal-component::", options = {}, ...rest } = props;
	const api = useApiContext();
	const store: ModalStore = React.useMemo(() => api.services.modal || new ModalStore(options), []);
	const dashboard = useDashboard();
	if (!api.services.modal) {
		api.services.modal = store;
	}

	React.useEffect(() => addModalActions(dashboard, store), []);
	React.useEffect(() => {
		function getName(name: string) {
			return loadableComponentPrefix + name;
		}
		return addModalInterception({
			has(name: string): boolean {
				return defined(getName(name));
			},
			get(name: string): React.ElementType {
				return component(getName(name));
			},
		});
	}, [loadableComponentPrefix]);

	return <ModalManagerSafe store={store} {...rest} />;
}
