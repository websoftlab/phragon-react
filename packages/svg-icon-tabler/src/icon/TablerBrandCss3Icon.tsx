import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCss3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCss3Icon = React.forwardRef<SVGSVGElement, TablerBrandCss3IconProps>(
	function TablerBrandCss3Icon(props, ref) {
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
				<path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCss3Icon.displayName = "TablerBrandCss3Icon";
}
