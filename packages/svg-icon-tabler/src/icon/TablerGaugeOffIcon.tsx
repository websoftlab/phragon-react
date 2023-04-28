import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGaugeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGaugeOffIcon = React.forwardRef<SVGSVGElement, TablerGaugeOffIconProps>(function TablerGaugeOffIcon(
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
			<path d="M20.038 16.052a9 9 0 0 0 -12.067 -12.102m-2.333 1.686a9 9 0 1 0 12.73 12.726" />
			<path d="M11.283 11.303a1 1 0 0 0 1.419 1.41" />
			<path d="M14 10l2 -2" />
			<path d="M7 12c0 -1.386 .564 -2.64 1.475 -3.546m2.619 -1.372c.294 -.054 .597 -.082 .906 -.082" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGaugeOffIcon.displayName = "TablerGaugeOffIcon";
}
