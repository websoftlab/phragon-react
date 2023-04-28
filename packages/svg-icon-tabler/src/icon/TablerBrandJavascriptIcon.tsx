import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandJavascriptIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandJavascriptIcon = React.forwardRef<SVGSVGElement, TablerBrandJavascriptIconProps>(
	function TablerBrandJavascriptIcon(props, ref) {
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
				<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
				<path d="M7.5 8h3v8l-2 -1" />
				<path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandJavascriptIcon.displayName = "TablerBrandJavascriptIcon";
}
