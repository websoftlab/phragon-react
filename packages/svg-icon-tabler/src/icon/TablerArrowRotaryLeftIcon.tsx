import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRotaryLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRotaryLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowRotaryLeftIconProps>(
	function TablerArrowRotaryLeftIcon(props, ref) {
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
				<path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
				<path d="M16 10v10" />
				<path d="M13 7h-10" />
				<path d="M7 11l-4 -4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRotaryLeftIcon.displayName = "TablerArrowRotaryLeftIcon";
}
