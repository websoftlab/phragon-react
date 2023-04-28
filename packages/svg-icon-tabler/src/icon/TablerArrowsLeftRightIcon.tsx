import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsLeftRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsLeftRightIcon = React.forwardRef<SVGSVGElement, TablerArrowsLeftRightIconProps>(
	function TablerArrowsLeftRightIcon(props, ref) {
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
				<path d="M21 17l-18 0" />
				<path d="M6 10l-3 -3l3 -3" />
				<path d="M3 7l18 0" />
				<path d="M18 20l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsLeftRightIcon.displayName = "TablerArrowsLeftRightIcon";
}
