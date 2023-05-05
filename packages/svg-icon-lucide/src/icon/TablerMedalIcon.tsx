import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMedalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMedalIcon = React.forwardRef<SVGSVGElement, TablerMedalIconProps>(function TablerMedalIcon(
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
			<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
			<path d="M11 12 5.12 2.2" />
			<path d="m13 12 5.88-9.8" />
			<path d="M8 7h8" />
			<path d="M17 17 A5 5 0 0 1 12 22 A5 5 0 0 1 7 17 A5 5 0 0 1 17 17" />
			<path d="M12 18v-2h-.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMedalIcon.displayName = "TablerMedalIcon";
}
