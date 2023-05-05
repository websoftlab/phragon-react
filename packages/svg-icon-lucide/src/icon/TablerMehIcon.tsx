import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMehIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMehIcon = React.forwardRef<SVGSVGElement, TablerMehIconProps>(function TablerMehIcon(props, ref) {
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M8 15 L16 15" />
			<path d="M9 9 L9.01 9" />
			<path d="M15 9 L15.01 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMehIcon.displayName = "TablerMehIcon";
}
