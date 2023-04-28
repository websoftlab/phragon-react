import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVectorBezierIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVectorBezierIcon = React.forwardRef<SVGSVGElement, TablerVectorBezierIconProps>(
	function TablerVectorBezierIcon(props, ref) {
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
				<path d="M3 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M17 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M10 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M10 8.5a6 6 0 0 0 -5 5.5" />
				<path d="M14 8.5a6 6 0 0 1 5 5.5" />
				<path d="M10 8l-6 0" />
				<path d="M20 8l-6 0" />
				<path d="M3 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M21 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVectorBezierIcon.displayName = "TablerVectorBezierIcon";
}
