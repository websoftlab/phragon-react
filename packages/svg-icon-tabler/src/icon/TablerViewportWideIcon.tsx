import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerViewportWideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerViewportWideIcon = React.forwardRef<SVGSVGElement, TablerViewportWideIconProps>(
	function TablerViewportWideIcon(props, ref) {
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
				<path d="M10 12h-7l3 -3m0 6l-3 -3" />
				<path d="M14 12h7l-3 -3m0 6l3 -3" />
				<path d="M3 6v-3h18v3" />
				<path d="M3 18v3h18v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerViewportWideIcon.displayName = "TablerViewportWideIcon";
}
