import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBarToRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBarToRightIcon = React.forwardRef<SVGSVGElement, TablerArrowBarToRightIconProps>(
	function TablerArrowBarToRightIcon(props, ref) {
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
				<path d="M14 12l-10 0" />
				<path d="M14 12l-4 4" />
				<path d="M14 12l-4 -4" />
				<path d="M20 4l0 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBarToRightIcon.displayName = "TablerArrowBarToRightIcon";
}
