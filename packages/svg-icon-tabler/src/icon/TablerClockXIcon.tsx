import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockXIcon = React.forwardRef<SVGSVGElement, TablerClockXIconProps>(function TablerClockXIcon(
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
			<path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" />
			<path d="M12 7v5l2 2" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClockXIcon.displayName = "TablerClockXIcon";
}
