import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowRampLeftIconProps>(
	function TablerArrowRampLeftIcon(props, ref) {
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
				<path d="M17 3l0 8.707" />
				<path d="M13 7l4 -4l4 4" />
				<path d="M7 14l-4 -4l4 -4" />
				<path d="M17 21a11 11 0 0 0 -11 -11h-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampLeftIcon.displayName = "TablerArrowRampLeftIcon";
}
