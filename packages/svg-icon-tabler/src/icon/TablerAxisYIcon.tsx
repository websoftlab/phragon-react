import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAxisYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAxisYIcon = React.forwardRef<SVGSVGElement, TablerAxisYIconProps>(function TablerAxisYIcon(
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
			<path d="M11 20h-.01" />
			<path d="M15 20h-.01" />
			<path d="M19 20h-.01" />
			<path d="M4 7l3 -3l3 3" />
			<path d="M7 20v-16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAxisYIcon.displayName = "TablerAxisYIcon";
}
