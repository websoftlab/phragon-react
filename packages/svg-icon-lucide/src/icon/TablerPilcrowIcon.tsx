import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPilcrowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPilcrowIcon = React.forwardRef<SVGSVGElement, TablerPilcrowIconProps>(function TablerPilcrowIcon(
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
			<path d="M13 4v16" />
			<path d="M17 4v16" />
			<path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPilcrowIcon.displayName = "TablerPilcrowIcon";
}
