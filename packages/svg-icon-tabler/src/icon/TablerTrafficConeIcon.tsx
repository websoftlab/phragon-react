import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrafficConeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrafficConeIcon = React.forwardRef<SVGSVGElement, TablerTrafficConeIconProps>(
	function TablerTrafficConeIcon(props, ref) {
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
				<path d="M4 20l16 0" />
				<path d="M9.4 10l5.2 0" />
				<path d="M7.8 15l8.4 0" />
				<path d="M6 20l5 -15h2l5 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrafficConeIcon.displayName = "TablerTrafficConeIcon";
}
