import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSkateboardOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSkateboardOffIcon = React.forwardRef<SVGSVGElement, TablerSkateboardOffIconProps>(
	function TablerSkateboardOffIcon(props, ref) {
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
				<path d="M7 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
				<path d="M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSkateboardOffIcon.displayName = "TablerSkateboardOffIcon";
}
