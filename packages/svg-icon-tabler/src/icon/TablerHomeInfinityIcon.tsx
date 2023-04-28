import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeInfinityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeInfinityIcon = React.forwardRef<SVGSVGElement, TablerHomeInfinityIconProps>(
	function TablerHomeInfinityIcon(props, ref) {
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
				<path d="M19 14v-2h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.75 1.032" />
				<path d="M15.536 17.586a2.123 2.123 0 0 0 -2.929 0a1.951 1.951 0 0 0 0 2.828c.809 .781 2.12 .781 2.929 0c.809 -.781 -.805 .778 0 0l1.46 -1.41l1.46 -1.419" />
				<path d="M15.54 17.582l1.46 1.42l1.46 1.41c.809 .78 -.805 -.779 0 0s2.12 .781 2.929 0a1.951 1.951 0 0 0 0 -2.828a2.123 2.123 0 0 0 -2.929 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeInfinityIcon.displayName = "TablerHomeInfinityIcon";
}
