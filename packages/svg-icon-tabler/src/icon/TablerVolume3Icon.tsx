import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVolume3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVolume3Icon = React.forwardRef<SVGSVGElement, TablerVolume3IconProps>(function TablerVolume3Icon(
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
			<path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
			<path d="M16 10l4 4m0 -4l-4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVolume3Icon.displayName = "TablerVolume3Icon";
}
