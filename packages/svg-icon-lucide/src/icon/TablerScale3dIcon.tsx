import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScale3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScale3dIcon = React.forwardRef<SVGSVGElement, TablerScale3dIconProps>(function TablerScale3dIcon(
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
			<path d="M21 19 A2 2 0 0 1 19 21 A2 2 0 0 1 17 19 A2 2 0 0 1 21 19" />
			<path d="M7 5 A2 2 0 0 1 5 7 A2 2 0 0 1 3 5 A2 2 0 0 1 7 5" />
			<path d="M5 7v12h12" />
			<path d="m5 19 6-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScale3dIcon.displayName = "TablerScale3dIcon";
}
