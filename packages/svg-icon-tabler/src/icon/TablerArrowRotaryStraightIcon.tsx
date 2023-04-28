import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRotaryStraightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRotaryStraightIcon = React.forwardRef<SVGSVGElement, TablerArrowRotaryStraightIconProps>(
	function TablerArrowRotaryStraightIcon(props, ref) {
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
				<path d="M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M13 16v5" />
				<path d="M13 3v7" />
				<path d="M9 7l4 -4l4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRotaryStraightIcon.displayName = "TablerArrowRotaryStraightIcon";
}
