import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAccessibilityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAccessibilityIcon = React.forwardRef<SVGSVGElement, TablerAccessibilityIconProps>(
	function TablerAccessibilityIcon(props, ref) {
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
				<path d="M17 4 A1 1 0 0 1 16 5 A1 1 0 0 1 15 4 A1 1 0 0 1 17 4" />
				<path d="m18 19 1-7-6 1" />
				<path d="m5 8 3-3 5.5 3-2.36 3.5" />
				<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
				<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAccessibilityIcon.displayName = "TablerAccessibilityIcon";
}
