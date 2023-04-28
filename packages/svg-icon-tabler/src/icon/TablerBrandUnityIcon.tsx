import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandUnityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandUnityIcon = React.forwardRef<SVGSVGElement, TablerBrandUnityIconProps>(
	function TablerBrandUnityIcon(props, ref) {
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
				<path d="M14 3l6 4v7" />
				<path d="M18 17l-6 4l-6 -4" />
				<path d="M4 14v-7l6 -4" />
				<path d="M4 7l8 5v9" />
				<path d="M20 7l-8 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandUnityIcon.displayName = "TablerBrandUnityIcon";
}
