import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStereoGlassesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStereoGlassesIcon = React.forwardRef<SVGSVGElement, TablerStereoGlassesIconProps>(
	function TablerStereoGlassesIcon(props, ref) {
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
				<path d="M8 3h-2l-3 9" />
				<path d="M16 3h2l3 9" />
				<path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
				<path d="M7 16h1" />
				<path d="M16 16h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStereoGlassesIcon.displayName = "TablerStereoGlassesIcon";
}
