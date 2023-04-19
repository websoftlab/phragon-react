import type { PopupManagerProps } from "@phragon-react/popup";
import { PopupManager, addPopupInterception } from "@phragon-react/popup";
import { defined, component } from "@phragon/render-driver-react/loadable";
import React from "react";

export interface DashboardPopupManagerProps extends PopupManagerProps {
	loadableComponentPrefix?: string;
}

export function DashboardPopupManager(props: DashboardPopupManagerProps) {
	const { loadableComponentPrefix = "popup-component::", ...rest } = props;

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

	return <PopupManager {...rest} />;
}
