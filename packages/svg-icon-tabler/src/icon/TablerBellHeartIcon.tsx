import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellHeartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellHeartIcon = React.forwardRef<SVGSVGElement, TablerBellHeartIconProps>(
	function TablerBellHeartIcon(props, ref) {
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
				<path d="M10 17h-6a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6" />
				<path d="M9 17v1c0 1.408 .97 2.59 2.28 2.913" />
				<path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBellHeartIcon.displayName = "TablerBellHeartIcon";
}
