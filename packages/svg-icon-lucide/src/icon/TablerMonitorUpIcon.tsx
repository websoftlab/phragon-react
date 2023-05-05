import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMonitorUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMonitorUpIcon = React.forwardRef<SVGSVGElement, TablerMonitorUpIconProps>(
	function TablerMonitorUpIcon(props, ref) {
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
				<path d="M4 3 H20 A2 2 0 0 1 22 5 V15 A2 2 0 0 1 20 17 H4 A2 2 0 0 1 2 15 V5 A2 2 0 0 1 4 3 z" />
				<path d="M8 21 L16 21" />
				<path d="M12 17 L12 21" />
				<path d="M12 13V7" />
				<path d="m9 10 3-3 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMonitorUpIcon.displayName = "TablerMonitorUpIcon";
}
