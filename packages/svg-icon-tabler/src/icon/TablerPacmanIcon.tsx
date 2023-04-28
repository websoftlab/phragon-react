import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPacmanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPacmanIcon = React.forwardRef<SVGSVGElement, TablerPacmanIconProps>(function TablerPacmanIcon(
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
			<path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
			<path d="M10.5,7.5a1,1 0 1,0 2,0a1,1 0 1,0 -2,0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPacmanIcon.displayName = "TablerPacmanIcon";
}
