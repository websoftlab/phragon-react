import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEarIcon = React.forwardRef<SVGSVGElement, TablerEarIconProps>(function TablerEarIcon(props, ref) {
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
			<path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
			<path d="M10 10a3 3 0 1 1 5 2.2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEarIcon.displayName = "TablerEarIcon";
}
