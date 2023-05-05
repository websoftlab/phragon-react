import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookUpIcon = React.forwardRef<SVGSVGElement, TablerBookUpIconProps>(function TablerBookUpIcon(
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
			<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
			<path d="M12,13V7" />
			<path d="M9,10l3-3l3,3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookUpIcon.displayName = "TablerBookUpIcon";
}
