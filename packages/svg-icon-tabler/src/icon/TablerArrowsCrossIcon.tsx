import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsCrossIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsCrossIcon = React.forwardRef<SVGSVGElement, TablerArrowsCrossIconProps>(
	function TablerArrowsCrossIcon(props, ref) {
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
				<path d="M16 4h4v4" />
				<path d="M15 9l5 -5" />
				<path d="M4 20l5 -5" />
				<path d="M16 20h4v-4" />
				<path d="M4 4l16 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsCrossIcon.displayName = "TablerArrowsCrossIcon";
}
