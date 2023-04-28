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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M13.41 10.59l2.59 -2.59" />
			<path d="M7 12a5 5 0 0 1 5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGaugeIcon.displayName = "TablerGaugeIcon";
}
