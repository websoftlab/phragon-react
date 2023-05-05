import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPercentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPercentIcon = React.forwardRef<SVGSVGElement, TablerPercentIconProps>(function TablerPercentIcon(
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
			<path d="M19 5 L5 19" />
			<path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5" />
			<path d="M20 17.5 A2.5 2.5 0 0 1 17.5 20 A2.5 2.5 0 0 1 15 17.5 A2.5 2.5 0 0 1 20 17.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPercentIcon.displayName = "TablerPercentIcon";
}
