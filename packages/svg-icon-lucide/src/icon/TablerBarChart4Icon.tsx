import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarChart4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarChart4Icon = React.forwardRef<SVGSVGElement, TablerBarChart4IconProps>(
	function TablerBarChart4Icon(props, ref) {
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
				<path d="M3 3v18h18" />
				<path d="M13 17V9" />
				<path d="M18 17V5" />
				<path d="M8 17v-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarChart4Icon.displayName = "TablerBarChart4Icon";
}
