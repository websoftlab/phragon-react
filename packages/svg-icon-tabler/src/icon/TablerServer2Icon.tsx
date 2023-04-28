import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServer2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServer2Icon = React.forwardRef<SVGSVGElement, TablerServer2IconProps>(function TablerServer2Icon(
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
			<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M7 8l0 .01" />
			<path d="M7 16l0 .01" />
			<path d="M11 8h6" />
			<path d="M11 16h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerServer2Icon.displayName = "TablerServer2Icon";
}
