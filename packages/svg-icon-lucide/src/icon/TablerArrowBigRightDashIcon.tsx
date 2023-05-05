import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBigRightDashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBigRightDashIcon = React.forwardRef<SVGSVGElement, TablerArrowBigRightDashIconProps>(
	function TablerArrowBigRightDashIcon(props, ref) {
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
				<path d="M5 9v6" />
				<path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBigRightDashIcon.displayName = "TablerArrowBigRightDashIcon";
}
