import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDingtalkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDingtalkIcon = React.forwardRef<SVGSVGElement, TablerBrandDingtalkIconProps>(
	function TablerBrandDingtalkIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M8 7.5l7.02 2.632a1 1 0 0 1 .567 1.33l-1.087 2.538h1.5l-5 4l1 -4c-3.1 .03 -3.114 -3.139 -4 -6.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDingtalkIcon.displayName = "TablerBrandDingtalkIcon";
}
