import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceImacExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceImacExclamationIcon = React.forwardRef<SVGSVGElement, TablerDeviceImacExclamationIconProps>(
	function TablerDeviceImacExclamationIcon(props, ref) {
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
				<path d="M15 17h-11a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
				<path d="M3 13h13" />
				<path d="M8 21h7" />
				<path d="M10 17l-.5 4" />
				<path d="M14 17l.5 4" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceImacExclamationIcon.displayName = "TablerDeviceImacExclamationIcon";
}
