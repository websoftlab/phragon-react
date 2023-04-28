import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPrayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPrayIcon = React.forwardRef<SVGSVGElement, TablerPrayIconProps>(function TablerPrayIcon(props, ref) {
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
			<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M7 20h8l-4 -4v-7l4 3l2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPrayIcon.displayName = "TablerPrayIcon";
}
