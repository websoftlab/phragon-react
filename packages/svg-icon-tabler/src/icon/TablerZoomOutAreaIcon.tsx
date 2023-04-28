import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZoomOutAreaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZoomOutAreaIcon = React.forwardRef<SVGSVGElement, TablerZoomOutAreaIconProps>(
	function TablerZoomOutAreaIcon(props, ref) {
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
				<path d="M13 15h4" />
				<path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M22 22l-3 -3" />
				<path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
				<path d="M3 11v-1" />
				<path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
				<path d="M10 3h1" />
				<path d="M15 3h1a2 2 0 0 1 2 2v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZoomOutAreaIcon.displayName = "TablerZoomOutAreaIcon";
}
