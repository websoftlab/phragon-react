import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEaseOutControlPointIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEaseOutControlPointIcon = React.forwardRef<SVGSVGElement, TablerEaseOutControlPointIconProps>(
	function TablerEaseOutControlPointIcon(props, ref) {
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
				<path d="M3 21s10 -16 18 -16" />
				<path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
				<path d="M7 5h2" />
				<path d="M14 5h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEaseOutControlPointIcon.displayName = "TablerEaseOutControlPointIcon";
}
