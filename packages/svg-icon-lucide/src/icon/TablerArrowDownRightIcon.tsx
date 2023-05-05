import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownRightIcon = React.forwardRef<SVGSVGElement, TablerArrowDownRightIconProps>(
	function TablerArrowDownRightIcon(props, ref) {
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
				<path d="M7 7 L17 17" />
				<path d="M17 7 L17 17 L7 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDownRightIcon.displayName = "TablerArrowDownRightIcon";
}
