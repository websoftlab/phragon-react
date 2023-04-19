import type { ModalManagerProps } from "@phragon-react/modal";
import { ModalManager, addModalInterception } from "@phragon-react/modal";
import { defined, component } from "@phragon/render-driver-react/loadable";
import React from "react";

export interface DashboardModalManagerProps extends ModalManagerProps {
	loadableComponentPrefix?: string;
}

export function DashboardModalManager(props: DashboardModalManagerProps) {
	const { loadableComponentPrefix = "modal-component::", ...rest } = props;

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

	return <ModalManager {...rest} />;
}
