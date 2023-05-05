import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDnaOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDnaOffIcon = React.forwardRef<SVGSVGElement, TablerDnaOffIconProps>(function TablerDnaOffIcon(
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
			<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5" />
			<path d="M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5" />
			<path d="m17 6-2.5-2.5" />
			<path d="m14 8-1.5-1.5" />
			<path d="m7 18 2.5 2.5" />
			<path d="m3.5 14.5.5.5" />
			<path d="m20 9 .5.5" />
			<path d="m6.5 12.5 1 1" />
			<path d="m16.5 10.5 1 1" />
			<path d="m10 16 1.5 1.5" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDnaOffIcon.displayName = "TablerDnaOffIcon";
}
