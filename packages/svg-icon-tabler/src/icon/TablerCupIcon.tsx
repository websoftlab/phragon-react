import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCupIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCupIcon = React.forwardRef<SVGSVGElement, TablerCupIconProps>(function TablerCupIcon(props, ref) {
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
			<path d="M5 11h14v-3h-14z" />
			<path d="M17.5 11l-1.5 10h-8l-1.5 -10" />
			<path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
			<path d="M15 5v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCupIcon.displayName = "TablerCupIcon";
}
