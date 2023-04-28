import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTicketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTicketIcon = React.forwardRef<SVGSVGElement, TablerTicketIconProps>(function TablerTicketIcon(
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
			<path d="M15 5l0 2" />
			<path d="M15 11l0 2" />
			<path d="M15 17l0 2" />
			<path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTicketIcon.displayName = "TablerTicketIcon";
}
