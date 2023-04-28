import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStairsDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStairsDownIcon = React.forwardRef<SVGSVGElement, TablerStairsDownIconProps>(
	function TablerStairsDownIcon(props, ref) {
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
				<path d="M4 20h4v-4h4v-4h4v-4h4" />
				<path d="M11 4l-7 7v-4m4 4h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStairsDownIcon.displayName = "TablerStairsDownIcon";
}
