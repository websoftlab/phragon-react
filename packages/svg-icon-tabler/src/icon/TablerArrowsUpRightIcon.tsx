import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsUpRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsUpRightIcon = React.forwardRef<SVGSVGElement, TablerArrowsUpRightIconProps>(
	function TablerArrowsUpRightIcon(props, ref) {
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
				<path d="M17 21l4 -4l-4 -4" />
				<path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
				<path d="M11 7l-4 -4l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsUpRightIcon.displayName = "TablerArrowsUpRightIcon";
}
