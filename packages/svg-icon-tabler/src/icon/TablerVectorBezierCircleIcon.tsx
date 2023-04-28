import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVectorBezierCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVectorBezierCircleIcon = React.forwardRef<SVGSVGElement, TablerVectorBezierCircleIconProps>(
	function TablerVectorBezierCircleIcon(props, ref) {
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
				<path d="M3 10m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M17 10m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M10 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M19 10a5 5 0 0 0 -5 -5" />
				<path d="M19 14a5 5 0 0 1 -5 5" />
				<path d="M5 14a5 5 0 0 0 5 5" />
				<path d="M5 10a5 5 0 0 1 5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVectorBezierCircleIcon.displayName = "TablerVectorBezierCircleIcon";
}
