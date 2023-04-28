import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingWarehouseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingWarehouseIcon = React.forwardRef<SVGSVGElement, TablerBuildingWarehouseIconProps>(
	function TablerBuildingWarehouseIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M3 21v-13l9 -4l9 4v13" />
				<path d="M13 13h4v8h-10v-6h6" />
				<path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingWarehouseIcon.displayName = "TablerBuildingWarehouseIcon";
}
