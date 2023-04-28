import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLassoPolygonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLassoPolygonIcon = React.forwardRef<SVGSVGElement, TablerLassoPolygonIconProps>(
	function TablerLassoPolygonIcon(props, ref) {
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
				<path d="M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" />
				<path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 17c0 1.42 .316 2.805 1 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLassoPolygonIcon.displayName = "TablerLassoPolygonIcon";
}
