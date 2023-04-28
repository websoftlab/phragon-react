import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockUpIcon = React.forwardRef<SVGSVGElement, TablerClockUpIconProps>(function TablerClockUpIcon(
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
			<path d="M20.983 12.548a9 9 0 1 0 -8.45 8.436" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			<path d="M12 7v5l2.5 2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClockUpIcon.displayName = "TablerClockUpIcon";
}
