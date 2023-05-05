import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBigLeftDashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBigLeftDashIcon = React.forwardRef<SVGSVGElement, TablerArrowBigLeftDashIconProps>(
	function TablerArrowBigLeftDashIcon(props, ref) {
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
				<path d="M19 15V9" />
				<path d="M15 15h-3v4l-7-7 7-7v4h3v6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBigLeftDashIcon.displayName = "TablerArrowBigLeftDashIcon";
}
