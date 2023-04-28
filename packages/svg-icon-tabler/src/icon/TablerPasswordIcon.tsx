import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPasswordIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPasswordIcon = React.forwardRef<SVGSVGElement, TablerPasswordIconProps>(function TablerPasswordIcon(
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
			<path d="M12 10v4" />
			<path d="M10 13l4 -2" />
			<path d="M10 11l4 2" />
			<path d="M5 10v4" />
			<path d="M3 13l4 -2" />
			<path d="M3 11l4 2" />
			<path d="M19 10v4" />
			<path d="M17 13l4 -2" />
			<path d="M17 11l4 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPasswordIcon.displayName = "TablerPasswordIcon";
}
