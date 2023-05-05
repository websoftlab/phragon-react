import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWifiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWifiIcon = React.forwardRef<SVGSVGElement, TablerWifiIconProps>(function TablerWifiIcon(props, ref) {
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
			<path d="M5 13a10 10 0 0 1 14 0" />
			<path d="M8.5 16.5a5 5 0 0 1 7 0" />
			<path d="M2 8.82a15 15 0 0 1 20 0" />
			<path d="M12 20 L12.01 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWifiIcon.displayName = "TablerWifiIcon";
}
