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
			<path d="m13.7,2.7l7.59,7.59c.94.94.94,2.47,0,3.41l-7.59,7.59c-.94.94-2.47.94-3.41,0l-7.59-7.59c-.94-.94-.94-2.47,0-3.41l7.59-7.59c.94-.94,2.47-.94,3.41,0Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDiamondIcon.displayName = "TablerDiamondIcon";
}
