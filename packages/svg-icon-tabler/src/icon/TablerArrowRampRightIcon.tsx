import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampRightIcon = React.forwardRef<SVGSVGElement, TablerArrowRampRightIconProps>(
	function TablerArrowRampRightIcon(props, ref) {
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
				<path d="M7 3l0 8.707" />
				<path d="M11 7l-4 -4l-4 4" />
				<path d="M17 14l4 -4l-4 -4" />
				<path d="M7 21a11 11 0 0 1 11 -11h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampRightIcon.displayName = "TablerArrowRampRightIcon";
}
