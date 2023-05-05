import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFramerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFramerIcon = React.forwardRef<SVGSVGElement, TablerFramerIconProps>(function TablerFramerIcon(
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
			<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFramerIcon.displayName = "TablerFramerIcon";
}
