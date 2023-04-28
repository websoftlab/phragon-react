import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlag3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlag3Icon = React.forwardRef<SVGSVGElement, TablerFlag3IconProps>(function TablerFlag3Icon(
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
			<path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlag3Icon.displayName = "TablerFlag3Icon";
}
