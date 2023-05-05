import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSearchIcon = React.forwardRef<SVGSVGElement, TablerSearchIconProps>(function TablerSearchIcon(
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
			<path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11" />
			<path d="M21 21 L16.65 16.65" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSearchIcon.displayName = "TablerSearchIcon";
}
