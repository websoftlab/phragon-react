import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCpu2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCpu2Icon = React.forwardRef<SVGSVGElement, TablerCpu2IconProps>(function TablerCpu2Icon(props, ref) {
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
			<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
			<path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
			<path d="M3 10h2" />
			<path d="M3 14h2" />
			<path d="M10 3v2" />
			<path d="M14 3v2" />
			<path d="M21 10h-2" />
			<path d="M21 14h-2" />
			<path d="M14 21v-2" />
			<path d="M10 21v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCpu2Icon.displayName = "TablerCpu2Icon";
}
