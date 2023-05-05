import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBirdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBirdIcon = React.forwardRef<SVGSVGElement, TablerBirdIconProps>(function TablerBirdIcon(props, ref) {
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
			<path d="M16 7h.01" />
			<path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
			<path d="m20 7 2 .5-2 .5" />
			<path d="M10 18v3" />
			<path d="M14 17.75V21" />
			<path d="M7 18a6 6 0 0 0 3.84-10.61" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBirdIcon.displayName = "TablerBirdIcon";
}
