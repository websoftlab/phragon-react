import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCucumberIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCucumberIcon = React.forwardRef<SVGSVGElement, TablerBrandCucumberIconProps>(
	function TablerBrandCucumberIcon(props, ref) {
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
				<path d="M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01z" />
				<path d="M10.5 8l-.5 -1" />
				<path d="M13.5 14l.5 1" />
				<path d="M9 12.5l-1 .5" />
				<path d="M11 14l-.5 1" />
				<path d="M13 8l.5 -1" />
				<path d="M16 12.5l-1 -.5" />
				<path d="M9 10l-1 -.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCucumberIcon.displayName = "TablerBrandCucumberIcon";
}
