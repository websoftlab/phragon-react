import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceIpadXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceIpadXIcon = React.forwardRef<SVGSVGElement, TablerDeviceIpadXIconProps>(
	function TablerDeviceIpadXIcon(props, ref) {
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
				<path d="M22 22l-5 -5" />
				<path d="M17 22l5 -5" />
				<path d="M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9" />
				<path d="M9 18h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceIpadXIcon.displayName = "TablerDeviceIpadXIcon";
}
