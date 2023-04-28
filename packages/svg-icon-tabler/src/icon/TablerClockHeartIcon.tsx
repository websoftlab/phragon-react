import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockHeartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockHeartIcon = React.forwardRef<SVGSVGElement, TablerClockHeartIconProps>(
	function TablerClockHeartIcon(props, ref) {
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
				<path d="M20.956 11.107a9 9 0 1 0 -9.579 9.871" />
				<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
				<path d="M12 7v5l.5 .5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockHeartIcon.displayName = "TablerClockHeartIcon";
}
