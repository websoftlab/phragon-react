import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandStravaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandStravaIcon = React.forwardRef<SVGSVGElement, TablerBrandStravaIconProps>(
	function TablerBrandStravaIcon(props, ref) {
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
				<path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandStravaIcon.displayName = "TablerBrandStravaIcon";
}
