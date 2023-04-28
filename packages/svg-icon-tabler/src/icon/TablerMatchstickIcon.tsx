import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMatchstickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMatchstickIcon = React.forwardRef<SVGSVGElement, TablerMatchstickIconProps>(
	function TablerMatchstickIcon(props, ref) {
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
				<path d="M3 21l14 -9" />
				<path d="M17 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M17 3l3.62 7.29a4.007 4.007 0 0 1 -.764 4.51a4 4 0 0 1 -6.493 -4.464l3.637 -7.336z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMatchstickIcon.displayName = "TablerMatchstickIcon";
}
