import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellMinusIcon = React.forwardRef<SVGSVGElement, TablerBellMinusIconProps>(
	function TablerBellMinusIcon(props, ref) {
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
				<path d="M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2" />
				<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
				<path d="M15 8h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBellMinusIcon.displayName = "TablerBellMinusIcon";
}
