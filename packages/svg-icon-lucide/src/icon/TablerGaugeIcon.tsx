import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGaugeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGaugeIcon = React.forwardRef<SVGSVGElement, TablerGaugeIconProps>(function TablerGaugeIcon(
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
			<path d="m12 14 4-4" />
			<path d="M3.34 19a10 10 0 1 1 17.32 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGaugeIcon.displayName = "TablerGaugeIcon";
}
