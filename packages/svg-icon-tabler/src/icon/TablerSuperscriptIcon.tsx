import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSuperscriptIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSuperscriptIcon = React.forwardRef<SVGSVGElement, TablerSuperscriptIconProps>(
	function TablerSuperscriptIcon(props, ref) {
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
				<path d="M5 7l8 10m-8 0l8 -10" />
				<path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSuperscriptIcon.displayName = "TablerSuperscriptIcon";
}
