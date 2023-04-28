import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBaselineDensitySmallIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBaselineDensitySmallIcon = React.forwardRef<SVGSVGElement, TablerBaselineDensitySmallIconProps>(
	function TablerBaselineDensitySmallIcon(props, ref) {
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
				<path d="M4 3h16" />
				<path d="M4 9h16" />
				<path d="M4 15h16" />
				<path d="M4 21h16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBaselineDensitySmallIcon.displayName = "TablerBaselineDensitySmallIcon";
}
