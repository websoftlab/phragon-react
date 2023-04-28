import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVectorBezier2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVectorBezier2Icon = React.forwardRef<SVGSVGElement, TablerVectorBezier2IconProps>(
	function TablerVectorBezier2Icon(props, ref) {
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
				<path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M7 5l7 0" />
				<path d="M10 19l7 0" />
				<path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVectorBezier2Icon.displayName = "TablerVectorBezier2Icon";
}
