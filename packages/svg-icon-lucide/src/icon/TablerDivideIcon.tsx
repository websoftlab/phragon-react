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
			<path d="M13 6 A1 1 0 0 1 12 7 A1 1 0 0 1 11 6 A1 1 0 0 1 13 6" />
			<path d="M5 12 L19 12" />
			<path d="M13 18 A1 1 0 0 1 12 19 A1 1 0 0 1 11 18 A1 1 0 0 1 13 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDivideIcon.displayName = "TablerDivideIcon";
}
