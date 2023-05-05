import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpRightFromCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpRightFromCircleIcon = React.forwardRef<SVGSVGElement, TablerArrowUpRightFromCircleIconProps>(
	function TablerArrowUpRightFromCircleIcon(props, ref) {
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
				<path d="M16 2 L22 2 L22 8" />
				<path d="M22 2 L12 12" />
				<path d="M22,12c0,5.5-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowUpRightFromCircleIcon.displayName = "TablerArrowUpRightFromCircleIcon";
}
