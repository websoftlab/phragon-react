import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrafficLightsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrafficLightsOffIcon = React.forwardRef<SVGSVGElement, TablerTrafficLightsOffIconProps>(
	function TablerTrafficLightsOffIcon(props, ref) {
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
				<path d="M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" />
				<path d="M12 8a1 1 0 1 0 -1 -1" />
				<path d="M11.291 11.295a1 1 0 0 0 1.418 1.41" />
				<path d="M12 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrafficLightsOffIcon.displayName = "TablerTrafficLightsOffIcon";
}
