import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodHeartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodHeartIcon = React.forwardRef<SVGSVGElement, TablerMoodHeartIconProps>(
	function TablerMoodHeartIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -8.012 8.946" />
				<path d="M9 10h.01" />
				<path d="M15 10h.01" />
				<path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99" />
				<path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodHeartIcon.displayName = "TablerMoodHeartIcon";
}
