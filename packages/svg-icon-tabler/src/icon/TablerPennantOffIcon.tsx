import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPennantOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPennantOffIcon = React.forwardRef<SVGSVGElement, TablerPennantOffIconProps>(
	function TablerPennantOffIcon(props, ref) {
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
				<path d="M8 21h4" />
				<path d="M10 21v-11m0 -4v-3" />
				<path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPennantOffIcon.displayName = "TablerPennantOffIcon";
}
