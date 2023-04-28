import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAxisXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAxisXIcon = React.forwardRef<SVGSVGElement, TablerAxisXIconProps>(function TablerAxisXIcon(
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
			<path d="M4 13v.01" />
			<path d="M4 9v.01" />
			<path d="M4 5v.01" />
			<path d="M17 20l3 -3l-3 -3" />
			<path d="M4 17h16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAxisXIcon.displayName = "TablerAxisXIcon";
}
