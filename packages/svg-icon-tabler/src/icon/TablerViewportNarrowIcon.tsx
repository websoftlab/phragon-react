import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerViewportNarrowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerViewportNarrowIcon = React.forwardRef<SVGSVGElement, TablerViewportNarrowIconProps>(
	function TablerViewportNarrowIcon(props, ref) {
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
				<path d="M3 12h7l-3 -3m0 6l3 -3" />
				<path d="M21 12h-7l3 -3m0 6l-3 -3" />
				<path d="M9 6v-3h6v3" />
				<path d="M9 18v3h6v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerViewportNarrowIcon.displayName = "TablerViewportNarrowIcon";
}
