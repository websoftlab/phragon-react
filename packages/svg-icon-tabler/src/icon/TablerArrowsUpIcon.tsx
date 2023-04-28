import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsUpIcon = React.forwardRef<SVGSVGElement, TablerArrowsUpIconProps>(function TablerArrowsUpIcon(
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
			<path d="M17 3l0 18" />
			<path d="M4 6l3 -3l3 3" />
			<path d="M20 6l-3 -3l-3 3" />
			<path d="M7 3l0 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArrowsUpIcon.displayName = "TablerArrowsUpIcon";
}
