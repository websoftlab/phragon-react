import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsRightDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsRightDownIcon = React.forwardRef<SVGSVGElement, TablerArrowsRightDownIconProps>(
	function TablerArrowsRightDownIcon(props, ref) {
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
				<path d="M3 17l4 4l4 -4" />
				<path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
				<path d="M17 11l4 -4l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsRightDownIcon.displayName = "TablerArrowsRightDownIcon";
}
