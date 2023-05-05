import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownAZIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownAZIcon = React.forwardRef<SVGSVGElement, TablerArrowDownAZIconProps>(
	function TablerArrowDownAZIcon(props, ref) {
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
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
				<path d="M20 8h-5" />
				<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
				<path d="M15 14h5l-5 6h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDownAZIcon.displayName = "TablerArrowDownAZIcon";
}
