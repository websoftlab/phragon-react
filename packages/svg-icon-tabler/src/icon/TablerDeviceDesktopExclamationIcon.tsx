import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceDesktopExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceDesktopExclamationIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceDesktopExclamationIconProps
>(function TablerDeviceDesktopExclamationIcon(props, ref) {
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
			<path d="M15 16h-11a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
			<path d="M7 20h8" />
			<path d="M9 16v4" />
			<path d="M15 16v4" />
			<path d="M19 16v3" />
			<path d="M19 22v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceDesktopExclamationIcon.displayName = "TablerDeviceDesktopExclamationIcon";
}
