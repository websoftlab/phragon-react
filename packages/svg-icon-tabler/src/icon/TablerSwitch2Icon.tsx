import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwitch2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwitch2Icon = React.forwardRef<SVGSVGElement, TablerSwitch2IconProps>(function TablerSwitch2Icon(
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
			<path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
			<path d="M18 4l3 3l-3 3" />
			<path d="M3 7h5l7 10h6" />
			<path d="M18 20l3 -3l-3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwitch2Icon.displayName = "TablerSwitch2Icon";
}
