import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWarehouseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWarehouseIcon = React.forwardRef<SVGSVGElement, TablerWarehouseIconProps>(
	function TablerWarehouseIcon(props, ref) {
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
				<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
				<path d="M6 18h12" />
				<path d="M6 14h12" />
				<path d="M6 10 H18 V22 H6 V10 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWarehouseIcon.displayName = "TablerWarehouseIcon";
}
