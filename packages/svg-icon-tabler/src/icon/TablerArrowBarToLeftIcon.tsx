import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBarToLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBarToLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowBarToLeftIconProps>(
	function TablerArrowBarToLeftIcon(props, ref) {
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
				<path d="M10 12l10 0" />
				<path d="M10 12l4 4" />
				<path d="M10 12l4 -4" />
				<path d="M4 4l0 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBarToLeftIcon.displayName = "TablerArrowBarToLeftIcon";
}
