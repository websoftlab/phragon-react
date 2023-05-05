import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMountainSnowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMountainSnowIcon = React.forwardRef<SVGSVGElement, TablerMountainSnowIconProps>(
	function TablerMountainSnowIcon(props, ref) {
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
				<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
				<path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMountainSnowIcon.displayName = "TablerMountainSnowIcon";
}
