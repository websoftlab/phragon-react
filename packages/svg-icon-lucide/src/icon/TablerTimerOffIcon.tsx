import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTimerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTimerOffIcon = React.forwardRef<SVGSVGElement, TablerTimerOffIconProps>(function TablerTimerOffIcon(
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
			<path d="M10 2h4" />
			<path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
			<path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
			<path d="m2 2 20 20" />
			<path d="M12 12v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTimerOffIcon.displayName = "TablerTimerOffIcon";
}
