import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDiffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDiffIcon = React.forwardRef<SVGSVGElement, TablerArrowsDiffIconProps>(
	function TablerArrowsDiffIcon(props, ref) {
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
				<path d="M11 16h10" />
				<path d="M11 16l4 4" />
				<path d="M11 16l4 -4" />
				<path d="M13 8h-10" />
				<path d="M13 8l-4 4" />
				<path d="M13 8l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDiffIcon.displayName = "TablerArrowsDiffIcon";
}
