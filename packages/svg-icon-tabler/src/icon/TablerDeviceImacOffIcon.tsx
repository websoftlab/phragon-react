import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceImacOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceImacOffIcon = React.forwardRef<SVGSVGElement, TablerDeviceImacOffIconProps>(
	function TablerDeviceImacOffIcon(props, ref) {
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
				<path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" />
				<path d="M3 13h10m4 0h4" />
				<path d="M8 21h8" />
				<path d="M10 17l-.5 4" />
				<path d="M14 17l.5 4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceImacOffIcon.displayName = "TablerDeviceImacOffIcon";
}
