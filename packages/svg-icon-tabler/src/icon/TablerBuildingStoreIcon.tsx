import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingStoreIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingStoreIcon = React.forwardRef<SVGSVGElement, TablerBuildingStoreIconProps>(
	function TablerBuildingStoreIcon(props, ref) {
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
				<path d="M3 21l18 0" />
				<path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
				<path d="M5 21l0 -10.15" />
				<path d="M19 21l0 -10.15" />
				<path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingStoreIcon.displayName = "TablerBuildingStoreIcon";
}
