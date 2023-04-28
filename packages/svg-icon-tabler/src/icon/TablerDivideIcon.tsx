import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDivideIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDivideIcon = React.forwardRef<SVGSVGElement, TablerDivideIconProps>(function TablerDivideIcon(
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
			<path d="M11,6a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
			<path d="M11,18a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
			<path d="M5 12l14 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDivideIcon.displayName = "TablerDivideIcon";
}
