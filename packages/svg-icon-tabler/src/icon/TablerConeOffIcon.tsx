import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConeOffIcon = React.forwardRef<SVGSVGElement, TablerConeOffIconProps>(function TablerConeOffIcon(
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
			<path d="M18.305 18.305c-1.132 1 -3.53 1.695 -6.305 1.695c-3.866 0 -7 -1.343 -7 -3s3.134 -3 7 -3c.747 0 1.467 .05 2.142 .143" />
			<path d="M17.07 13.054l-5.07 -9.054l-1.432 2.558m-1.439 2.569l-4.129 7.373v.5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerConeOffIcon.displayName = "TablerConeOffIcon";
}
