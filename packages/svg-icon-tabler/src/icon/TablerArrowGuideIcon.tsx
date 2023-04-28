import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowGuideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowGuideIcon = React.forwardRef<SVGSVGElement, TablerArrowGuideIconProps>(
	function TablerArrowGuideIcon(props, ref) {
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
				<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7" />
				<path d="M18 4l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowGuideIcon.displayName = "TablerArrowGuideIcon";
}
