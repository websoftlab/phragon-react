import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarbellOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarbellOffIcon = React.forwardRef<SVGSVGElement, TablerBarbellOffIconProps>(
	function TablerBarbellOffIcon(props, ref) {
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
				<path d="M2 12h1" />
				<path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
				<path d="M6.298 6.288a1 1 0 0 0 -.298 .712v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8" />
				<path d="M9 12h3" />
				<path d="M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523 -.11 .704 -.29m.296 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4" />
				<path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" />
				<path d="M22 12h-1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarbellOffIcon.displayName = "TablerBarbellOffIcon";
}
