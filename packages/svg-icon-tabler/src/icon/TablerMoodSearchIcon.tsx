import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSearchIcon = React.forwardRef<SVGSVGElement, TablerMoodSearchIconProps>(
	function TablerMoodSearchIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9 9" />
				<path d="M9 10h.01" />
				<path d="M15 10h.01" />
				<path d="M9.5 15c.658 .672 1.56 1 2.5 1" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodSearchIcon.displayName = "TablerMoodSearchIcon";
}
