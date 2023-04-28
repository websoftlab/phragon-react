import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBaselineDensityMediumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBaselineDensityMediumIcon = React.forwardRef<SVGSVGElement, TablerBaselineDensityMediumIconProps>(
	function TablerBaselineDensityMediumIcon(props, ref) {
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
				<path d="M4 20h16" />
				<path d="M4 12h16" />
				<path d="M4 4h16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBaselineDensityMediumIcon.displayName = "TablerBaselineDensityMediumIcon";
}
