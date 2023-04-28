import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadioIcon = React.forwardRef<SVGSVGElement, TablerRadioIconProps>(function TablerRadioIcon(
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
			<path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
			<path d="M4 12h16" />
			<path d="M7 12v-2" />
			<path d="M17 16v.01" />
			<path d="M13 16v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRadioIcon.displayName = "TablerRadioIcon";
}
