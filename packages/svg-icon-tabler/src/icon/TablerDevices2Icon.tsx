import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevices2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevices2Icon = React.forwardRef<SVGSVGElement, TablerDevices2IconProps>(function TablerDevices2Icon(
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
			<path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
			<path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
			<path d="M7 19l3 0" />
			<path d="M17 8l0 .01" />
			<path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M9 15l0 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDevices2Icon.displayName = "TablerDevices2Icon";
}
