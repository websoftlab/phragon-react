import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceGamepadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceGamepadIcon = React.forwardRef<SVGSVGElement, TablerDeviceGamepadIconProps>(
	function TablerDeviceGamepadIcon(props, ref) {
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
				<path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
				<path d="M6 12h4m-2 -2v4" />
				<path d="M15 11l0 .01" />
				<path d="M18 13l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceGamepadIcon.displayName = "TablerDeviceGamepadIcon";
}
