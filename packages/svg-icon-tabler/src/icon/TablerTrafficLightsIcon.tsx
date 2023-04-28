import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrafficLightsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrafficLightsIcon = React.forwardRef<SVGSVGElement, TablerTrafficLightsIconProps>(
	function TablerTrafficLightsIcon(props, ref) {
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
				<path d="M7 2m0 5a5 5 0 0 1 5 -5h0a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h0a5 5 0 0 1 -5 -5z" />
				<path d="M12 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrafficLightsIcon.displayName = "TablerTrafficLightsIcon";
}
