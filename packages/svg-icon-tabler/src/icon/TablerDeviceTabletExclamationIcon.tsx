import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceTabletExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceTabletExclamationIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceTabletExclamationIconProps
>(function TablerDeviceTabletExclamationIcon(props, ref) {
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
			<path d="M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
			<path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
			<path d="M19 16v3" />
			<path d="M19 22v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceTabletExclamationIcon.displayName = "TablerDeviceTabletExclamationIcon";
}
