import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlarmOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlarmOffIcon = React.forwardRef<SVGSVGElement, TablerAlarmOffIconProps>(function TablerAlarmOffIcon(
	props,
	ref
) {
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
			<path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" />
			<path d="M12 12v1h1" />
			<path d="M5.261 5.265l-1.011 .735" />
			<path d="M17 4l2.75 2" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlarmOffIcon.displayName = "TablerAlarmOffIcon";
}
