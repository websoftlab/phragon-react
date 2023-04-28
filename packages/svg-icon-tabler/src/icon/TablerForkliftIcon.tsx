import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerForkliftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerForkliftIcon = React.forwardRef<SVGSVGElement, TablerForkliftIconProps>(function TablerForkliftIcon(
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
			<path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 17l5 0" />
			<path d="M3 17v-6h13v6" />
			<path d="M5 11v-4h4" />
			<path d="M9 11v-6h4l3 6" />
			<path d="M22 15h-3v-10" />
			<path d="M16 13l3 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerForkliftIcon.displayName = "TablerForkliftIcon";
}
