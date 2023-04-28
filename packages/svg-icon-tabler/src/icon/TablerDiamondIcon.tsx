import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDiamondIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDiamondIcon = React.forwardRef<SVGSVGElement, TablerDiamondIconProps>(function TablerDiamondIcon(
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
			<path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
			<path d="M10 12l-2 -2.2l.6 -1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDiamondIcon.displayName = "TablerDiamondIcon";
}
