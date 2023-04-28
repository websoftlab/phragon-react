import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRotaryRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRotaryRightIcon = React.forwardRef<SVGSVGElement, TablerArrowRotaryRightIconProps>(
	function TablerArrowRotaryRightIcon(props, ref) {
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
				<path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M8 10v10" />
				<path d="M17 11l4 -4l-4 -4" />
				<path d="M11 7h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRotaryRightIcon.displayName = "TablerArrowRotaryRightIcon";
}
