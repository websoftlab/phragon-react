import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMountainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMountainIcon = React.forwardRef<SVGSVGElement, TablerMountainIconProps>(function TablerMountainIcon(
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
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMountainIcon.displayName = "TablerMountainIcon";
}
