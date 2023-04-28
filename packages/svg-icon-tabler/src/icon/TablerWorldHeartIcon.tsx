import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldHeartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldHeartIcon = React.forwardRef<SVGSVGElement, TablerWorldHeartIconProps>(
	function TablerWorldHeartIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9.679 8.974" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h6.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.983 16.983 0 0 1 2.556 8.136" />
				<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldHeartIcon.displayName = "TablerWorldHeartIcon";
}
