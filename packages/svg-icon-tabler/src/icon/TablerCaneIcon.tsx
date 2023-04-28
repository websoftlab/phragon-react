import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaneIcon = React.forwardRef<SVGSVGElement, TablerCaneIconProps>(function TablerCaneIcon(props, ref) {
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
			<path d="M9 21l6.324 -11.69c.54 -.974 1.756 -4.104 -1.499 -5.762c-3.255 -1.657 -5.175 .863 -5.825 2.032" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCaneIcon.displayName = "TablerCaneIcon";
}
