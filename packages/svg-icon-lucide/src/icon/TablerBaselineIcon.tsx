import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBaselineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBaselineIcon = React.forwardRef<SVGSVGElement, TablerBaselineIconProps>(function TablerBaselineIcon(
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
			<path d="M4 20h16" />
			<path d="m6 16 6-12 6 12" />
			<path d="M8 12h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBaselineIcon.displayName = "TablerBaselineIcon";
}
