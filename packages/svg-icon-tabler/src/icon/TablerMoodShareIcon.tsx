import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodShareIcon = React.forwardRef<SVGSVGElement, TablerMoodShareIconProps>(
	function TablerMoodShareIcon(props, ref) {
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
				<path d="M20.942 13.018a9 9 0 1 0 -8.942 7.982" />
				<path d="M9 10h.01" />
				<path d="M15 10h.01" />
				<path d="M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodShareIcon.displayName = "TablerMoodShareIcon";
}
