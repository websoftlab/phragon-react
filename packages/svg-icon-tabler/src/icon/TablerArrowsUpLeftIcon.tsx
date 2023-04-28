import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsUpLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsUpLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowsUpLeftIconProps>(
	function TablerArrowsUpLeftIcon(props, ref) {
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
				<path d="M21 7l-4 -4l-4 4" />
				<path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
				<path d="M7 13l-4 4l4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsUpLeftIcon.displayName = "TablerArrowsUpLeftIcon";
}
