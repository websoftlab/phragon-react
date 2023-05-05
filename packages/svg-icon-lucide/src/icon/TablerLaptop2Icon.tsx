import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLaptop2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLaptop2Icon = React.forwardRef<SVGSVGElement, TablerLaptop2IconProps>(function TablerLaptop2Icon(
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
			<path d="M5 4 H19 A2 2 0 0 1 21 6 V14 A2 2 0 0 1 19 16 H5 A2 2 0 0 1 3 14 V6 A2 2 0 0 1 5 4 z" />
			<path d="M2 20 L22 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLaptop2Icon.displayName = "TablerLaptop2Icon";
}
