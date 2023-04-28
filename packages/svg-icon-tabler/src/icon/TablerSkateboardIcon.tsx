import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSkateboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSkateboardIcon = React.forwardRef<SVGSVGElement, TablerSkateboardIconProps>(
	function TablerSkateboardIcon(props, ref) {
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
				<path d="M17 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSkateboardIcon.displayName = "TablerSkateboardIcon";
}
