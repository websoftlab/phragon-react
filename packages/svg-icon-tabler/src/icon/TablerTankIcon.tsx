import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTankIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTankIcon = React.forwardRef<SVGSVGElement, TablerTankIconProps>(function TablerTankIcon(props, ref) {
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
			<path d="M2 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M6 12l1 -5h5l3 5" />
			<path d="M21 9l-7.8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTankIcon.displayName = "TablerTankIcon";
}
